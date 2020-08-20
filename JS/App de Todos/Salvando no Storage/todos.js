var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Retornando do Json em formato de vetor e pegando a lista de to dos
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];//Caso não encontrar nada retorna vetor vazio

renderTodos = () => {
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos()

addTodos = () => {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodos;

deleteTodo = (pos) => {
    todos.splice(pos, 1)//remove baseado na posição do Array
    renderTodos();
    saveToStorage();
}

saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));//converter vetor em String(json)
}
