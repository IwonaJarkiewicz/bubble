'use strict';

function mnozenie(tablicaLiczb) {
    var iloczyn = 1;
    tablicaLiczb.forEach(
        function (element, index) {
            iloczyn *= element;
        }
    );

    //element - dany element w tablicy, na którym obecnie znajduje się pętla (dla pierwszego obiegu to pierwszy element, dla drugiego obiegu drugi element)

    //index - indeks danego elementu w tablicy, na którym obecnie znajduje się pętla (dla pierwszego elementu jest to index 0)
    return iloczyn;
}

var tablica = [4, 5, 10, 8];
console.log(mnozenie(tablica));