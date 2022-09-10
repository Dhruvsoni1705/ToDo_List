let taskList = [];


function addTaskToList(task){
    taskList.push(task);
}



function getAllTask(){
    return taskList.slice(0);
}

function isTaskExist(name){
    const tasks = getAllTask();
    return tasks.find((task) => name.toLowerCase() === task.name.toLowerCase());  
}