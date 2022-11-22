const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Peppered Chicken' },
    { recipe_name: 'Parmesan Crusted Salmon' }
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Pesto', ingredient_unit: 'lbs'},
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
    { ingredient_name: 'Lemon Pepper', ingredient_unit: 'Oz'},
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs'},
    { ingredient_name: 'Salmon', ingredient_unit: 'grams'}
]

const step_ingredients = [
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 2 },
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 5, quantity: 0.4 },
    { step_id: 7, ingredient_id: 6, quantity: 1 },
]

const steps = [
    //Broccoli Pesto Pasta
    { step_text: "Heat pan", step_number: 1, recipe_id: 1 },
    { step_text: "Add Brocoli", step_number: 2, recipe_id: 1 },
    { step_text: "Add Pesto Mixed with Pasta", step_number: 3, recipe_id: 1 },
    //Lemon Peppered Chicken
    { step_text: "Heat Oven", step_number: 1, recipe_id: 2 },
    { step_text: "Add Chicken and Lemon Pepper", step_number: 2, recipe_id: 2 },
    { step_text: "put in over at 425 degrees", step_number: 3, recipe_id: 2 },
    //Parmesan Crusted Salmon
    { step_text: "Heat Oven", step_number: 1, recipe_id: 3 },
    { step_text: "Add Salmon and Parmesan", step_number: 2, recipe_id: 3 },
    { step_text: "Bake at 350", step_number: 3, recipe_id: 3 },
]
exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}