
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { Heart, Weight, LeafyGreen, Baby, Pill } from "lucide-react";

const Categories = () => {
  const { categoryId } = useParams();
  
  // Filter recipes by category if a category is selected
  const filteredRecipes = categoryId 
    ? recipes.filter(recipe => recipe.category === categoryId)
    : recipes;
  
  // Category information mapping
  const categoryInfo = {
    "diabetes": {
      title: "Diabetes-Friendly Recipes",
      description: "Low-glycemic meals designed to help manage blood sugar levels while still being delicious and satisfying.",
      icon: null
    },
    "heart-disease": {
      title: "Heart Health Recipes",
      description: "Low-sodium, low-fat recipes that support cardiovascular health and reduce risk factors for heart disease.",
      icon: <Heart size={20} className="text-foodie" />
    },
    "ulcer": {
      title: "Ulcer-Friendly Recipes",
      description: "Gentle, non-irritating meals that avoid triggering ulcer symptoms while providing essential nutrition.",
      icon: null
    },
    "general": {
      title: "General Healthy Recipes",
      description: "Nutritionally balanced meals that support overall health and wellbeing for everyone.",
      icon: null
    },
    "blood-pressure": {
      title: "Blood Pressure Management Recipes",
      description: "Low-sodium recipes rich in potassium, magnesium, and calcium to help regulate blood pressure naturally.",
      icon: <Heart size={20} className="text-foodie" />
    },
    "weight-loss": {
      title: "Weight Loss Recipes",
      description: "Calorie-controlled, nutrient-dense meals that help create a calorie deficit while keeping you satisfied.",
      icon: <Weight size={20} className="text-foodie" />
    },
    "weight-gain": {
      title: "Weight Gain Recipes",
      description: "Nutrient and calorie-dense meals designed to support healthy weight gain and muscle building.",
      icon: <Weight size={20} className="text-foodie" />
    },
    "keto-diet": {
      title: "Keto Diet Recipes",
      description: "High-fat, low-carb recipes that help maintain ketosis while providing delicious meal options.",
      icon: <LeafyGreen size={20} className="text-foodie" />
    },
    "pregnancy": {
      title: "Pregnancy Nutrition Recipes",
      description: "Nutrient-rich meals designed to support the health of both mother and baby during pregnancy.",
      icon: <Baby size={20} className="text-foodie" />
    },
    "gastric-issue": {
      title: "Gastric-Friendly Recipes",
      description: "Easily digestible meals that are gentle on sensitive stomachs and digestive systems.",
      icon: <Pill size={20} className="text-foodie" />
    }
  };
  
  // Get current category info or default to all recipes
  const currentCategory = categoryId ? categoryInfo[categoryId] : {
    title: "All Recipes",
    description: "Browse our complete collection of health-focused recipes for various dietary needs and preferences.",
    icon: null
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold">{currentCategory.title}</h1>
          {currentCategory.icon && currentCategory.icon}
        </div>
        <p className="text-gray-600">{currentCategory.description}</p>
      </div>
      
      {/* Category Navigation */}
      {!categoryId && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Browse by Health Focus</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(categoryInfo).map(([id, info]) => (
              <Link to={`/categories/${id}`} key={id}>
                <Button variant="outline" className="flex items-center gap-2">
                  {info.icon && info.icon}
                  <span>{info.title.replace(" Recipes", "")}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
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
      
      {/* Back button if viewing a specific category */}
      {categoryId && (
        <div className="mt-8">
          <Link to="/categories">
            <Button variant="outline">
              View All Categories
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Categories;
