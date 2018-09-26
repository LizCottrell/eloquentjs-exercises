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

var size = 8

for (let number = 0; number <= size; number = number +1) {

    var black = '#'
    var white = ' '
    var isEven = number % 2 == 0

    if (number == isEven) {
        checkerBoard = ((black + white).repeat(size))
    } else {
        checkerBoard = ((white + black).repeat(size))
    }

    console.log(checkerBoard);
}

