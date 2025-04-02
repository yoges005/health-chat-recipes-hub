
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  // Get 3 random recipes from each category for the featured section
  const getFeaturedRecipes = () => {
    const categories = ["diabetes", "heart-disease", "ulcer", "general"];
    const featuredRecipes = [];
    
    for (const category of categories) {
      const categoryRecipes = recipes.filter(recipe => recipe.category === category);
      // Get up to 3 random recipes from each category
      const randomRecipes = [...categoryRecipes]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      featuredRecipes.push(...randomRecipes);
    }
    
    return featuredRecipes;
  };
  
  const featuredRecipes = getFeaturedRecipes();
  
  return (
    <div>
      {/* Hero Section */}
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
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Health-Focused Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["diabetes", "heart-disease", "ulcer", "general"].map((category) => (
              <Link to={`/categories/${category}`} key={category}>
                <div className="category-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/random/400x300/?${category === "general" ? "healthy+food" : category}`} 
                      alt={category} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg capitalize">
                      {category === "heart-disease" ? "Heart Health" : 
                       category === "general" ? "General Healthy" : 
                       category.charAt(0).toUpperCase() + category.slice(1)} Recipes
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      {category === "diabetes" ? 
                        "Low-glycemic recipes for managing blood sugar" : 
                       category === "heart-disease" ? 
                        "Heart-friendly meals low in sodium and unhealthy fats" :
                       category === "ulcer" ?
                        "Gentle recipes that won't irritate sensitive stomachs" :
                        "Nutritious meals for overall health and wellness"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Recipes Section */}
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
      
      {/* Call to Action */}
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
