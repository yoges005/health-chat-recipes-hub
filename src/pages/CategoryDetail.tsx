
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Maps category IDs in URLs to display names and descriptions
  const categoryInfo: Record<string, { title: string; description: string; image: string }> = {
    "diabetes": {
      title: "Diabetes-Friendly Recipes",
      description: "These recipes are designed with diabetes management in mind, focusing on low glycemic index ingredients, balanced carbohydrates, and healthy fats to help maintain stable blood sugar levels.",
      image: "photo-1505253758473-96b7015fcd40",
    },
    "heart-disease": {
      title: "Heart-Healthy Recipes",
      description: "Our heart-healthy recipes focus on reducing sodium and unhealthy fats while incorporating omega-3 rich foods, lean proteins, and plenty of fruits and vegetables to support cardiovascular health.",
      image: "photo-1504674900247-0877df9cc836",
    },
    "ulcer": {
      title: "Ulcer-Friendly Recipes",
      description: "These gentle recipes are designed for sensitive stomachs, avoiding irritating ingredients like spices, acidic foods, and excessive fats that might trigger or worsen ulcer symptoms.",
      image: "photo-1493770348161-369560ae357d",
    },
    "general": {
      title: "General Healthy Recipes",
      description: "Our collection of nutritious, well-balanced recipes for overall health and wellness, suitable for those without specific dietary restrictions.",
      image: "photo-1512621776951-a57141f2eefd",
    },
  };
  
  const currentCategory = categoryId || "";
  const categoryRecipes = recipes.filter(recipe => recipe.category === currentCategory);
  const info = categoryInfo[currentCategory] || {
    title: "Recipes",
    description: "Browse our collection of healthy recipes.",
    image: "photo-1499028344343-cd173ffc68a9",
  };
  
  // Fix for image URLs to ensure proper loading
  const bannerImageUrl = info.image?.startsWith("http") 
    ? info.image 
    : `https://images.unsplash.com/${info.image}`;
  
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={bannerImageUrl}
          alt={info.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{info.title}</h1>
            <p className="max-w-2xl mx-auto">{info.description}</p>
          </div>
        </div>
      </div>
      
      {/* Recipes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryRecipes.map((recipe) => (
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
          {categoryRecipes.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No recipes found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
