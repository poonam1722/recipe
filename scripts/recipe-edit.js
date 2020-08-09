const titleelement = document.querySelector('#recipe-title')
const bodyelement = document.querySelector('#recipe-body')
const recipeId = location.hash.substring(1)
const recipes = getsavednotes()
const recipe = recipes.find(function (recipe) {
    return recipe.id === recipeId
})
if (recipe === undefined) {
    location.assign('index.html')
}

titleelement.value = recipe.recipe
bodyelement.value = recipe.yummy


titleelement.addEventListener('input', function (e) {
    recipe.recipe = e.target.value
    savedrecipe(recipes)
})

bodyelement.addEventListener('input', function (e) {
    recipe.yummy = e.target.value
    savedrecipe(recipes)
})

document.querySelector('#remove-recipe').addEventListener('click', function (e) {
    removerecipe(recipe.id)
    savedrecipe(recipes)
    location.assign('index.html')
})

