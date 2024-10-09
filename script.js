// Reverse a string

const reverseString = function(str) {
    return str.split("").reverse().join();
}
// console.log(reverseString('christopher'));


// Count Character

const countCharacter = function(cha){
    return cha.length
}
// console.log(countCharacter('christopher'));

const capitalizeFirstLetter = function(sentence){
    let words = sentence.split(" ");
    let capitalizedWords = [];

    for (let word of words) {
        capitalizedWords.push(word[0].toUpperCase() + word.substr(1));
    }

    return capitalizedWords.join(" ");
}

// console.log(capitalizeFirstLetter("hi, chris"));

// ARRAY FUNCTIONS

//Find Maximum and Minimum value in an array of numbers

function findMax(arr){
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

function findMin(arr) {
    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}
// console.log(findMax([12, 15, 8, 7, 9])); 
// console.log(findMin([12, 15, 8, 7, 9])); 

// Sum Of All Elements In An Array

function calculateSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    return sum;
}

//console.log(calculateSum([3, 5, 7, 8, 15]));

//Filters Elements

function filterArray(arr, condition) {
    let filteredAway = [];

    for (let element of arr) {
        if (condition(element)) {
            filteredAway.push(element);
        }
    }

    return filteredAway;
}

const isOdd = num => num % 2 !== 0;

// console.log(filterArray([1, 2, 3, 4, 5, 6], isOdd));

// MATHEMATICAL FUNCTIONS

function factorial(n) {
    let result = 1;

    for (let i=1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// console.log(factorial(5));

// Create a function to check if a number is prime or not.

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(7));
// console.log(isPrime(10));

function fibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    if (n > 1) {
        console.log(b);
    }

    for (let i = 2; i < n; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

// fibonacci(10);

