function getRecipeById(recipe_id){
    return Promise.resolve(`awesomereipe with id ${recipe_id}`)
}

module.exports = {
    getRecipeById
};