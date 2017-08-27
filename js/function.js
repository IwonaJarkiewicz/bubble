'use strict';

function multiply(param1) {
    var iloczyn = 1;
   
if (param1.length != 0) {
    for(var i =0; i < param1.length; i++){
    iloczyn *= param1[1];
}
}else{
    iloczyn = 0;
}
var tablica = [];



//var wynik = multiply(3, 9, 10);
//console.log("wynik = " + wynik);


var funkcja = function() {
    return "wynik:"
}
//console.log(funkcja);
//console.log(funkcja());