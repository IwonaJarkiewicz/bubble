'use strict'

function sort(input) {

    //deklarujemy tablicę

    // for(var j = 0, j < ile - 1; j++){
    //   if(sort[j+1] > sort[j]) {

    // }

    do {
        for (var i = 0; i < ile - 1; i++) {
            if (input[1] > input[i + 1]) {
                var tymczasowa = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tymczasowa;
            }
        }
        ile--;
    } while (ile > 1);
    return input;
}

var arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.20, 78, 34, 1e2, 45, 67, 98, 1];
var ile = input.length;
console.log("array przed wysłaniem: ");
console.log("array po posortowaniu: ");
