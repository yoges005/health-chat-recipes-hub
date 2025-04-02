
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { recipes } from "../data/recipes";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessage: Message = {
  id: "welcome",
  text: "Hello! I'm your Foodie Craft assistant. Ask me for recipe suggestions based on your dietary needs or preferences!",
  sender: "bot",
  timestamp: new Date(),
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Health condition detection
    const hasDiabetes = lowerQuery.includes("diabetes") || lowerQuery.includes("sugar") || lowerQuery.includes("blood sugar");
    const hasHeartDisease = lowerQuery.includes("heart") || lowerQuery.includes("cholesterol");
    const hasBloodPressure = lowerQuery.includes("blood pressure") || lowerQuery.includes("hypertension");
    const hasUlcer = lowerQuery.includes("ulcer") || lowerQuery.includes("stomach pain");
    const hasGastricIssue = lowerQuery.includes("gastric") || lowerQuery.includes("acid reflux") || lowerQuery.includes("gerd") || lowerQuery.includes("indigestion");
    const wantsWeightLoss = lowerQuery.includes("weight loss") || lowerQuery.includes("lose weight") || lowerQuery.includes("diet") || lowerQuery.includes("slimming");
    const wantsWeightGain = lowerQuery.includes("weight gain") || lowerQuery.includes("gain weight") || lowerQuery.includes("bulk up") || lowerQuery.includes("underweight");
    const wantsKeto = lowerQuery.includes("keto") || lowerQuery.includes("ketogenic") || lowerQuery.includes("low carb");
    const isPregnant = lowerQuery.includes("pregnant") || lowerQuery.includes("pregnancy") || lowerQuery.includes("expecting");
    
    // Food type detection
    const wantsBreakfast = lowerQuery.includes("breakfast") || lowerQuery.includes("morning");
    const wantsLunch = lowerQuery.includes("lunch");
    const wantsDinner = lowerQuery.includes("dinner");
    const wantsDessert = lowerQuery.includes("dessert") || lowerQuery.includes("sweet");
    
    // Ingredient detection
    const mentionsChicken = lowerQuery.includes("chicken");
    const mentionsVegetarian = lowerQuery.includes("vegetarian") || lowerQuery.includes("vegan");
    const mentionsFish = lowerQuery.includes("fish") || lowerQuery.includes("seafood");
    
    let recipeCategory = "";
    
    // Determine the most relevant category based on query
    if (hasDiabetes) recipeCategory = "diabetes";
    else if (hasHeartDisease) recipeCategory = "heart-disease";
    else if (hasBloodPressure) recipeCategory = "blood-pressure";
    else if (hasUlcer) recipeCategory = "ulcer";
    else if (hasGastricIssue) recipeCategory = "gastric-issue";
    else if (wantsWeightLoss) recipeCategory = "weight-loss";
    else if (wantsWeightGain) recipeCategory = "weight-gain";
    else if (wantsKeto) recipeCategory = "keto-diet";
    else if (isPregnant) recipeCategory = "pregnancy";
    else recipeCategory = "general";
    
    const categoryRecipes = recipes.filter(recipe => recipe.category === recipeCategory);
    let filteredRecipes = [...categoryRecipes];
    
    if (mentionsChicken) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.ingredients.some(ing => ing.toLowerCase().includes("chicken"))
      );
    }
    
    if (mentionsVegetarian) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        !recipe.ingredients.some(ing => 
          ing.toLowerCase().includes("chicken") || 
          ing.toLowerCase().includes("beef") || 
          ing.toLowerCase().includes("pork") || 
          ing.toLowerCase().includes("fish")
        )
      );
    }
    
    if (mentionsFish) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.ingredients.some(ing => ing.toLowerCase().includes("fish") || ing.toLowerCase().includes("salmon"))
      );
    }
    
    // Filter by meal type
    if (wantsBreakfast) {
      // Breakfast typically has shorter prep times and certain ingredients
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.prepTime <= 15 || 
        recipe.ingredients.some(ing => 
          ing.toLowerCase().includes("oat") || 
          ing.toLowerCase().includes("egg") ||
          ing.toLowerCase().includes("toast") ||
          ing.toLowerCase().includes("breakfast")
        )
      );
    }
    
    if (wantsDinner) {
      // Dinner typically has longer prep times
      filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime + recipe.cookTime > 20);
    }
    
    if (filteredRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
      const suggestedRecipe = filteredRecipes[randomIndex];
      
      return `Based on your needs, I recommend trying "${suggestedRecipe.title}". It has ${suggestedRecipe.nutrition.calories} calories per serving and takes ${suggestedRecipe.prepTime + suggestedRecipe.cookTime} minutes to prepare. You can find the full recipe by searching for it in our recipes section!`;
    } else if (categoryRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryRecipes.length);
      const suggestedRecipe = categoryRecipes[randomIndex];
      
      return `I found a great recipe for your health condition: "${suggestedRecipe.title}". It's specially crafted to be suitable for your dietary needs. Check it out in our recipes section!`;
    } else {
      return "I'm not sure I found the perfect match for your request. Could you provide more details about your dietary needs or the type of food you're looking for?";
    }
  };
  
  const handleSendMessage = () => {
    if (input.trim() === "") return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  return (
    <>
      {/* Chatbot button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-foodie hover:bg-foodie-hover z-50"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </Button>
      
      {/* Chatbot window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] shadow-xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-foodie text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Foodie Craft Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-foodie-hover p-1 h-auto">
              <X size={18} />
            </Button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-foodie text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: "2-digit", 
                      minute: "2-digit" 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t">
            <form
              className="flex space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-foodie hover:bg-foodie-hover"
                disabled={input.trim() === ""}
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
