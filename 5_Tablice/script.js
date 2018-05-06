//Zadanie 1
console.log("Zadanie 1");

var numbers = [3, 5, 6];

for (var i = 0; i <numbers.length; i++){
  console.log(numbers[i]);
}

//Zadanie 2
console.log("");
console.log("Zadanie 2");

var fruits = ["apple", "watermelon", "raspberry", "strawberry", "melon"];

console.log(fruits[0]);

console.log("");
console.log(fruits[fruits.length - 1]);

console.log("");
for (var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

//Zadanie 3
console.log("");
console.log("Zadanie 3");

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (var i= 0; i < myNumbers.length; i++){
  sum = sum + myNumbers[i];
}
console.log(sum);

//Zadanie 4
console.log("");
console.log("Zadanie 4");

var arr1 = [22, 54, 32, 3, 40, 7, 8, 15, 89, 33];
var sum1 = 0;

for (var i = 0; i <arr1.length; i++){
  if (arr1[i] % 2 === 0){
    sum = sum + arr1[i];
  }
}
console.log(sum);

//Zadanie 5
console.log("");
console.log("Zadanie 5");

var arr2 = [5, 3, 7, 119, 1, 24, 32, 67, 99, 23];
var max = 0;

for (var i = 0; i < arr2.length; i++){
  for (var j = 0; j < arr2.length; j++){
    if (arr2[j] > arr2[j + 1]){
      var prev = arr2[j]; //większa liczba jest przypisana do zmiennej prev, aby można ją było później wstawić w miejsce arr2[j+1]
      arr2[j] = arr2[j + 1];//mniejsza liczba zajmuje miejsce większej
      arr2[j + 1] = prev;//większa liczba zajmuje miejsce mniejszej
    }
  }
}
max = arr2[arr2.length-1];
console.log(max);

//Zadanie 6
console.log("");
console.log("Zadanie 6");

var arr3 = [2, 4, 6, 5, 2, 6, 8, 7, 9, 7];
var firstIndex = false;

for (var i = 0; i < arr3.length; i++){
  for (var j = i + 1; j < arr3.length; j++){
    if (arr3[i] === arr3[j]){
      firstIndex = i; //do zmiennej przypisany jest indeks powtarzającej się liczby
      // console.log(i);
      break;
    }
  }
  if (firstIndex !== false){//jeśli firstIndex ma inną wartość niż false to zatrzymaj pętle zewnętrzną
    break;
  }
}
console.log(firstIndex);

//Zadanie 7
console.log("");
console.log("Zadanie 7");

var myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = myNum.length - 1; i >= 0; i--){
  console.log(myNum[i]);
}
