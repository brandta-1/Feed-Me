const params = {
    diet: {
        title: 'Diet Label',
        list: [
            "balanced",
            "high-fiber",
            "high-protein",
            "low-carb",
            "low-fat",
            "low-sodium"
        ],
        type: 'multiple'
    },
    health: {
        title: 'Health Label',
        list: [
            "alcohol-cocktail",
            "alcohol-free",
            "celery-free",
            "crustacean-free",
            "dairy-free",
            "DASH",
            "egg-free",
            "fish-free",
            "fodmap-free",
            "gluten-free",
            "immuno-supportive",
            "keto-friendly",
            "kidney-friendly",
            "kosher",
            "low-fat-abs",
            "low-potassium",
            "low-sugar",
            "lupine-free",
            "Mediterranean",
            "mollusk-free",
            "mustard-free",
            "no-oil-added",
            "paleo",
            "peanut-free",
            "pescatarian",
            "pork-free",
            "red-meat-free",
            "sesame-free",
            "shellfish-free",
            "soy-free",
            "sugar-conscious",
            "sulfite-free",
            "tree-nut-free",
            "vegan",
            "vegetarian",
            "wheat-free"
        ],
        type: 'multiple'
    },
    cuisineType: {
        title: 'Cuisine Type',
        list: [
            "American",
            "Asian",
            "British",
            "Caribbean",
            "Central Europe",
            "Chinese",
            "Eastern Europe",
            "French",
            "Indian",
            "Italian",
            "Japanese",
            "Kosher",
            "Mediterranean",
            "Mexican",
            "Middle Eastern",
            "Nordic",
            "South American",
            "South East Asian"
        ],
        type: 'select'
    },
    mealType: {
        title: 'Meal Type',
        list: [
            "Breakfast",
            "Dinner",
            "Lunch",
            "Snack",
            "Teatime"
        ],
        type: 'select'
    },
    dishType: {
        title: 'Dish Type',
        list: [
            "Biscuits and cookies",
            "Bread",
            "Cereals",
            "Condiments and sauces",
            "Desserts",
            "Drinks",
            "Main course",
            "Pancake",
            "Preps",
            "Preserve",
            "Salad",
            "Sandwiches",
            "Side dish",
            "Soup",
            "Starter",
            "Sweets"
        ],
        type: 'select'
    },
    q: {
        title: 'Search by Name',
        type: 'text'
    },
    ingr: {
        title: 'Number of Ingredients',
        min: 1,
        max: 20,
        type: 'range'
    },
    calories: {
        title: 'Calorie Limit',
        min: 0,
        max: 3000,
        type: 'range'
    },
    time: {
        title: 'Time Limit',
        min: 1,
        max: 100,
        type: 'range'
    }
}

export default params;