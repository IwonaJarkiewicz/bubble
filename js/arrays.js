'use strict'

var imiona = ["Monika", "Krystian", "Łukasz"]
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow = imiona.push("Geralt");
console.log(imiona);
console.log(ileElementow);

var usunietyElement = imiona.pop();
console.log(imiona);
console.log(usunietyElement);

console.log(imiona.unshift("Robert"));

console.log(imiona.shift());
console.log(imiona);

console.log("Ilość elementów: " + imiona.length);

var imie = "Adam";
console.log(imie.length);
console.log(imie[0]);
console.log(imiona);

console.log("====================================");
console.log(imiona.join());
console.log(imiona.join(" - ")); //zamienia tablicę na stringa i dodaje -

console.log(imiona.reverse());
console.log("====================================");
//imiona.sort();
console.log(imiona.sort());

var imionaMeskie = ['Wojtek', 'Michał', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona); //łączy tablice imionaMeskie i imiona
console.log(zbiorImion);
console.log("Tablica imiona meskie: " + imionaMeskie); // wyświetla tablicę imionaMeskie

console.log(zbiorImion.indexOf("Michał")); // wyświtla indeks - pierwszy element o wartości Michał

console.log(Array.isArray(zbiorImion)); // sprawdza czy zbiorImion jest tablicą 

console.log(zbiorImion.slice(2,5)); //wyświetli zbiór <2,5) 
console.log(zbiorImion); //wyświetla cały zbiór

zbiorImion.splice(2, 3, "Zenek", "Grzegorz", "Ania"); //usuwa 3 elementy od 2 indeksu i dodaje nowe elementy w miejsce usuniętych
console.log(zbiorImion);

console.log(zbiorImion.toString()); // zamienia tablicę na string






