
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/card";
import { getRecipeById } from "@/data/recipes";
import { Heart, ArrowLeft, Clock } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

const RecipeDetail = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const recipe = getRecipeById(recipeId || "");
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const [isFav, setIsFav] = useState<boolean>(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Initialize favorite state
  useEffect(() => {
    if (recipeId) {
      setIsFav(isFavorite(recipeId));
    }
  }, [recipeId, isFavorite]);
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <p className="mb-6">The recipe you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/categories")}>
          Back to Categories
        </Button>
      </div>
    );
  }
  
  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add recipes to favorites",
        variant: "destructive",
      });
      return;
    }
    
    if (isFav) {
      removeFromFavorites(recipe.id);
      setIsFav(false);
      toast({
        title: "Removed from favorites",
        description: `${recipe.title} has been removed from your favorites`,
      });
    } else {
      addToFavorites(recipe.id);
      setIsFav(true);
      toast({
        title: "Added to favorites",
        description: `${recipe.title} has been added to your favorites`,
      });
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-foodie mb-6"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image and basic info */}
        <div>
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute top-4 right-4">
              <button
                onClick={handleFavoriteClick}
                className={`p-2 rounded-full ${
                  isFav
                    ? "bg-foodie text-white"
                    : "bg-white text-gray-400 hover:text-foodie"
                } shadow-md transition-colors`}
                aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={20} className={isFav ? "fill-white" : ""} />
              </button>
            </div>
          </div>
          
          {/* Recipe info */}
          <div className="mt-6 bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Clock size={20} className="text-gray-400 mr-2" />
                <span className="text-gray-600">
                  Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min | Total:{" "}
                  {recipe.prepTime + recipe.cookTime} min
                </span>
              </div>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                {recipe.servings} servings
              </span>
            </div>
            
            {/* Nutrition info */}
            <h3 className="font-semibold text-lg mb-2">Nutrition (per serving)</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Calories</p>
                <p className="font-bold">{recipe.nutrition.calories}</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Protein</p>
                <p className="font-bold">{recipe.nutrition.protein}g</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Carbs</p>
                <p className="font-bold">{recipe.nutrition.carbs}g</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Fat</p>
                <p className="font-bold">{recipe.nutrition.fat}g</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Sugar</p>
                <p className="font-bold">{recipe.nutrition.sugar}g</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="text-sm text-gray-500">Sodium</p>
                <p className="font-bold">{recipe.nutrition.sodium}mg</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">Health Category</h3>
              <span 
                className={`inline-block px-3 py-1 rounded-full text-white ${
                  recipe.category === "diabetes" ? "bg-blue-500" :
                  recipe.category === "heart-disease" ? "bg-red-500" :
                  recipe.category === "ulcer" ? "bg-purple-500" :
                  "bg-green-500"
                }`}
              >
                {recipe.category === "heart-disease" ? "Heart Health" : 
                 recipe.category === "general" ? "General Healthy" : 
                 recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Recipe details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Ingredients</h2>
          <ul className="mb-6 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-4 h-4 mt-1 mr-2 bg-foodie rounded-full" />
                {ingredient}
              </li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Instructions</h2>
          <ol className="mb-6 space-y-4 list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="pl-2">
                <span className="ml-2">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
