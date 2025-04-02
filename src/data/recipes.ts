export interface Recipe {
  id: string;
  title: string;
  category: "diabetes" | "heart-disease" | "ulcer" | "general" | "blood-pressure" | "weight-loss" | "keto-diet" | "pregnancy" | "gastric-issue" | "weight-gain";
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sugar: number;
    sodium: number;
  };
}

export const recipes: Recipe[] = [
  // Diabetes-friendly recipes
  {
    id: "diabetes-1",
    title: "Mediterranean Grilled Chicken Salad",
    category: "diabetes",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    description: "A refreshing salad with lean protein and low glycemic ingredients perfect for managing blood sugar.",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    ingredients: [
      "2 chicken breasts",
      "4 cups mixed greens",
      "1/2 cucumber, sliced",
      "1 medium tomato, diced",
      "1/4 red onion, thinly sliced",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp dried oregano",
      "2 tbsp feta cheese",
      "6 olives, pitted and halved",
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and oregano.",
      "Grill chicken for 5-6 minutes per side until fully cooked.",
      "In a large bowl, combine mixed greens, cucumber, tomato, and red onion.",
      "Whisk together olive oil, lemon juice, and a pinch of oregano for dressing.",
      "Slice grilled chicken and place on top of salad.",
      "Sprinkle with feta cheese and olives.",
      "Drizzle with dressing just before serving.",
    ],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 8,
      fat: 19,
      sugar: 3,
      sodium: 340,
    },
  },
  {
    id: "diabetes-2",
    title: "Quinoa Veggie Bowl with Avocado",
    category: "diabetes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    description: "A nutrient-dense bowl with slow-release carbs to help maintain steady blood glucose levels.",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water or vegetable broth",
      "1 tbsp olive oil",
      "1 cup broccoli florets",
      "1 bell pepper, diced",
      "1 medium carrot, julienned",
      "1 cup baby spinach",
      "1 avocado, sliced",
      "2 tbsp pumpkin seeds",
      "1 tbsp lemon juice",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook quinoa in water or broth according to package instructions.",
      "Heat olive oil in a pan and sauté broccoli, bell pepper, and carrot for 5 minutes.",
      "Add spinach and cook until wilted, about 1 minute.",
      "Divide quinoa between two bowls and top with sautéed vegetables.",
      "Add sliced avocado and sprinkle with pumpkin seeds.",
      "Drizzle with lemon juice and season with salt and pepper.",
    ],
    nutrition: {
      calories: 390,
      protein: 11,
      carbs: 45,
      fat: 21,
      sugar: 4,
      sodium: 120,
    },
  },
  {
    id: "diabetes-3",
    title: "Cinnamon Chia Seed Pudding",
    category: "diabetes",
    image: "https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030",
    description: "A low-sugar breakfast pudding rich in fiber to help control blood sugar spikes.",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup unsweetened almond milk",
      "1/2 tsp vanilla extract",
      "1/2 tsp cinnamon",
      "1 tbsp chopped nuts",
      "1/4 cup berries",
      "Stevia or monk fruit sweetener to taste (optional)",
    ],
    instructions: [
      "In a bowl, combine chia seeds, almond milk, vanilla extract, cinnamon, and sweetener if using.",
      "Stir well and refrigerate for at least 2 hours or overnight.",
      "Stir again before serving to break up any clumps.",
      "Top with nuts and berries before serving.",
    ],
    nutrition: {
      calories: 180,
      protein: 6,
      carbs: 15,
      fat: 12,
      sugar: 2,
      sodium: 95,
    },
  },

  // Heart-disease friendly recipes
  {
    id: "heart-disease-1",
    title: "Baked Salmon with Lemon and Herbs",
    category: "heart-disease",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    description: "Omega-3 rich salmon recipe that supports heart health and reduces inflammation.",
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 lemon, sliced",
      "2 cloves garlic, minced",
      "2 tsp olive oil",
      "1 tbsp fresh dill, chopped",
      "1 tbsp fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Place salmon fillets on a parchment-lined baking sheet.",
      "Drizzle with olive oil and sprinkle with garlic, dill, parsley, salt, and pepper.",
      "Top with lemon slices.",
      "Bake for 12-15 minutes, until salmon flakes easily with a fork.",
      "Garnish with additional fresh herbs before serving.",
    ],
    nutrition: {
      calories: 280,
      protein: 30,
      carbs: 2,
      fat: 17,
      sugar: 0,
      sodium: 125,
    },
  },
  {
    id: "heart-disease-2",
    title: "DASH Diet Vegetable Soup",
    category: "heart-disease",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    description: "A nutrient-rich, low-sodium soup based on the heart-healthy DASH diet principles.",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 carrots, sliced",
      "2 celery stalks, sliced",
      "2 cloves garlic, minced",
      "1 zucchini, diced",
      "1 cup green beans, trimmed and cut",
      "1 cup cabbage, chopped",
      "1 can (14 oz) no-salt-added diced tomatoes",
      "4 cups low-sodium vegetable broth",
      "1 bay leaf",
      "1 tsp dried thyme",
      "Fresh herbs for garnish",
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook for 5 minutes until softened.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Add zucchini, green beans, cabbage, tomatoes, broth, bay leaf, and thyme.",
      "Bring to a boil, then reduce heat and simmer for 20 minutes.",
      "Remove bay leaf before serving.",
      "Garnish with fresh herbs.",
    ],
    nutrition: {
      calories: 120,
      protein: 4,
      carbs: 18,
      fat: 4,
      sugar: 9,
      sodium: 140,
    },
  },
  {
    id: "heart-disease-3",
    title: "Oatmeal with Berries and Flaxseed",
    category: "heart-disease",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af",
    description: "A fiber-rich breakfast that helps lower LDL cholesterol and promote heart health.",
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup unsweetened almond milk",
      "1 tbsp ground flaxseed",
      "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 tsp cinnamon",
      "1 tbsp chopped walnuts",
      "1 tsp honey or maple syrup (optional)",
    ],
    instructions: [
      "Combine oats and almond milk in a microwave-safe bowl.",
      "Microwave for 2-3 minutes, or cook on stovetop according to package instructions.",
      "Stir in ground flaxseed and cinnamon.",
      "Top with mixed berries and walnuts.",
      "Drizzle with honey or maple syrup if desired.",
    ],
    nutrition: {
      calories: 290,
      protein: 8,
      carbs: 42,
      fat: 11,
      sugar: 8,
      sodium: 120,
    },
  },

  // Ulcer-friendly recipes
  {
    id: "ulcer-1",
    title: "Creamy Sweet Potato Soup",
    category: "ulcer",
    image: "https://images.unsplash.com/photo-1566454419290-57a0589c9d13",
    description: "A gentle, non-irritating soup that soothes the digestive tract and provides essential nutrients.",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "2 large sweet potatoes, peeled and cubed",
      "1 small onion, finely chopped",
      "2 carrots, peeled and chopped",
      "1 tbsp olive oil",
      "4 cups low-sodium vegetable broth",
      "1/2 cup coconut milk",
      "1 tsp ground ginger",
      "Salt to taste",
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion and sauté until translucent, about 3 minutes.",
      "Add sweet potatoes, carrots, and ground ginger. Stir for 2 minutes.",
      "Pour in vegetable broth and bring to a boil.",
      "Reduce heat and simmer for 20 minutes until vegetables are tender.",
      "Blend soup using an immersion blender or regular blender until smooth.",
      "Stir in coconut milk and heat for 2 more minutes.",
      "Season with salt to taste.",
    ],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 30,
      fat: 6,
      sugar: 7,
      sodium: 150,
    },
  },
  {
    id: "ulcer-2",
    title: "Banana Oatmeal Porridge",
    category: "ulcer",
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d",
    description: "A bland yet nutritious breakfast that won't irritate sensitive stomachs.",
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    ingredients: [
      "1/2 cup rolled oats",
      "1 cup water",
      "1/2 banana, sliced",
      "1 tbsp honey",
      "1/4 tsp cinnamon",
      "1 tbsp almond butter (optional)",
    ],
    instructions: [
      "Bring water to a boil in a small saucepan.",
      "Add oats and reduce heat to medium-low.",
      "Simmer for 5 minutes, stirring occasionally.",
      "Remove from heat and let stand for 2 minutes.",
      "Stir in honey and cinnamon.",
      "Top with sliced banana and almond butter if using.",
    ],
    nutrition: {
      calories: 260,
      protein: 6,
      carbs: 47,
      fat: 6,
      sugar: 18,
      sodium: 5,
    },
  },
  {
    id: "ulcer-3",
    title: "Steamed White Fish with Herbs",
    category: "ulcer",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
    description: "A gentle protein source prepared without irritating spices or acids.",
    prepTime: 5,
    cookTime: 12,
    servings: 2,
    ingredients: [
      "2 white fish fillets (cod, tilapia, or sole)",
      "2 tsp olive oil",
      "1 tsp fresh parsley, chopped",
      "1 tsp fresh dill, chopped",
      "1 lemon, cut into wedges (for serving, optional)",
      "Salt to taste",
    ],
    instructions: [
      "Prepare a steamer or use a steamer basket over boiling water.",
      "Rub fish fillets with olive oil and a pinch of salt.",
      "Sprinkle with fresh herbs.",
      "Steam for 8-12 minutes until fish flakes easily with a fork.",
      "Serve with lemon wedges on the side if tolerated.",
    ],
    nutrition: {
      calories: 170,
      protein: 25,
      carbs: 0,
      fat: 7,
      sugar: 0,
      sodium: 120,
    },
  },

  // General healthy recipes
  {
    id: "general-1",
    title: "Rainbow Vegetable Stir Fry",
    category: "general",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    description: "A colorful, nutrient-dense stir fry packed with a variety of vegetables and lean protein.",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    ingredients: [
      "1 tbsp olive oil",
      "2 chicken breasts, sliced, or 8oz firm tofu, cubed",
      "1 bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, julienned",
      "1 cup snow peas",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp honey",
      "1 tbsp sesame seeds",
      "2 green onions, sliced",
    ],
    instructions: [
      "Heat oil in a wok or large skillet over high heat.",
      "Add chicken or tofu and cook until browned, about 5 minutes.",
      "Add vegetables, garlic, and ginger. Stir-fry for 3-4 minutes until vegetables are crisp-tender.",
      "Mix soy sauce and honey together, then pour over stir-fry.",
      "Cook for 1 more minute until sauce thickens slightly.",
      "Garnish with sesame seeds and green onions before serving.",
    ],
    nutrition: {
      calories: 310,
      protein: 28,
      carbs: 22,
      fat: 12,
      sugar: 14,
      sodium: 480,
    },
  },
  {
    id: "general-2",
    title: "Mediterranean Chickpea Salad",
    category: "general",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    description: "A protein-rich salad with Mediterranean flavors that's perfect for lunch or a light dinner.",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 red onion, finely diced",
      "1/4 cup Kalamata olives, pitted and halved",
      "1/4 cup feta cheese, crumbled",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp dried oregano",
      "Salt and pepper to taste",
      "Fresh parsley, chopped",
    ],
    instructions: [
      "In a large bowl, combine chickpeas, cucumber, tomatoes, red onion, and olives.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Pour dressing over salad and toss gently to coat.",
      "Sprinkle with feta cheese and fresh parsley before serving.",
    ],
    nutrition: {
      calories: 370,
      protein: 14,
      carbs: 44,
      fat: 18,
      sugar: 9,
      sodium: 520,
    },
  },

  // Blood pressure recipes
  {
    id: "blood-pressure-1",
    title: "DASH Diet Stuffed Bell Peppers",
    category: "blood-pressure",
    image: "photo-1615937657715-bc7b4b7962c1",
    description: "Colorful bell peppers stuffed with a heart-healthy mixture of lean ground turkey, brown rice, and vegetables.",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    ingredients: [
      "4 large bell peppers (any color), halved and seeded",
      "1 lb lean ground turkey",
      "1 cup cooked brown rice",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 zucchini, diced",
      "1 cup mushrooms, chopped",
      "1 can (14.5 oz) low-sodium diced tomatoes, drained",
      "2 tbsp fresh parsley, chopped",
      "1 tsp dried oregano",
      "1 tsp olive oil",
      "1/4 cup low-fat mozzarella cheese, shredded"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Heat olive oil in a large skillet over medium heat. Add onion and garlic, sauté until fragrant.",
      "Add ground turkey and cook until browned, breaking it up as it cooks.",
      "Stir in zucchini and mushrooms, cook for 3-4 minutes until softened.",
      "Add diced tomatoes, cooked rice, parsley, oregano, and a pinch of black pepper. Mix well.",
      "Arrange pepper halves in a baking dish, fill each with the turkey and rice mixture.",
      "Cover with foil and bake for 25 minutes. Remove foil, sprinkle with cheese and bake for 10 more minutes.",
      "Serve hot, garnished with additional fresh parsley if desired."
    ],
    nutrition: {
      calories: 310,
      protein: 28,
      carbs: 29,
      fat: 10,
      sugar: 7,
      sodium: 195
    }
  },
  {
    id: "blood-pressure-2",
    title: "Potassium-Rich Banana Berry Smoothie",
    category: "blood-pressure",
    image: "photo-1553530666-ba11a90bb212",
    description: "A potassium-rich smoothie to help regulate blood pressure naturally.",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "2 ripe bananas",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 cup unsweetened almond milk",
      "1/2 cup plain Greek yogurt",
      "1 tbsp ground flaxseed",
      "1 tbsp honey (optional)",
      "4 ice cubes"
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend on high until smooth and creamy.",
      "Pour into glasses and serve immediately."
    ],
    nutrition: {
      calories: 210,
      protein: 8,
      carbs: 39,
      fat: 4,
      sugar: 22,
      sodium: 80
    }
  },
  {
    id: "blood-pressure-3",
    title: "Spinach and Beet Salad with Walnuts",
    category: "blood-pressure",
    image: "photo-1594646864565-011ba9a7d469",
    description: "A nutrient-dense salad featuring nitrate-rich beets that help lower blood pressure.",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    ingredients: [
      "4 cups fresh spinach leaves",
      "2 medium beets, cooked and diced",
      "1/4 cup walnuts, chopped",
      "1/4 cup feta cheese, crumbled",
      "1 small red onion, thinly sliced",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "1 tsp honey",
      "1 tsp Dijon mustard"
    ],
    instructions: [
      "In a large bowl, combine spinach, beets, walnuts, feta cheese, and red onion.",
      "In a small bowl, whisk together olive oil, balsamic vinegar, honey, and Dijon mustard to make the dressing.",
      "Drizzle the dressing over the salad just before serving, and toss gently to combine."
    ],
    nutrition: {
      calories: 280,
      protein: 7,
      carbs: 18,
      fat: 21,
      sugar: 11,
      sodium: 290
    }
  },

  // Weight loss recipes
  {
    id: "weight-loss-1",
    title: "Cauliflower Fried Rice",
    category: "weight-loss",
    image: "photo-1603903322520-98afbc8e6fbb",
    description: "A low-calorie alternative to traditional fried rice using cauliflower instead of white rice.",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    ingredients: [
      "1 large cauliflower head, riced",
      "2 tsp sesame oil",
      "2 eggs, beaten",
      "1 cup carrots, diced small",
      "1 cup peas",
      "3 green onions, sliced",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "3 tbsp low-sodium soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sriracha (optional)"
    ],
    instructions: [
      "Heat 1 tsp sesame oil in a large skillet over medium heat. Add beaten eggs and scramble until cooked. Remove and set aside.",
      "In the same skillet, add remaining oil. Add garlic and ginger, sauté for 30 seconds.",
      "Add carrots and cook for 3-4 minutes until they start to soften.",
      "Add cauliflower rice and peas. Cook for 5-6 minutes until cauliflower is tender.",
      "Stir in soy sauce, rice vinegar, and sriracha if using.",
      "Add back the scrambled eggs and mix well.",
      "Garnish with sliced green onions before serving."
    ],
    nutrition: {
      calories: 170,
      protein: 10,
      carbs: 18,
      fat: 7,
      sugar: 6,
      sodium: 480
    }
  },
  {
    id: "weight-loss-2",
    title: "Protein-Packed Lentil Bowl",
    category: "weight-loss",
    image: "photo-1540420773420-3366772f4999",
    description: "A filling, high-protein, low-calorie meal that keeps you satisfied for hours.",
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    ingredients: [
      "1 cup green or brown lentils, rinsed",
      "2 cups vegetable broth",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/4 cup red onion, finely diced",
      "1/4 cup fresh parsley, chopped",
      "2 tbsp lemon juice",
      "1 tbsp olive oil",
      "1 tsp cumin",
      "Salt and pepper to taste",
      "2 eggs, poached or boiled (optional)"
    ],
    instructions: [
      "In a pot, combine lentils and vegetable broth. Bring to a boil, then reduce heat and simmer for 20-25 minutes until lentils are tender but not mushy.",
      "Drain any excess liquid and let lentils cool slightly.",
      "In a large bowl, combine cooked lentils, cherry tomatoes, cucumber, red onion, and parsley.",
      "In a small bowl, whisk together lemon juice, olive oil, cumin, salt, and pepper.",
      "Pour dressing over the lentil mixture and toss to combine.",
      "Divide into bowls and top with a poached or boiled egg if desired."
    ],
    nutrition: {
      calories: 310,
      protein: 18,
      carbs: 40,
      fat: 9,
      sugar: 4,
      sodium: 290
    }
  },
  {
    id: "weight-loss-3",
    title: "Zucchini Noodles with Turkey Meatballs",
    category: "weight-loss",
    image: "photo-1633329758674-96de8a6c25eb",
    description: "Spiralized zucchini replaces pasta in this low-carb, high-protein dish that's perfect for weight loss.",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "3 medium zucchinis, spiralized",
      "8 oz lean ground turkey",
      "1 egg, beaten",
      "2 tbsp whole wheat breadcrumbs",
      "2 tbsp fresh parsley, chopped",
      "1 tsp Italian seasoning",
      "2 cloves garlic, minced",
      "1 cup marinara sauce (low-sodium)",
      "1 tbsp olive oil",
      "2 tbsp grated Parmesan cheese (optional)"
    ],
    instructions: [
      "In a bowl, combine ground turkey, beaten egg, breadcrumbs, half the garlic, parsley, Italian seasoning, salt, and pepper.",
      "Form mixture into 12 small meatballs.",
      "Heat olive oil in a skillet over medium heat. Cook meatballs until browned on all sides and cooked through, about 8-10 minutes.",
      "In another pan, sauté remaining garlic for 30 seconds. Add spiralized zucchini and cook for 2-3 minutes until just tender.",
      "Heat marinara sauce in a small saucepan.",
      "Serve zucchini noodles topped with meatballs and marinara sauce.",
      "Sprinkle with Parmesan cheese if desired."
    ],
    nutrition: {
      calories: 290,
      protein: 25,
      carbs: 18,
      fat: 15,
      sugar: 9,
      sodium: 350
    }
  },

  // Keto diet recipes
  {
    id: "keto-diet-1",
    title: "Avocado and Bacon-Stuffed Chicken Breast",
    category: "keto-diet",
    image: "photo-1594041680534-84196fce778a",
    description: "A keto-friendly dinner option packed with healthy fats and protein.",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    ingredients: [
      "2 large chicken breasts",
      "1 ripe avocado, sliced",
      "4 slices bacon, cooked and crumbled",
      "1/2 cup shredded cheddar cheese",
      "2 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "Salt and pepper to taste",
      "Fresh chopped parsley for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cut a pocket in each chicken breast horizontally, being careful not to cut all the way through.",
      "Season chicken with salt, pepper, garlic powder, and paprika.",
      "Fill each pocket with avocado slices, crumbled bacon, and shredded cheese.",
      "Secure with toothpicks if needed.",
      "Heat olive oil in an oven-safe skillet over medium-high heat.",
      "Sear chicken breasts for 3-4 minutes on each side until golden brown.",
      "Transfer skillet to oven and bake for 15-18 minutes until chicken is cooked through.",
      "Garnish with fresh parsley before serving."
    ],
    nutrition: {
      calories: 520,
      protein: 43,
      carbs: 6,
      fat: 35,
      sugar: 1,
      sodium: 480
    }
  },
  {
    id: "keto-diet-2",
    title: "Creamy Cauliflower Soup with Crispy Pancetta",
    category: "keto-diet",
    image: "photo-1547592180-85f173990554",
    description: "A low-carb, high-fat soup that's perfect for cold days on a keto diet.",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "1 large cauliflower head, cut into florets",
      "4 oz pancetta or bacon, diced",
      "2 tbsp butter",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "3 cups chicken broth",
      "1 cup heavy cream",
      "1/2 cup grated Parmesan cheese",
      "1/4 tsp nutmeg",
      "Salt and pepper to taste",
      "2 tbsp chives, chopped"
    ],
    instructions: [
      "In a large pot, cook pancetta over medium heat until crispy. Remove and set aside, keeping 1 tbsp of fat in the pot.",
      "Add butter to the pot. Once melted, add onion and sauté until translucent, about 3-4 minutes.",
      "Add garlic and cook for another minute.",
      "Add cauliflower florets and chicken broth. Bring to a boil, then reduce heat and simmer for 15-20 minutes until cauliflower is very tender.",
      "Using an immersion blender, purée the soup until smooth.",
      "Stir in heavy cream and Parmesan cheese. Season with nutmeg, salt, and pepper.",
      "Heat through on low heat, being careful not to boil.",
      "Serve topped with crispy pancetta and chopped chives."
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 8,
      fat: 34,
      sugar: 3,
      sodium: 720
    }
  },
  {
    id: "keto-diet-3",
    title: "Keto Breakfast Frittata",
    category: "keto-diet",
    image: "photo-1605240889241-5b0d0998629f",
    description: "A protein-packed breakfast frittata loaded with vegetables and cheese, perfect for a keto diet.",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    ingredients: [
      "8 large eggs",
      "1/4 cup heavy cream",
      "1 cup spinach, chopped",
      "1/2 red bell pepper, diced",
      "4 oz mushrooms, sliced",
      "2 green onions, sliced",
      "4 oz cheddar cheese, shredded",
      "2 oz feta cheese, crumbled",
      "2 tbsp olive oil",
      "1/2 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a large bowl, whisk together eggs and heavy cream. Season with salt, pepper, and oregano.",
      "Heat olive oil in a 10-inch oven-safe skillet over medium heat.",
      "Add bell pepper and mushrooms, sauté for 4-5 minutes until softened.",
      "Add spinach and green onions, cook until spinach is wilted.",
      "Sprinkle half the cheese over the vegetables.",
      "Pour the egg mixture over the vegetables and cheese. Cook for 2 minutes without stirring.",
      "Sprinkle remaining cheese on top and transfer skillet to the oven.",
      "Bake for 12-15 minutes until eggs are set and slightly puffed.",
      "Let cool for 5 minutes before slicing and serving."
    ],
    nutrition: {
      calories: 350,
      protein: 21,
      carbs: 5,
      fat: 28,
      sugar: 2,
      sodium: 410
    }
  },

  // Pregnancy recipes
  {
    id: "pregnancy-1",
    title: "Iron-Rich Lentil and Spinach Stew",
    category: "pregnancy",
    image: "photo-1543198453-75c232a6396e",
    description: "A nourishing stew packed with iron, folate, and protein for expecting mothers.",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [
      "1 cup green lentils, rinsed",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "3 cloves garlic, minced",
      "1 teaspoon ground cumin",
      "1/2 teaspoon turmeric",
      "4 cups low-sodium vegetable broth",
      "4 cups fresh spinach, chopped",
      "1 can (14.5 oz) diced tomatoes",
      "1 tablespoon lemon juice",
      "2 tablespoons fresh parsley, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook gently for 5-7 minutes until vegetables begin to soften.",
      "Add garlic, cumin, and turmeric. Cook for 1 minute until fragrant.",
      "Add lentils and vegetable broth. Bring to a boil, then reduce heat and simmer for 20 minutes until lentils are tender.",
      "Stir in diced tomatoes and spinach. Cook for another 5 minutes until spinach is wilted.",
      "Add lemon juice, salt, and pepper to taste.",
      "Garnish with fresh parsley before serving."
    ],
    nutrition: {
      calories: 250,
      protein: 15,
      carbs: 40,
      fat: 4,
      sugar: 6,
      sodium: 300
    }
  },
  {
    id: "pregnancy-2",
    title: "Calcium-Boosted Berry Smoothie Bowl",
    category: "pregnancy",
    image: "photo-1502741224143-90386d7f8c82",
    description: "A delicious smoothie bowl rich in calcium and antioxidants to support both mother and baby's needs.",
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup frozen mixed berries",
      "1/2 frozen banana",
      "1 tablespoon almond butter",
      "1 tablespoon chia seeds",
      "1/2 cup almond milk",
      "1 tablespoon honey (optional)",
      "Toppings: fresh berries, granola, sliced almonds"
    ],
    instructions: [
      "Place yogurt, frozen berries, banana, almond butter, chia seeds, almond milk, and honey in a blender.",
      "Blend until smooth and creamy. Add more almond milk if needed for desired consistency.",
      "Pour into a bowl and top with fresh berries, granola, and sliced almonds.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 380,
      protein: 22,
      carbs: 45,
      fat: 14,
      sugar: 28,
      sodium: 120
    }
  },
  {
    id: "pregnancy-3",
    title: "Baked Salmon with Folate-Rich Vegetables",
    category: "pregnancy",
    image: "photo-1519708227418-c8fd9a32b7a2",
    description: "A simple one-pan dinner rich in omega-3 fatty acids, protein, and folate for healthy fetal development.",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "2 salmon fillets (5 oz each)",
      "1 bunch asparagus, trimmed",
      "1 cup cherry tomatoes",
      "1 cup broccoli florets",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "1 tablespoon fresh dill, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "On a large baking sheet, arrange asparagus, cherry tomatoes, and broccoli.",
      "Drizzle vegetables with 1 tablespoon olive oil, add minced garlic, and season with salt and pepper. Toss to coat.",
      "Place salmon fillets on top of the vegetables. Drizzle with remaining olive oil and season with salt and pepper.",
      "Top salmon with lemon slices and dill.",
      "Bake for 15-20 minutes until salmon is cooked through and vegetables are tender.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 320,
      protein: 29,
      carbs: 12,
      fat: 18,
      sugar: 4,
      sodium: 150
    }
  },

  // Gastric issue recipes
  {
    id: "gastric-issue-1",
    title: "Gentle Chicken and Rice Soup",
    category: "gastric-issue",
    image: "photo-1607330289024-1535c6b4e1c1",
    description: "A soothing soup that's easy on the stomach while providing nourishment and hydration.",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    ingredients: [
      "1 lb boneless, skinless chicken breast",
      "8 cups low-sodium chicken broth",
      "1 cup white rice, rinsed",
      "2 carrots, peeled and diced",
      "2 celery stalks, diced",
      "1 onion, finely diced",
      "2 tablespoons olive oil",
      "1 teaspoon fresh thyme leaves",
      "Salt to taste (use sparingly)"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion, carrots, and celery. Cook gently for 5-7 minutes until vegetables begin to soften.",
      "Add chicken broth and bring to a simmer.",
      "Add whole chicken breasts and cook for 15 minutes until cooked through.",
      "Remove chicken and shred or dice it.",
      "Add rice to the broth and simmer for 15 minutes until rice is tender.",
      "Return shredded chicken to the pot and add thyme.",
      "Season with a small amount of salt if needed.",
      "Serve warm."
    ],
    nutrition: {
      calories: 280,
      protein: 25,
      carbs: 30,
      fat: 7,
      sugar: 2,
      sodium: 180
    }
  },
  {
    id: "gastric-issue-2",
    title: "Smooth Butternut Squash Puree",
    category: "gastric-issue",
    image: "photo-1533622597524-a1215e26c0a2",
    description: "A silky, non-irritating puree that provides essential nutrients in an easily digestible form.",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    ingredients: [
      "1 medium butternut squash, peeled and cubed",
      "1 tablespoon olive oil",
      "1 cup low-sodium vegetable broth",
      "1/2 teaspoon ground ginger",
      "Salt to taste (use sparingly)",
      "1 tablespoon maple syrup (optional)"
    ],
    instructions: [
      "Heat olive oil in a pot over medium heat.",
      "Add butternut squash cubes and cook for 5 minutes, stirring occasionally.",
      "Add vegetable broth and ground ginger. Bring to a simmer.",
      "Cover and cook for 15-20 minutes until squash is very tender.",
      "Transfer to a blender and puree until completely smooth.",
      "Return to pot, add maple syrup if using, and warm gently.",
      "Season with a small amount of salt if needed."
    ],
    nutrition: {
      calories: 120,
      protein: 2,
      carbs: 25,
      fat: 4,
      sugar: 10,
      sodium: 85
    }
  },
  {
    id: "gastric-issue-3",
    title: "Poached White Fish with Fennel",
    category: "gastric-issue",
    image: "photo-1519708227418-c8fd9a32b7a2",
    description: "A gentle protein dish that's easy to digest and won't trigger reflux or other gastric issues.",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "2 cod or sole fillets (5 oz each)",
      "1 fennel bulb, thinly sliced",
      "1 small yellow potato, thinly sliced",
      "1 cup low-sodium chicken broth",
      "1/2 cup water",
      "1 bay leaf",
      "1 tablespoon fresh lemon juice (optional, omit if sensitive)",
      "1 tablespoon olive oil",
      "Fresh parsley for garnish",
      "Salt to taste (use sparingly)"
    ],
    instructions: [
      "In a large skillet with a lid, layer fennel and potato slices on the bottom.",
      "Pour in chicken broth and water. Add bay leaf and bring to a simmer.",
      "Gently place fish fillets on top of the vegetables.",
      "Cover and poach for 8-10 minutes until fish is opaque and flakes easily.",
      "Remove fish and vegetables with a slotted spoon.",
      "If using lemon juice, add it to the cooking liquid and reduce slightly to create a simple sauce.",
      "Drizzle fish with olive oil and sauce if using.",
      "Garnish with fresh parsley."
    ],
    nutrition: {
      calories: 210,
      protein: 26,
      carbs: 12,
      fat: 7,
      sugar: 1,
      sodium: 160
    }
  },

  // Weight gain recipes
  {
    id: "weight-gain-1",
    title: "Protein-Calorie Smoothie",
    category: "weight-gain",
    image: "photo-1583608205776-bfd35f0d9f83",
    description: "A nutrient-dense smoothie designed to add healthy calories and protein for weight gain.",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    ingredients: [
      "1 banana",
      "1 cup whole milk",
      "2 tablespoons peanut butter",
      "1 scoop protein powder",
      "1/4 cup rolled oats",
      "1 tablespoon honey",
      "1 tablespoon chia seeds",
      "1/2 teaspoon cinnamon",
      "Ice cubes (optional)"
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend on high speed until smooth and creamy.",
      "Add ice if desired and blend again.",
      "Pour into a glass and serve immediately."
    ],
    nutrition: {
      calories: 580,
      protein: 30,
      carbs: 65,
      fat: 25,
      sugar: 35,
      sodium: 220
    }
  },
  {
    id: "weight-gain-2",
    title: "Loaded Sweet Potato with Chicken",
    category: "weight-gain",
    image: "photo-1604407125539-f5f90ff4c4e4",
    description: "A calorie-dense meal combining complex carbs, healthy fats, and lean protein for healthy weight gain.",
    prepTime: 15,
    cookTime: 45,
    servings: 2,
    ingredients: [
      "2 large sweet potatoes",
      "2 tablespoons olive oil",
      "2 chicken breasts, diced",
      "1 tablespoon taco seasoning",
      "1 avocado, diced",
      "1/2 cup black beans, drained and rinsed",
      "1/2 cup corn kernels",
      "1/4 cup Greek yogurt",
      "1/4 cup shredded cheese",
      "2 green onions, sliced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Prick sweet potatoes with a fork and rub with 1 tablespoon olive oil.",
      "Bake sweet potatoes for 45 minutes until tender.",
      "Meanwhile, in a skillet, heat remaining olive oil over medium heat.",
      "Season diced chicken with taco seasoning, salt, and pepper.",
      "Cook chicken for 6-8 minutes until cooked through.",
      "Split open the baked sweet potatoes and fluff the inside with a fork.",
      "Top each potato with chicken, black beans, corn, avocado, Greek yogurt, cheese, and green onions.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 620,
      protein: 35,
      carbs: 65,
      fat: 25,
      sugar: 12,
      sodium: 480
    }
  },
  {
    id: "weight-gain-3",
    title: "Nutrient-Dense Granola",
    category: "weight-gain",
    image: "photo-1565480943982-b4830b253122",
    description: "A homemade granola packed with nuts, seeds, and healthy fats to increase calorie intake in a nutritious way.",
    prepTime: 10,
    cookTime: 25,
    servings: 10,
    ingredients: [
      "3 cups rolled oats",
      "1 cup mixed nuts (almonds, walnuts, pecans), chopped",
      "1/2 cup sunflower seeds",
      "1/2 cup pumpkin seeds",
      "1/4 cup flaxseeds",
      "1/2 cup unsweetened coconut flakes",
      "1/2 cup honey or maple syrup",
      "1/3 cup coconut oil, melted",
      "1 teaspoon vanilla extract",
      "1 teaspoon cinnamon",
      "1/2 teaspoon salt",
      "1 cup dried fruit (raisins, cranberries, apricots), chopped"
    ],
    instructions: [
      "Preheat oven to 325°F (165°C) and line a baking sheet with parchment paper.",
      "In a large bowl, combine oats, nuts, seeds, and coconut flakes.",
      "In a separate bowl, whisk together honey, coconut oil, vanilla, cinnamon, and salt.",
      "Pour wet ingredients over dry ingredients and stir until well combined.",
      "Spread mixture evenly on the prepared baking sheet.",
      "Bake for 20-25 minutes, stirring every 10 minutes, until golden brown.",
      "Let cool completely, then add dried fruit and mix well.",
      "Store in an airtight container for up to two weeks."
    ],
    nutrition: {
      calories: 320,
      protein: 8,
      carbs: 35,
      fat: 18,
      sugar: 15,
      sodium: 120
    }
  }
];
