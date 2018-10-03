// Eloquent JS Exercises


//   Chapter 2
/////////////////

// 2-1. Looping a triangle

// for (let number = 0; number <= 7; number = number + 1) {  

//     var hash = '#';
//     var hashTriangle = hash.repeat(number); // make '#' repeat the same amount as the value of number
//     console.log(hashTriangle);

// }


// 2-2. FizzBuzz

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


// 2-3. Chessboard

// Attempt 1:

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

// Attempt 2:

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

// Attempt 3:

let size = 8;
let chessboard = '';
for (let x = 1; x <= size; x = x + 1) {
    for (let y = 1; y <= size; y = y + 1) {
        if ((x + y) % 2 == 0) {
            chessboard = chessboard + ' ';
        } else {
            chessboard = chessboard + '#';
        }
    }
    chessboard = chessboard + '\n';
}
console.log(chessboard)

