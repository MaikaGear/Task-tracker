const addTaskBtn = document.querySelector('.add-btn');
const userInput = document.querySelector('.user-input');
const taskList = document.querySelector('.task-list');
const listItem = document.querySelector('.list-item');
const popUp = document.querySelector('.popup');


let list = []



function render(){
    let newEl = document.createElement('li')
    newEl.textContent = list[0]
    newEl.setAttribute('class','list-item')
    taskList.appendChild(newEl)
    userInput.value = ''



    let deleteItem = document.createElement('button')
    deleteItem.setAttribute('class', 'delete-btn')
    deleteItem.innerText = '✕'
    newEl.appendChild(deleteItem)

    deleteItem.addEventListener('click',()=>{
        list.shift()
        deleteItem.remove()
        newEl.remove()
    })

    newEl.addEventListener('click', ()=>{
        if(newEl.style.textDecorationLine === 'line-through'){
            newEl.style.backgroundColor = 'rgba(226, 226, 226, 0.789)'
            newEl.style.textDecorationLine = 'none'
        } else {
            newEl.style.backgroundColor = 'rgba(128, 128, 128, 0.789)'
            newEl.style.textDecorationLine = 'line-through'
            newEl.style.textDecorationColor = 'red'
        }
    })
}

userInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        if(userInput.value === ''){
            popUp.style.display = 'block'
            userInput.addEventListener('click',()=>{
                popUp.style.display = 'none'
            })
        } else {
            list.unshift(userInput.value)
            render()
            popUp.style.display = 'none'
        }
    }
})
addTaskBtn.addEventListener('click', ()=>{
    if(userInput.value === ''){
        popUp.style.display = 'block'
        userInput.addEventListener('click',()=>{
            popUp.style.display = 'none'
        })
    } else {
        list.unshift(userInput.value)
        render()
        popUp.style.display = 'none'
    }
})



