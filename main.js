// // Eloquent JS Exercises

// // 2-1. Looping a triangle

// for (let number = 0; number <= 7; number = number + 1) {

//     var hash = '#';
//     var hashTriangle = hash.repeat(number); // make '#' repeat the same amount as the value of number
//     console.log(hashTriangle);

// }

// // 2-2. FizzBuzz

// for (let number = 0; number <= 100; number = number +1) {

//     if ( number % 3 == 0 && number % 5 == 0 ) {
//         console.log('FizzBuzz')
//     } else if ( number % 3 == 0 ) {
//         console.log('Fizz')
//     } else if ( number % 5 == 0 ) {
//         console.log('Buzz')
//     } else {
//         number
//     }

//     console.log(number);
// }

// // 2-3. Chessboard

// // Attempt 1:

// let grid = 8
// let number = 1;
// while (number <= grid) {
//     const white = ' '
//     const black = '#'
//     if (number % 2 == 0) {
//         console.log((white + black).repeat(grid/2));
//     } else {
//         console.log((black + white).repeat(grid/2));
//     }
//     number = number + 1;
// }

// // Attempt 2:

// let size = 8;
// let chessboard = '';
// for (let x = 1; x <= size; x = x + 1) {
//     if (x % 2 == 0) {
//         for (let y = 1; y <= size; y = y + 1) {
//             if (y % 2 == 0) {
//                 chessboard = chessboard + ' ';
//             } else {
//                 chessboard = chessboard + '#';
//             }
//         }
//     } else {
//         for (let y = 1; y <= size; y = y + 1) {
//             if (y % 2 == 0) {
//                 chessboard = chessboard + '#';
//             } else {
//                 chessboard = chessboard + ' ';
//             }
//         }
//     }
//     chessboard = chessboard + '\n';
// }
// console.log(chessboard)

// // Attempt 3:

// let size = 8;
// let chessboard = '';
// for (let x = 1; x <= size; x = x + 1) {
//     for (let y = 1; y <= size; y = y + 1) {
//         if ((x + y) % 2 == 0) {
//             chessboard = chessboard + ' ';
//         } else {
//             chessboard = chessboard + '#';
//         }
//     }
//     chessboard = chessboard + '\n';
// }
// console.log(chessboard)

// // 3-1. Minimum

// const min = function(a, b){
//     return (Math.min(a, b));
// }

// console.log(min(0, 10));
// console.log(min(0, -10));

// // 3-2. Recursion

// const isEven = function(a) {
//     a = Math.abs(a) // this solves the negative number issue

//     console.log(arguments[0])
//     if (a == 0) {
//         return true;
//     } else if (a == 1) {
//         return false;
//     } else {
//         return isEven(a - 2);
//     }
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// // 3-3. Bean Counting

// const countBs = function(text) {
//     let counter = 0

//     for (let x of text) {
//         if (x == 'B') {
//             counter++
//         }
//     }

//     return counter
// }

// const countChar = function(string, letter) {
//     let counter = 0

//     for (let x of string) {
//         if (x == letter) {
//             counter++
//         }
//     }

//     return counter
// }

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

// 4-1. The sum of a range

function range(start, end, step) {
  let array = []; // start with an empty array
  let counter = step || 1;

  if (counter < 0) {
    for (let x = start; x >= end; x += counter) {
      let currentNumber = x;
      array.push(currentNumber);
    }
  } else {
    for (let x = start; x <= end; x += counter) {
      let currentNumber = x;
      array.push(currentNumber);
    }
  }

  return array;
}

function sum(array) {
  let total = 0;

  for (let x = 0; x < array.length; x++) {
    let currentNumber = array[x];
    total += currentNumber;
  }

  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// // 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// // 4-2. Reversing an array
// // Cannot use the standard .reverse method

// function reverseArray(originalArray) {
//     let newArray = []

//     for ( let x = originalArray.length - 1; x >= 0; x-- ) {
//         let endElement = originalArray[x];
//         newArray.push(endElement);
//     }

//     return newArray
// }

// function reverseArrayInPlace(originalArray) {
//     let halfLength = Math.floor(originalArray.length/2)

//     for ( let x = 0; x <= halfLength; x++ ) {
//         let firstNumber = originalArray[x];
//         let lastNumber = originalArray[originalArray.length - 1 - x]
//         originalArray[x] = lastNumber
//         originalArray[originalArray.length - 1 - x] = firstNumber
//     }

//     return originalArray;
// }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// // 4-3. A List

// function arrayToList(array){
//     let list = null;

//     for ( let x = array.length - 1; x >= 0; x-- ) {
//         list = { value: array[x], rest: list };
//     }

//     return list;
// }

// function listToArray(list){
//     let array = [];

//     for (let x = list; x; x = x.rest) { // x = node in an object list
//         array.push(x.value);
//     }

//     return array
// }

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// // console.log(prepend(10, prepend(20, null)));
// // // → {value: 10, rest: {value: 20, rest: null}}
// // console.log(nth(arrayToList([10, 20, 30]), 1));
// // // → 20

// // 4-4. Deep Comparison

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
