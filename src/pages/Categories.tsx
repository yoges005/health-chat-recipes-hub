
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { Search } from "lucide-react";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const diabetesRecipes = recipes.filter(recipe => recipe.category === "diabetes");
  const heartRecipes = recipes.filter(recipe => recipe.category === "heart-disease");
  const ulcerRecipes = recipes.filter(recipe => recipe.category === "ulcer");
  const generalRecipes = recipes.filter(recipe => recipe.category === "general");
  
  const filterRecipes = (recipeList: typeof recipes) => {
    if (!searchTerm) return recipeList;
    
    const term = searchTerm.toLowerCase();
    return recipeList.filter(
      recipe => 
        recipe.title.toLowerCase().includes(term) || 
        recipe.description.toLowerCase().includes(term) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
    );
  };
  
  const filteredDiabetesRecipes = filterRecipes(diabetesRecipes);
  const filteredHeartRecipes = filterRecipes(heartRecipes);
  const filteredUlcerRecipes = filterRecipes(ulcerRecipes);
  const filteredGeneralRecipes = filterRecipes(generalRecipes);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Categories</h1>
      
      {/* Search bar */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search recipes by name or ingredients..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <Button
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      
      {/* Category tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
          <TabsTrigger value="heart">Heart Health</TabsTrigger>
          <TabsTrigger value="ulcer">Ulcer</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...filteredDiabetesRecipes, ...filteredHeartRecipes, ...filteredUlcerRecipes, ...filteredGeneralRecipes].map((recipe) => (
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
            {[...filteredDiabetesRecipes, ...filteredHeartRecipes, ...filteredUlcerRecipes, ...filteredGeneralRecipes].length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="diabetes">
          <h2 className="text-2xl font-bold mb-6">Diabetes-Friendly Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            These recipes are designed with diabetes management in mind, focusing on low glycemic index ingredients, balanced carbohydrates, and healthy fats to help maintain stable blood sugar levels.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDiabetesRecipes.map((recipe) => (
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
            {filteredDiabetesRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No diabetes-friendly recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="heart">
          <h2 className="text-2xl font-bold mb-6">Heart-Healthy Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Our heart-healthy recipes focus on reducing sodium and unhealthy fats while incorporating omega-3 rich foods, lean proteins, and plenty of fruits and vegetables to support cardiovascular health.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHeartRecipes.map((recipe) => (
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
            {filteredHeartRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No heart-healthy recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="ulcer">
          <h2 className="text-2xl font-bold mb-6">Ulcer-Friendly Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            These gentle recipes are designed for sensitive stomachs, avoiding irritating ingredients like spices, acidic foods, and excessive fats that might trigger or worsen ulcer symptoms.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredUlcerRecipes.map((recipe) => (
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
            {filteredUlcerRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No ulcer-friendly recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="general">
          <h2 className="text-2xl font-bold mb-6">General Healthy Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Our collection of nutritious, well-balanced recipes for overall health and wellness, suitable for those without specific dietary restrictions.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGeneralRecipes.map((recipe) => (
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
            {filteredGeneralRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No general healthy recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Categories;
