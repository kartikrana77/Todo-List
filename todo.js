let e = localStorage.getItem("todolist");
let todoList = JSON.parse(e)||[];
displayIteam();

let addTodo = () =>{
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let dateItem = dateElement.value;
    let inputItem = inputElement.value;
    todoList.push({item: inputItem,date: dateItem});
    inputElement.value = '';
    dateElement.value = '';
    displayIteam();
    };

    let addElement = document.querySelector('.b1');
    addElement.addEventListener('click',addTodo);

 function displayIteam(){
    let displayElement = document.querySelector('.display-cont');
   
    let newHtml = '';
    for(let i =0 ; i < todoList.length ; i++){
        let item = todoList[i].item;
        let date = todoList[i].date;
       newHtml += `
       
       <span>${item}</span>
       <span>${date}</span>
       <button id="b2"onclick="todoList.splice(${i},1);displayIteam();">Delete</button>`;  
    }
    displayElement.innerHTML = newHtml;
    localStorage.setItem("todolist", JSON.stringify(todoList));
}
