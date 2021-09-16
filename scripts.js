const taskList = document.querySelector(".tasks ul");
let prevList = taskList.innerHTML;
const input = document.querySelector(".inputTask input");
// const taskList = document.querySelector(".tasks");
let deleteButtons = [];

console.log(input.nodeValue);
console.log(taskList.innerHTML);

function addTask(task){
    const newTask = "<li><span class=\"function\"><span class=\"check\" onclick='taskFinished(this.parentNode.parentNode)'>&#9745</span><span class=\"delete\" onclick='removeTask(this.parentNode.parentNode)'>&#128503</span></span><span class=\"taskName\">"+task+"</span></li>";
    taskList.innerHTML= newTask + prevList; 
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
