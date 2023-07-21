//variables

const addtask=document.getElementById('add-task');
const taskcontainer=document.getElementById('task-container');
const inputtask=document.getElementById('input-task')

// Event Listener for add button

addtask.addEventListener('click',function(){
    let task=document.createElement("div")
    task.classList.add('task')

    let li=document.createElement('li')
    li.innerText=`${inputtask.value}`;
    task.appendChild(li)

    let checkBtn=document.createElement('button')
    checkBtn.innerHTML='<i class=" fa-solid fa-check"></i>'
    checkBtn.classList.add('check-box')
    task.appendChild(checkBtn)

    let deleteBtn=document.createElement('button')
    deleteBtn.innerHTML='<i class=" fa-solid fa-trash-can"></i>'
    deleteBtn.classList.add('delete-box')
    task.appendChild(deleteBtn)

    if(inputtask.value === ""){
        alert('Please Enter a Task')
    }
    else{
        taskcontainer.appendChild(task)
    }
    inputtask.value="";

    checkBtn.addEventListener('click',function(){
        checkBtn.parentElement.style.textDecoration="line-through"
    })

    deleteBtn.addEventListener('click',function(e){
        let target=e.target
        target.parentElement.parentElement.remove()
    })
    
})


