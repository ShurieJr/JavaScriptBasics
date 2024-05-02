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
    //This concat() method can do even more! We can use it to add values as well. We can
  //add a single value, or we can comma-separate multiple values:
let arr8 = arr7.concat(7, 8, 9,10, 11);
console.log(arr8);

//pop()
arr8 = arr7.pop();  //Removing the last element
//shift()   
arr8.shift(); //Removing the first element

//Remember splice()? This is a very special method because we can also use it to
//delete values. We specify the index from where we want to start deleting, and then
//the number of elements we want to delete.
  arr8.splice(1, 3);    //splice() as delete , and it takes two parameters (begin, end); 


  //delete
  delete arr8[0];  //  <1 empty item>

  //find()
  let findValue = arr8.find(function(e) { return e=== 7});
  console.log(findValue);

  //indexOf()
  console.log(arr8.indexOf(10));

  //replace(,)
  arr8.replace(10, 20)

  //reverse()
  arr8.reverse();