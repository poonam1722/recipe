let todos = getsavedtodo()

const filters={
    searchtext: '',
    hidecompleted:false
}

rendertodo(todos,filters)

// document.querySelector("#search-text").addEventListener('input',function(e)
// {
//     filters.searchtext=e.target.value
//     rendertodo(todos,filters)
// })

document.querySelector('#form').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
    id: uuidv4(),
    text:e.target.elements.addtodo.value,
    complete:false
    })
    savetodos(todos)
    rendertodo(todos, filters)
    e.target.elements.addtodo.value=''//clear the field
})

// document.querySelector('#hide-completed').addEventListener('change',function(e){
//     filters.hidecompleted = e.target.checked
//     rendertodo(todos, filters)
// })