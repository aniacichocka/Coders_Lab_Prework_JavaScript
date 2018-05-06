//Zadanie 1
console.log("Zadanie 1");

var numberOne = 45;
var numberTwo = 377;

if (numberOne > numberTwo){
  console.log("numberOne " + numberOne);
} else {
  console.log("numberTwo " + numberTwo);
}

//Zadanie 2
console.log("");
console.log("Zadanie 2");

var myNum1 = 33;
var myNum2 = 10;
var myNum3 = 12;

if (myNum1 > myNum2 && myNum1 > myNum3){
  console.log(myNum1);
} else if (myNum2 > myNum1 && myNum2 > myNum3){
  console.log(myNum2);
} else {
  console.log(myNum3);
}

//Zadanie 3
console.log("");
console.log("Zadanie 3");

for (var i = 0; i < 10; i++){
  console.log("Lubię JavaScript");
}

//Zadanie 4
console.log("");
console.log("Zadanie 4");

var result = 0;

for (var i = 1; i <= 10; i++){
  result = result + i;
}
console.log(result);

//Zadanie 5
console.log("");
console.log("Zadanie 5");

var n = 5;

for (var i = 0; i <= n; i++){
  if (i % 2 === 0){
    console.log(i + " - " + "parzysta");
  } else {
    console.log(i + " - " + "nieparzysta");
  }
}

//Zadanie 6
console.log("");
console.log("Zadanie 6");

for (var i = 0; i < 4; i++){
  for (var j = 0; j < 4; j++){
    console.log("i=" + i + ",j=" + j);
  }
}

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

//Zadanie 8
console.log("");
console.log("Zadanie 8");

var n = 5;
var stars = "";

for (var i = 0; i < n; i++){
  stars = "";
  for (var j = 0; j <= i; j++){
    stars = stars + "*";
  }
  console.log(stars);
}

//Drugi sposób

// for (var i = 0; i < n; i++){
//   stars = "";
//   for (var j = 0; j < n; j++){
//     if (j <= i){
//      stars = stars + "*";
//     }
//   }
//   console.log(stars);
// }


//Zadanie 9 - dodatkowe
console.log("");
console.log("Zadanie 9");

var n = 5;
var line = "";

for (var i = 0; i < n; i++){
  line = "";
  for (var j = 0; j < n; j++) {
    if (j <= i){
      line = line + "*";
    } else if (j >= i + 1){
      line = line + (j + 1);
    }
  }
  console.log(line);
}
for (var i = 0; i < n; i++){
  line = "";
  for (var j = 0; j < n; j++){
    if (j >= i){
      line = line + "*";
    }
  }
  console.log(line);
}

//Zadanie 10 - dodatkowe
console.log("");
console.log("Zadanie 10");

var n = 5;

for (var i = 1; i <= n; i++){
  for (var j = 1; j <= n; j++){
  var res = i * j;
  console.log(i + " * " + j + " = " + res);
  }
}
