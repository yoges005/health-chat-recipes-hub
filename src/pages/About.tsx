
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">About Foodie Craft</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg mb-10">
          <p>
            Welcome to Foodie Craft, a specialized recipe platform designed for people with specific dietary needs due to health conditions like diabetes, heart disease, and ulcers.
          </p>
          <p>
            Our mission is to make healthy eating accessible, enjoyable, and specifically tailored to your health needs. We believe that delicious food and dietary restrictions can happily coexist!
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Our Health-Focused Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Diabetes-Friendly Recipes</h3>
              <p className="text-gray-600">
                Our diabetes-focused recipes emphasize low glycemic index ingredients, balanced macronutrients, and appropriate portion sizes to help manage blood sugar levels effectively.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Heart-Healthy Recipes</h3>
              <p className="text-gray-600">
                These recipes are designed to support cardiovascular health by limiting sodium, unhealthy fats, and cholesterol while incorporating heart-friendly nutrients like omega-3s, fiber, and antioxidants.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Ulcer-Friendly Recipes</h3>
              <p className="text-gray-600">
                Our gentle recipes for sensitive stomachs avoid irritating ingredients like spices, acids, and excessive fats that might aggravate gastric or duodenal ulcers.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Why Trust Our Recipes?</h2>
        <div className="mb-12">
          <p className="mb-4">
            At Foodie Craft, we believe in a scientific approach to healthy eating. Our recipes are:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Developed with input from nutritionists and healthcare professionals</li>
            <li>Based on current dietary guidelines for specific health conditions</li>
            <li>Complete with nutritional information to help you make informed choices</li>
            <li>Regularly updated to reflect the latest nutritional science</li>
            <li>Tested to ensure they're delicious as well as healthy</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Get Personalized Recommendations</h2>
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="mb-4">
            Our AI assistant can help you find recipes tailored to your specific health needs. Try asking about:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Low-sodium options for heart health</li>
            <li>Low-glycemic breakfast ideas for diabetes management</li>
            <li>Gentle recipes for sensitive stomachs</li>
            <li>Ingredient substitutions for your dietary restrictions</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Note: While our recipes are designed with specific health conditions in mind, they should complement, not replace, the dietary advice from your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
