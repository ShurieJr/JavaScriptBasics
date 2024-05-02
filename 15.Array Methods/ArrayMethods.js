//Array methods
//push()
  favoriteFruits = ["grapefruit", "orange", "lemon"];
  favoriteFruits.push("apple");

//splice()
  // what if you would want to add elements at a certain index?
  //You can use the splice() method. This one is slightly more difficult:
    let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
    arrOfShapes.splice(2, 0, "square", "trapezoid");
    console.log(arrOfShapes);
//concat()
    //You can also add another array to your array. This can be done with the concat() 
    let arr5 = [1, 2, 3];
    let arr6 = [4, 5, 6];
    let arr7 = arr5.concat(arr6);
    console.log(arr7);