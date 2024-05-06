let todoList = [];
displayIteam();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let dateItem = dateElement.value;
    let inputItem = inputElement.value;
    todoList.push({item: inputItem,date: dateItem});
    inputElement.value = '';
    dateElement.value = '';
    displayIteam();
}

function displayIteam(){
    let displayElement = document.querySelector('#display-cont');
   
    let newHtml = '';
    for(let i =0 ; i < todoList.length ; i++){
        let item = todoList[i].item;
        let date = todoList[i].date;
       newHtml += `
       <div>
       <span>${item}</span>
       <span>${date}</span>
       <button onclick ="todoList.splice(${i},1);displayIteam();">Delete</button>
       </div>
       `;
    }
    displayElement.innerHTML = newHtml;
}