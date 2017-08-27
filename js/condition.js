'use strict'

var wzrostMateusz = 190;
var wzrostOlgi = 190;

/* warunek IF */
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa")
}

/* warunek If else*/
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga jest wyższa");
}

/* warunek if else if*/
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga tak wysoka jak Mateusz");
} else {
    console.log("Olga jest wyższa");
}

/* warunek switch break */
var kolor = "zielony";
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czarwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
             }



