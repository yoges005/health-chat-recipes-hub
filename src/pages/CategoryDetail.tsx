
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
    "blood-pressure": {
      title: "Blood Pressure Management Recipes",
      description: "Recipes specially formulated to help manage blood pressure, focusing on low-sodium ingredients and foods rich in potassium, calcium, and magnesium.",
      image: "photo-1563805042-7684c019e1cb",
    },
    "weight-loss": {
      title: "Weight Loss Recipes",
      description: "Low-calorie, nutrient-dense meals designed to support healthy weight loss while keeping you satisfied and energized throughout the day.",
      image: "photo-1490645935967-10de6ba17061",
    },
    "weight-gain": {
      title: "Weight Gain Recipes",
      description: "Calorie-rich, nutrient-dense recipes to help with healthy weight gain and muscle building for those who need to increase their body weight.",
      image: "photo-1583608205776-bfd35f0d9f83",
    },
    "keto-diet": {
      title: "Keto Diet Recipes",
      description: "High-fat, low-carb recipes perfect for those following a ketogenic diet to achieve or maintain ketosis.",
      image: "photo-1635321593217-6dbbca0a8809",
    },
    "pregnancy": {
      title: "Pregnancy-Friendly Recipes",
      description: "Nutritious meals rich in essential nutrients like folate, iron, and calcium to support the health of both mother and baby during pregnancy.",
      image: "photo-1519056352125-691a1e0fb5ca",
    },
    "gastric-issue": {
      title: "Gastric-Friendly Recipes",
      description: "Gentle, easily digestible recipes designed for those with sensitive stomachs, acid reflux, or other gastric issues.",
      image: "photo-1607330289024-1535c6b4e1c1",
    }
  };
  
  const currentCategory = categoryId || "";
  const categoryRecipes = recipes.filter(recipe => recipe.category === currentCategory);
  const info = categoryInfo[currentCategory] || {
    title: "Recipes",
    description: "Browse our collection of healthy recipes.",
    image: "photo-1499028344343-cd173ffc68a9",
  };
  
  // Fix for image URLs to ensure proper loading
  const bannerImageUrl = info.image ? (
    info.image.startsWith("http") ? info.image : 
    info.image.startsWith("photo-") ? `https://images.unsplash.com/${info.image}` :
    `/placeholder.svg`
  ) : `/placeholder.svg`;
  
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={bannerImageUrl}
          alt={info.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
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
