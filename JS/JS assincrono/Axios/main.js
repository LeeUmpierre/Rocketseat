//Encapsula o XMLhttpRequest
//Não precisa mais do JSON.parse , pois o axios ja interpreta e retorna
axios.get('https://api.github.com/users/diego3g')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warning(error);
    });