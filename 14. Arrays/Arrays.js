//Arrays

//1. Creating arrats ----------------------------------------------------------------
  //way 1
  arr1 = new Array("purple", "green", "yellow");
  // way 2
  arr2 = ["black", "orange", "pink"];

  //way 3
  arr3 = new Array(10);  // [ <10 empty items> ]
  arr4 = [10];  //[ 10 ]

  console.log(arr3);  
  console.log(arr4);

  //JavaScript simply stores all the variables with their own data type and value in the array:
let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

 //what happens if you define an array
// using const. You can change the values of a constant array, but you cannot change
// the array itself. Here is a piece of code to demonstrate:
const arry = ["hi there"];
arry[0] = "new value";
console.log(arry[0]);
// arry = ["nope, now you are overwriting the array"];  //TypeError: Assignment to constant variable.

//Accessing elements ----------------------------------------------------------------
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);

console.log(cars[3]);  // undefined
console.log(cars[-1]);  //undefined

//Overwriting elements -----------
cars[0] = "Tesla";
console.log(cars[0]);

//output the whole array:
console.log(cars);


//length property
console.log(cars.length);

//to access the last element of the array:
lastElement = cars[cars.length - 1]

console.log(lastElement);