
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { Search, Heart, Weight, LeafyGreen, Baby, Stomach } from "lucide-react";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const diabetesRecipes = recipes.filter(recipe => recipe.category === "diabetes");
  const heartRecipes = recipes.filter(recipe => recipe.category === "heart-disease");
  const ulcerRecipes = recipes.filter(recipe => recipe.category === "ulcer");
  const generalRecipes = recipes.filter(recipe => recipe.category === "general");
  
  // New category filters
  const bloodPressureRecipes = recipes.filter(recipe => recipe.category === "blood-pressure");
  const weightLossRecipes = recipes.filter(recipe => recipe.category === "weight-loss");
  const ketoDietRecipes = recipes.filter(recipe => recipe.category === "keto-diet");
  const pregnancyRecipes = recipes.filter(recipe => recipe.category === "pregnancy");
  const gastricIssueRecipes = recipes.filter(recipe => recipe.category === "gastric-issue");
  const weightGainRecipes = recipes.filter(recipe => recipe.category === "weight-gain");
  
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
  
  // Filter the new categories
  const filteredBloodPressureRecipes = filterRecipes(bloodPressureRecipes);
  const filteredWeightLossRecipes = filterRecipes(weightLossRecipes);
  const filteredKetoDietRecipes = filterRecipes(ketoDietRecipes);
  const filteredPregnancyRecipes = filterRecipes(pregnancyRecipes);
  const filteredGastricIssueRecipes = filterRecipes(gastricIssueRecipes);
  const filteredWeightGainRecipes = filterRecipes(weightGainRecipes);
  
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
        <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 mb-8 overflow-x-auto flex-nowrap">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
          <TabsTrigger value="heart">
            <div className="flex items-center space-x-1">
              <Heart size={16} />
              <span>Heart</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="blood-pressure">Blood Pressure</TabsTrigger>
          <TabsTrigger value="ulcer">Ulcer</TabsTrigger>
          <TabsTrigger value="gastric">
            <div className="flex items-center space-x-1">
              <Stomach size={16} />
              <span>Gastric</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="weight-loss">
            <div className="flex items-center space-x-1">
              <Weight size={16} />
              <span>Weight Loss</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="weight-gain">Weight Gain</TabsTrigger>
          <TabsTrigger value="keto">
            <div className="flex items-center space-x-1">
              <LeafyGreen size={16} />
              <span>Keto</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="pregnancy">
            <div className="flex items-center space-x-1">
              <Baby size={16} />
              <span>Pregnancy</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ...filteredDiabetesRecipes, 
              ...filteredHeartRecipes, 
              ...filteredUlcerRecipes, 
              ...filteredGeneralRecipes,
              ...filteredBloodPressureRecipes,
              ...filteredWeightLossRecipes,
              ...filteredKetoDietRecipes,
              ...filteredPregnancyRecipes,
              ...filteredGastricIssueRecipes,
              ...filteredWeightGainRecipes
            ].map((recipe) => (
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
            {[
              ...filteredDiabetesRecipes, 
              ...filteredHeartRecipes, 
              ...filteredUlcerRecipes, 
              ...filteredGeneralRecipes,
              ...filteredBloodPressureRecipes,
              ...filteredWeightLossRecipes,
              ...filteredKetoDietRecipes,
              ...filteredPregnancyRecipes,
              ...filteredGastricIssueRecipes,
              ...filteredWeightGainRecipes
            ].length === 0 && (
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
        
        <TabsContent value="blood-pressure">
          <h2 className="text-2xl font-bold mb-6">Blood Pressure Management Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Recipes specially formulated to help manage blood pressure, focusing on low-sodium ingredients and foods rich in potassium, calcium, and magnesium.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBloodPressureRecipes.map((recipe) => (
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
            {filteredBloodPressureRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No blood pressure recipes found matching your search.</p>
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
        
        <TabsContent value="gastric">
          <h2 className="text-2xl font-bold mb-6">Gastric-Friendly Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Gentle, easily digestible recipes designed for those with sensitive stomachs, acid reflux, or other gastric issues.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGastricIssueRecipes.map((recipe) => (
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
            {filteredGastricIssueRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No gastric-friendly recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="weight-loss">
          <h2 className="text-2xl font-bold mb-6">Weight Loss Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Low-calorie, nutrient-dense meals designed to support healthy weight loss while keeping you satisfied and energized throughout the day.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWeightLossRecipes.map((recipe) => (
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
            {filteredWeightLossRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No weight loss recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="weight-gain">
          <h2 className="text-2xl font-bold mb-6">Weight Gain Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Calorie-rich, nutrient-dense recipes to help with healthy weight gain and muscle building for those who need to increase their body weight.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWeightGainRecipes.map((recipe) => (
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
            {filteredWeightGainRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No weight gain recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="keto">
          <h2 className="text-2xl font-bold mb-6">Keto Diet Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            High-fat, low-carb recipes perfect for those following a ketogenic diet to achieve or maintain ketosis.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredKetoDietRecipes.map((recipe) => (
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
            {filteredKetoDietRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No keto diet recipes found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="pregnancy">
          <h2 className="text-2xl font-bold mb-6">Pregnancy-Friendly Recipes</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Nutritious meals rich in essential nutrients like folate, iron, and calcium to support the health of both mother and baby during pregnancy.
          </p>
          {searchTerm && (
            <p className="text-center mb-6 text-gray-500">
              Showing results for "{searchTerm}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPregnancyRecipes.map((recipe) => (
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
            {filteredPregnancyRecipes.length === 0 && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No pregnancy-friendly recipes found matching your search.</p>
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
