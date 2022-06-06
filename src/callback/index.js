function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){ //llamar "callback" a la funcion que se recibe es un estandar
    return callback(num1, num2);
}

console.log(calc(6, 2, sum)); //Funcion que manda como parametro a otra funcion

function date(callback){
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);