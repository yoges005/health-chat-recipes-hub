
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { useAuth } from "@/context/AuthContext";
import { Heart, Weight, LeafyGreen, Baby, Pill } from "lucide-react";

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  const getFeaturedRecipes = () => {
    const categories = ["diabetes", "heart-disease", "ulcer", "general", "blood-pressure", "weight-loss", "keto-diet", "pregnancy", "gastric-issue", "weight-gain"];
    const featuredRecipes = [];
    
    for (const category of categories) {
      const categoryRecipes = recipes.filter(recipe => recipe.category === category);
      const randomRecipes = [...categoryRecipes]
        .sort(() => 0.5 - Math.random())
        .slice(0, 1);
      
      featuredRecipes.push(...randomRecipes);
    }
    
    return featuredRecipes;
  };
  
  const featuredRecipes = getFeaturedRecipes();
  
  const categoryImages = {
    "diabetes": "photo-1505253758473-96b7015fcd40",
    "heart-disease": "photo-1504674900247-0877df9cc836",
    "ulcer": "photo-1493770348161-369560ae357d",
    "general": "photo-1512621776951-a57141f2eefd",
    "blood-pressure": "photo-1563805042-7684c019e1cb",
    "weight-loss": "photo-1490645935967-10de6ba17061",
    "weight-gain": "photo-1583608205776-bfd35f0d9f83",
    "keto-diet": "photo-1635321593217-6dbbca0a8809",
    "pregnancy": "photo-1519056352125-691a1e0fb5ca",
    "gastric-issue": "photo-1607330289024-1535c6b4e1c1"
  };

  return (
    <div>
      <section className="hero-section">
        <div className="relative overflow-hidden h-[70vh]">
          <img 
            src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1770&auto=format&fit=crop"
            alt="Food background" 
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-12 lg:px-24">
            <div className="max-w-xl hero-content animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                FOODIE CRAFT
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Your food, your way... Craft your perfect meal anytime!
              </p>
              {isAuthenticated ? (
                <Link to="/categories">
                  <Button className="bg-foodie hover:bg-foodie-hover text-white px-8 py-6 text-lg">
                    Browse Recipes
                  </Button>
                </Link>
              ) : (
                <Link to="/signup">
                  <Button className="bg-foodie hover:bg-foodie-hover text-white px-8 py-6 text-lg">
                    Join Now
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Health-Focused Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {id: "diabetes", name: "Diabetes", desc: "Low-glycemic recipes for managing blood sugar", icon: null},
              {id: "heart-disease", name: "Heart Health", desc: "Heart-friendly meals low in sodium and unhealthy fats", icon: <Heart size={18} />},
              {id: "ulcer", name: "Ulcer", desc: "Gentle recipes that won't irritate sensitive stomachs", icon: null},
              {id: "blood-pressure", name: "Blood Pressure", desc: "Low-sodium meals rich in potassium and magnesium", icon: <Heart size={18} />},
              {id: "weight-loss", name: "Weight Loss", desc: "Low-calorie, nutrient-dense meals for healthy weight loss", icon: <Weight size={18} />},
              {id: "weight-gain", name: "Weight Gain", desc: "Calorie-rich, nutritious meals for healthy weight gain", icon: <Weight size={18} />},
              {id: "keto-diet", name: "Keto Diet", desc: "High-fat, low-carb recipes for ketogenic lifestyle", icon: <LeafyGreen size={18} />},
              {id: "pregnancy", name: "Pregnancy", desc: "Nutrient-rich meals for expecting mothers", icon: <Baby size={18} />},
              {id: "gastric-issue", name: "Gastric Issues", desc: "Easily digestible recipes for sensitive stomachs", icon: <Pill size={18} />},
              {id: "general", name: "General Healthy", desc: "Nutritious meals for overall health and wellness", icon: null}
            ].map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full hover:shadow-xl">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${categoryImages[category.id]}`}
                      alt={category.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg capitalize flex items-center gap-2">
                      {category.icon && category.icon}
                      {category.name} Recipes
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      {category.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.slice(0, 8).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
                prepTime={recipe.prepTime}
                cookTime={recipe.cookTime}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/categories">
              <Button className="bg-foodie hover:bg-foodie-hover">
                View All Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Personalized Recommendations</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Chat with our AI assistant to discover recipes tailored to your specific health needs
          </p>
          {isAuthenticated ? (
            <p className="text-lg">
              Try asking our chatbot about recipes for specific health conditions!
            </p>
          ) : (
            <Link to="/signup">
              <Button className="bg-foodie hover:bg-foodie-hover">
                Sign Up Now
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
