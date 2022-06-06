//Lo siguiente nos va a servir para hacer instancias de un llamdo a una API
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    //Los parametros de lo siguiente son: 1. El llamado de GET, 2. La URL de la API y 3. Indicación si será asincronó o no
    xhttp.open('GET', url_api, true);
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
    xhttp.onreadystatechange = function (event) {
        //Aqui se hace verificacion de estado para ver si llamar el callback
        //readystate
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is read
        if (xhttp.readyState === 4) { //Se verifica si se ha completado la peticion
            //status
            // 200: "OK"
            // 403: "Forbidden"
            // 404: "Page not found"
            // For a complete list go to the Http Messages Reference
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1)
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});