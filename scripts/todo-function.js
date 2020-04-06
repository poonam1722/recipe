//checking existing data
const getsavedtodo=function()
{
    const todosjson = localStorage.getItem('todos')
    if (todosjson !== null) {
        return JSON.parse(todosjson)
    }
    else{
        return []
    }
}
//saving data
const savetodos=function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


//removetodo
const removetodo=function(id){
    const todoindex=todos.findIndex(function (todo) {
        return todo.id ===id
    })
    if(todoindex >-1){
        todos.splice(todoindex,1)
    }
}


//toggle
const toggletodo=function(id){
    const todo=todos.find(function(todo){
        return todo.id === id
    })
    if(todo !==undefined){
        todo.complete =!todo.complete
    }
}

//generating notes
const generatetododom = function (todo) {
    const dive1=document.createElement('div')
    const checke1=document.createElement('input')
    const texte1=document.createElement('span') 
    const button=document.createElement('button')
    

    //checbox
    checke1.setAttribute('type','checkbox')
    checke1.checked=todo.complete
    checke1.addEventListener('change',function(){
        toggletodo(todo.id)
        savetodos(todos)
        rendertodo(todos,filters)
    })

    //button
    button.textContent='Remove'
    button.addEventListener('click',function () {
        removetodo(todo.id)
        savetodos(todos)
        rendertodo(todos,filters)
    })

 //summing everything up
    dive1.appendChild(checke1).style.padding="0 0 0 10";
    dive1.appendChild(texte1).style.padding = "0 0 0 10";
    dive1.appendChild(button).style.margin = "0 0 10 150";

    texte1.textContent = todo.text
    return dive1
}

//rendering search
const rendertodo=function(todos,filters){
   let filtertodo=todos.filter(function(todo)
    {
        return todo.text.toLowerCase().includes(filters.searchtext.toLowerCase())
    })
    
    const v = filtertodo.filter(function (todo) {
        return !todo.complete
    })

   filtertodo= filtertodo.filter(function (todo) {
        if(filters.hidecompleted)
        {
            return !todo.complete
        }
        else{
            return true
        }
    })

    

    document.querySelector('#todo').innerHTML=''

    b=generatetodosummary(v)
    document.querySelector('#todo').appendChild(b)

    filtertodo.forEach(function(todo){
        c=generatetododom(todo)
        document.querySelector('#todo').appendChild(c)
         }) 
    
}

//genearting summary
const generatetodosummary =function(v){
    const b = document.createElement('h2')
    b.textContent = ``
    return b
}

