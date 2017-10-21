console.log("działa!")
//typy zmiennych - komentarz
// liczby i stringi
var myText = "test";
var myNumber = 2.2;
var myString = "34";
console.log(myText);
console.log(myNumber);
console.log(myNumber + 2);
console.log(myString + 2);

//wartości logiczne
var prawda = true;
var falsz = false;
console.log(prawda);

//tablice w nawiasach kwadratowyc
var tablica = [100, 2, 3]; //ile elementów: 3, ale liczymy od 0 - czyli miejsca 0, 1, 2
console.log(tablica[0]); //wypisuje liczbę na danej pozycji

//pobrać długość tablicy
console.log(tablica.length);

var tablica2 = ["jabłko", "gruszka", 5, true, [6]];
console.log(tablica2);
console.log(tablica2[1] );
console.log(tablica2[3] );


//funkcje - zakres, po to, aby coś robić, w nawiasach okrągłych wrzycamy coś do funkcji - zmienne, typy danych
function wypisywanie(owoc){  //nazwa zmiennej, pod którą będzie podstawiona po uruchomieniu funkcji  owoc=marchewka
  //zmienna owoc jest znana tylko w ramach funkcji, inna próba wywołania przez console log nie zadziała
  // console.log("Moja funkcja", owoc);  // to jest bezużyteczne, pokazuje dane i nic więcej
  var sok = "miksowanie " + owoc;
  return sok//zwraca danę do innego wykorzystania
}

var otrzymanySok = wypisywanie("marchewka"); //uruchamianie, wywoływanie funkcji, bez tego nie zobaczymy zmiennych
// "miksowanie" + owoc ==== sok ==== wypisywanie("marchewka") ==== otrzymanySok
console.log(otrzymanySok);
console.log( wypisywanie("gruszka"));
wypisywanie("jabłko");

//instrukcje warunkowe
// if (warunek){co ma się stać jeśli prawda}

function isRain () {
  console.log("Sprawdzam pogodę");
  //algorytm
  return true;
}
var czyPada = isRain();

if ( czyPada ){ // == podwójny znak równości, != różne, w nawiasie nie robi sie instrukcji tylko podstawia zmienne
  console.log("Weź parasol") // co zrobi jeśli prawda
} else {
  console.log("Weź okulary słoneczne") // co zrobi jeszcze fałsz
}


//Pętla - powtarza zadanie kilka razy
for (var i = 98; i <100; i++ ){ //() - ile razy ma się powtórzyc, zmienna licząca gdzie jesteśmy, zaczynając od 0 dopóki i mniejsze od 0 zrów i = i + 1 lub i++
  console.log("Cześć", i);
  //zaczynając od 98, dopóki będzie mniejsze niż 100, zwiększając o 1
}

for (var i = 0; i <100; i++ ){
  isRain();
}

// ćwiczenia ze skryptu

var imie = "Agnieszka";
console.log(imie);
var tabl = ["Anna", "Monika", "Agnieszka", "Agnieszka"];
console.log(tabl[1] );

var liczba1 = 12
var liczba2 = 9
if (liczba1 > liczba2){
  console.log("Hurra!");
}

for (var i = 0; i <= tabl.length; i++){
  console.log(tabl[i]);
}

// DOM Api Document Object Mobi
var ppp = document.querySelector(".jumbotron"); //jego jeszcze nie ma , najlepiej sctipt wkleic na koncu


console.log(ppp);
ppp.style.border = "3px solid red"

var divs = document.querySelectorAll("div")
console.log( divs.length);
divs[0].style.display = "none"
