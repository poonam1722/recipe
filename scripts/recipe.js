let recipes=getsavednotes()

//serching start
   const filters={
   searchtext:''
}

renderrecipe(recipe,filters)

document.querySelector('#add').addEventListener('click', function (e) {
   const id=uuidv4()
   recipes.push({
      id: id,
      recipe: '',
      yummy: '',
   })
   savedrecipe(recipes)
   location.assign(`edit.html#${id}`)

})

document.querySelector('#search-text').addEventListener('input',function (e) {
   filters.searchtext=e.target.value
   renderrecipe(recipe, filters)
   

})
