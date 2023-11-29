const userInput = document.querySelector(".taskInput")
const button = document.querySelector("button");

function addTask(){
    var newTask = document.createElement("li");
    newTask.textContent = userInput.value;

    var myList = document.querySelector(".tasks-list")
    myList.append(newTask);
    userInput.value = "";
}