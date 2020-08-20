var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JS',
    'Acessar Youtube'
];

renderTodos = () => {
    listElement.innerHTML = ''; //remove tudo que esta dentro da UL antes de renderizar
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos()

addTodos = () => {
    var todoText = inputElement.value;

    todos.push(todoText);//add o que foi escrito dentro do todo
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodos;