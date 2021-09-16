const taskList = document.querySelector(".tasks ul");
let prevList = taskList.innerHTML;
const input = document.querySelector(".inputTask input");
// const taskList = document.querySelector(".tasks");
let deleteButtons = [];
let order = "Normal";

console.log(input.nodeValue);
console.log(taskList.innerHTML);

function addTask(task){
    const newTask = "<li><span class=\"function\"><span class=\"check\" onclick='taskFinished(this.parentNode.parentNode)'>&#9745</span><span class=\"delete\" onclick='removeTask(this.parentNode.parentNode)'>&#128503</span></span><span class=\"taskName\">"+task+"</span></li>";
    if(order==='Normal'){
        taskList.innerHTML= newTask + prevList; 
    }
    if(order==='Reverse'){
        taskList.innerHTML= prevList + newTask; 
    }
    prevList = taskList.innerHTML;
    deleteButtons  = document.querySelectorAll(".delete");
}

input.addEventListener("keyup", function(e){
    // console.log(e);
    if(e.keyCode==13 && input.value == ""){
        alert("Enter a task");
    }
    if(e.keyCode==13 && input.value !==""){
        console.log("Enter is pressed");
        console.log(input.value);
        addTask(input.value);
        console.log(deleteButtons);
        input.value="";
    }
})
// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
//   };
// console.log(deleteButtons);
// deleteButtons.forEach(button=>{
//     button.addEventListener('click', function(e){
//         console.log(e);
//     })
// })
function removeTask(task){
    task.remove();
    prevList=taskList.innerHTML;
    console.log('task Deleted');
}
function taskFinished(item){
    const taskName = item;
    // taskName.classList.add("checkedTask");
    item.childNodes[1].classList.add('checkedTask');
    prevList=taskList.innerHTML;
}

function deleteChilds(parent){
    parent.textContent='';
}
function reverseSort(){
    const list = document.getElementById('myList');
    const liTags = document.querySelectorAll('ul li');
    const listArr = Array.from(liTags);
    listArr.reverse();
    // console.log("number of elements in ul is "+length + " and the no of iteration will be " + iterations);
    deleteChilds(list);
    for(let i=0; i< listArr.length; i++){
        list.appendChild(listArr[i]);
    }
    console.log(listArr);
}
const rbtns = document.querySelectorAll('input[name=sort]');
function sortingTasks(e){
    reverseSort();
    console.log(e.target.id);
    if(e.target.id==='n'){
        order='Normal';
    }
    else{
        order='Reverse';
    }
    prevList=taskList.innerHTML;
}
rbtns.forEach(rbtn => rbtn.addEventListener('click', function(e){
    sortingTasks(e);
}));
