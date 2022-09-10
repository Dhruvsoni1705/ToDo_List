const inputEl = document.querySelector(".todo-input");
const addToEl = document.querySelector(".add-list");
const listEl = document.querySelector(".todo-list");

const filterListEl = document.querySelector(".filter");
console.dir(filterListEl)
// console.log(remainListEl)

addToEl.addEventListener("click",addToList);
listEl.addEventListener("click",checkOrDelete);

filterListEl.addEventListener("click",filterEl);

// filterListEl.addEventListener("change", (event) => {
//   let filterValue = event.target.value;

//   Array.from(listEl.children).forEach((element) => {
//     element.remove()
//   });
// })


function addToList(){
    let name = inputEl.value;
    name  = name.trim()
    if(!name){
      alert("please enter task name");
    }
    else if(isTaskExist(name)){
      alert(name + " already exist")
    } 
    else{
      const task = new list({
       name : name,
       status : "remain",
      });

      addTaskToList(task);
      inputEl.value = ""; 
      const taskEl = addTodo(task);
      updateView();
      listEl.appendChild(taskEl);  
    }
    // const LiEl = updateView();
    console.log(taskList)
}


function addTodo(event){
        const todoDiv = document.createElement("li");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("span");
        newTodo.textContent = event.name;
        newTodo.classList.add("todo-task");
        todoDiv.appendChild(newTodo);
    
        
    
        const completedBtnEl = document.createElement("button");
        completedBtnEl.classList.add("complete-btn");
        completedBtnEl.textContent = "complete";
        todoDiv.appendChild(completedBtnEl);
    
      
        const deleteBtnEl = document.createElement("button");
        deleteBtnEl.classList.add("delete-btn");
        deleteBtnEl.textContent = "delete";
        todoDiv.appendChild(deleteBtnEl);
        
        return todoDiv;
        
}


function checkOrDelete(event){
    const task = event.target;
  console.log(task)
    if(task.classList[0] === "delete-btn"){
        const liEl = task.parentElement;
        liEl.remove();
    }
    
    if(task.classList[0] === "complete-btn"){
        const liEl = task.parentElement;
        liEl.classList.toggle("completed");
        taskList[0].status = "complete";
      console.dir(taskList)
    }
}



function filterEl(e){
  
  // let listEl =document.querySelectorAll(".filter");
  // console.log(listEl); 
  // // if(!listEl){
  //   for (var i = 0; i < listEl.length; i++) {
  //    return listEl[i].style.display = 'none';
  // }
  // }}

  const todos = listEl.childNodes;
  console.log(todos)
  todos.forEach(function (task) {
        console.log("value" , e.target.value)
      switch (e.target.value) {
        case "1":
          task.style.display = "flex";
          break;
        case "2":
          if (task.classList.contains("completed")) {
            task.style.display = "none";
          } else {
            task.style.display = "flex";
          }
          break;
        case "3" :
          if (task.classList.contains("completed")) {
            task.style.display = "flex";
          } else {
            task.style.display = "none";
          }
      }
    })  
}

function updateView(){
  let dropDown= document.querySelector(".filter");
}

// let arr = [{
//   name : "task 1",
//   status : "remain"
//   },{
//   name : "task 2",
//   status : "remain"
//   }]
 
// new list(arr);

// let task1 = new list("task 1","remain");
// let task2 = new list("task 2", "remain");

// taskList.push(task1,task2);

// console.log(taskList)