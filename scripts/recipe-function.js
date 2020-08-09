const getsavednotes=function()
{
   const recipejson = localStorage.getItem('recipes')
  if (recipejson !== null) {
        return JSON.parse(recipejson)
    }
    else{
        return []
    }
}

const generatedom=function (recipes) {
    const n = document.createElement('a')
    const dive1=document.createElement('div')
    const id = uuidv4()
    if (recipes.recipe.length >0) {
        n.textContent = recipes.recipe
    }
    else {
        n.textContent = 'unnamed recipe'
    }
    n.setAttribute('href',`edit.html#${recipes.id}`)
    dive1.appendChild(n).style.color = "black"
    dive1.appendChild(n).style.marginTop="30"
    return dive1
}

const renderrecipe = function (recipe, filters) {
    const filterrecipe = recipes.filter(function (recipe) {
        return recipe.recipe.toLowerCase().includes(filters.searchtext.toLowerCase())
    })

    document.querySelector('#recipe').innerHTML = ''
    filterrecipe.forEach(function (recipes) {
        const n = generatedom(recipes)
        document.querySelector('#recipe').appendChild(n)
    })

}

const savedrecipe=function (recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const removerecipe = function (id) {
    const recipeindex = recipes.findIndex(function (recipe) {
        return recipe.id === id
    })
    if (recipeindex > -1) {
        recipes.splice(recipeindex, 1)
    }
}