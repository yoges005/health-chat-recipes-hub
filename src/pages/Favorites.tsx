
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites } = useFavorites();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Your Favorite Recipes</h1>
      
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteRecipes.map((recipe) => (
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
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-gray-500 mb-6">
            You haven't added any recipes to your favorites yet.
          </p>
          <Link to="/categories">
            <Button className="bg-foodie hover:bg-foodie-hover">
              Browse Recipes
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
