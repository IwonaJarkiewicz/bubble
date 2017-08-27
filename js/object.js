'use strict';

/*var wojtek = {
    imie: "Wojtek", //właściwość obiektu
    wzrost: 181,
    przedstawOsobe: function() {
        console.log("Cześć jestem: " + this.imie + ", mam " + this.wzrost + " cm wzrostu"); // odwołanie do imienia znajdującego się w danym obiekcie
    }
    }
var kaja = {
    imie: "Kaja", //właściwość obiektu
    wzrost: 160,
    przedstawOsobe: function() {
        console.log("Cześć jestem: " + this.imie + ", mam " + this.wzrost + " cm wzrostu"); // odwołanie do imienia znajdującego się w danym obiekcie
    }
    }


console.log(wojtek.imie);
console.log(wojtek.wzrost);

console.log(kaja.imie);
console.log(kaja.wzrost);

//osoba.imie = "Adam"; //zmiana wartości dla obiektu

//console.log(osoba["imie"]);
//console.log(osoba["wzrost"]);

kaja.przedstawOsobe(); //wywołanie funkcji przedstawOsobe
console.log();*/



class Osoba {
    constructor(imie,nazwisko) {
        //console.log("cześć");
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
        
    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + "\n"
                  + "Nazwisko: " + this.nazwisko + "\n"
                  + "Wzrost: " + this.wzrost + "\n"
                  + "Oczy: " + this.oczy);
    }
}
var wojtek = new Osoba("Wojtek", "Potocki");

wojtek.wzrost = 180;
wojtek.oczy = "niebieskie"

//console.log(wojtek);
var karol = new Osoba("Karol", "Młodawski");

wojtek.wyswietlInfo();
karol.wyswietlInfo();
