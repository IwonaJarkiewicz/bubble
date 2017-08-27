'use strict'

var liczba1 = 13, liczba2 =5;

var wynik;

wynik = liczba1 % liczba2; //zastosowanie przy sprawdzaniu czy liczba jest parzysta

console.log("krok 1: " + wynik);

console.log("krok 2: " + wynik++);//wyświetla i dopiero zwiększa

console.log("krok 3: " + ++wynik);//zwiększa i wyświetla

console.log("krok 3: " + --wynik);

liczba1 = 8;
liczba1 += 8; //liczba1 = liczba1 + 8

var tekst = "Wojtek";
tekst += "Potocki"; //tekst = tekst + "Potocki"
console.log(tekst);

console.log("*****************************************");

var liczba = 10;
var tekst = "10";

console.log(liczba == tekst); //porównuje tylko wartość
console.log(liczba === tekst); //porównuje wartość i typ

console.log(13 == 5 && 10 == "10");

(2>5) ? console.log("tak") : console.log("nie"); // instrukcja warunkowa warunek ? jeśli tak : jeśli nie



















