'use strict';

var parametr4 = 10;

function multiply(parametr1, parametr2, parametr3) {
    var result;
    parametr4 = 2;
    
    result = parametr1 * parametr2 *parametr3 * parametr4;
   
    return result;
}

//console.log(result); //zmienna nie jest widoczna bo jest zmienną lokalną w funkcji mutiply
console.log("Wynik: " + multiply(2, 3, 4));