//Ajax requisição assincrona
//Requisitar informações sem precisar atualizar a pagina
var xhr = new XMLHttpRequest(); //Funcionalidade

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}