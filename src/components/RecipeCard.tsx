
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "../context/AuthContext";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
}

const RecipeCard = ({ id, title, image, description, prepTime, cookTime }: RecipeCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to add recipes to favorites",
        variant: "destructive",
      });
      return;
    }
    
    if (favorite) {
      removeFromFavorites(id);
      toast({
        title: "Removed from favorites",
        description: `${title} has been removed from your favorites`,
      });
    } else {
      addToFavorites(id);
      toast({
        title: "Added to favorites",
        description: `${title} has been added to your favorites`,
      });
    }
  };

  // Fix for image URLs to ensure proper loading
  const fixedImageUrl = image ? (
    image.startsWith("http") ? image : 
    image.startsWith("photo-") ? `https://images.unsplash.com/${image}` :
    `/placeholder.svg`
  ) : `/placeholder.svg`;

  return (
    <Card className="h-full overflow-hidden recipe-card shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <Link to={`/recipe/${id}`} className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={fixedImageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          <div className="recipe-overlay opacity-0 absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
              View Recipe
            </span>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
            <button
              onClick={handleFavoriteClick}
              className={`p-1 rounded-full ${
                favorite
                  ? "text-foodie"
                  : "text-gray-400 hover:text-foodie"
              } transition-colors`}
            >
              <Heart
                size={20}
                className={favorite ? "fill-foodie" : ""}
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">{description}</p>
          <div className="mt-auto flex justify-between text-sm text-gray-500">
            <span>Prep: {prepTime} min</span>
            <span>Cook: {cookTime} min</span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default RecipeCard;
