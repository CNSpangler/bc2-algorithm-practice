/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    return arr.reduce((acc, curr) => {
        acc++;
        return acc;
    }, 0);

    // const numElements = arr.reduce(function(accumulator, value, index) {
    //     accumulator++;
    //     return accumulator;
    // }, 0);
    // return numElements;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value is the number of characters having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */


export const eyeColorTally = (arr) => {
    return arr.reduce((acc, curr) => {
        const color = curr.eye_color;
        acc[color] ? acc[color]++ : acc[color] = 1;
        return acc;
    }, {});

    // const tally = arr.reduce(function(accumulator, char, index) {
    //     let count = 0;
    //     accumulator[char.eye_color] = count++;

    //     // if(char.eye_color === 'blue') {
    //     //     char.blue.accumulator++;
    //     // }
    //     return accumulator;
    // }, {});
    // return tally;
};

//

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an object with a key for each eye color and whose value an array of character names having that eye color:

            blue: ['Luke Skywalker'], 
            yellow: ['C-3PO', 'Darth Vader'], 
            red: ['R2-D2'], 
            brown: ['Leia Organa']
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
    return arr.reduce((acc, curr) => {
        const color = curr.eye_color;
        acc[color] ? acc[color].push(curr['name']) : acc[color] = [curr['name']];
        return acc;
    }, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */


export const countNumberOfChildren = (arr) => {
    return arr.reduce((acc, curr) => {
        if(curr.children) {
            return acc + curr.children.length;
        }
        return acc;
    }, 0);

    // const children = arr.reduce(function(accumulator, char, index) {
    //     let num = char.children.length; 
    //     return (accumulator + num);
    // }, 0);
    // return children;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
    let avg = 0;
    arr.reduce((acc, curr) => {
        acc['count']++;
        acc['sum'] = (acc['sum'] + curr);
        avg = (acc['sum'] / acc['count']);
        return acc;
        // return (acc['sum'] / acc['count']);
    }, { count: 0, sum: 0 });
    return avg;

    //in real world, would just use reduce to get sum of items in array, then divide by arr.length
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
};

export const countPrimeNumbers = (arr) => {
    return arr.reduce((acc, curr) => {
        if(isPrime(curr)) acc++;
        return acc;
    }, 0);












    // const primes = arr.reduce(function(accumulator, num, index) {
    //     if(isPrime(num) === true) {
    //         accumulator++;
    //         console.log(accumulator);
    //     }
    // }, 0);
    // return primes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
minimum and maximum effort level in the format:

Hint: The accumulator should begin as { min: 0, max: 0 }

------------------------------------------------------------------------------------------------ */

export const effortStats = (statName, arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

export const extractChildren = (arr) => {
  // Solution code here...
};
