'use strict';

/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and concatenates a message using the arguments passed into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.

For TODO item, be sure to change it to say DONE when you have successfully completed the task*/

// TODO: Write your code here
function sum(a,b){ //eslint-disable-line
  var theSum = a + b;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum + '.';

  //Push info to html document elements
  document.getElementById('sum-head').innerHTML = 'sum(' + a + ', ' + b + ')';
  document.getElementById('sum').innerHTML = message;
  return [theSum, message];
}

// TODO: Here is the test for sum(); uncomment it to run it
testSum(4, 7);

//problem 1 complete

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments passed into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// TODO: Write your code here
function multiply(a,b){ //eslint-disable-line
  var theProduct = a * b;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + theProduct + '.';

  //Push info to html document elements
  document.getElementById('mult-head').innerHTML = 'multiply(' + a + ', ' + b + ')';
  document.getElementById('mult').innerHTML = message;
  return [theProduct, message];
}

// TODO: Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and concatenates messages using the arguments that were passed into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// TODO: Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var theSum;
  theSum = sum(sum(a, b)[0], c)[0];
  var theProduct;
  theProduct = multiply(multiply(a, b)[0], c)[0];
  var sumMessage = a + ' and ' + b + ' and ' + c + ' sum to ' + theSum + '.';
  var productMessage = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + theProduct + '.';

  //console logs for troubleshooting
  console.log('sum:', theSum);
  console.log('product:', theProduct);
  console.log('sumMessage:', sumMessage);
  console.log('productMessage:', productMessage);

  //push information to html
  document.getElementById('sam-head').innerHTML = 'sumAndMultiply(' + a + ', ' + b + ', ' + c + ')';
  document.getElementById('sam-sum-msg').innerHTML = sumMessage;
  document.getElementById('sam-mult-msg').innerHTML = productMessage;
  return [theSum, theProduct, sumMessage, productMessage];
}

// TODO: Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// TODO: Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var arrSum = 0;
  var arrList = '';
  for (var i = 0; i < testArray.length; i++) {
    arrSum = sum(arrSum, testArray[i])[0]; //arrSum + testArray[i];
    if (arrList) {
      arrList = arrList + ',' + testArray[i];
    } else if (!arrList) {
      arrList = testArray[i];
    }
  }
  arrList = arrList + ' was passed in as an array of numbers, and ' + arrSum + ' is their sum.';

  //console logs for troubleshooting
  console.log('arrSum:', arrSum);
  console.log('arrList:', arrList);

  //push info to html
  document.getElementById('sum-arr-head').innerHTML = 'sumArray([' + testArray + '])';
  document.getElementById('sum-arr-msg').innerHTML = arrList;
  return [arrSum, arrList];
}

// TODO: Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var arrProduct = 1;
  var arrList = '';
  for (var i = 0; i < testArray.length; i++) {
    arrProduct = multiply(arrProduct, testArray[i])[0]; //arrSum + testArray[i];
    if (arrList) {
      arrList = arrList + ',' + testArray[i];
    } else if (!arrList) {
      arrList = testArray[i];
    }
  }
  arrList = 'The numbers ' + arrList + ' have a product of ' + arrProduct + '.';

  //console logs for troubleshooting
  console.log('arrSum:', arrProduct);
  console.log('arrList:', arrList);

  //push info to html
  document.getElementById('mult-arr-head').innerHTML = 'multiplyArray([' + testArray + '])';
  document.getElementById('mult-arr-msg').innerHTML = arrList;
  return [arrProduct, arrList];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
