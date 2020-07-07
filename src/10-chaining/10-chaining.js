/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
export const count = (target, input) => {
    return input
        .flat()
        .filter(item => item === target)
        .length;

  // export const count = (target, input) => {
//     const masterArr = input.reduce(function(acc, curr) {
//         acc.push(curr.values());
//     }, []);
//     return masterArr;
// };  
  
  // const arr = input.flat();

    // const result = arr.reduce(function(acc, curr) {
    //     if(curr === target) {
    //         acc++;  
    //     }
    //     return acc;
    // }, 0);
    // return result;
};


// export const count = (target, input) => {
//     let result = input.reduce(function(acc, curr) {
//         if(curr.includes(target)) {
//             acc++;
//         }
//     }, 0);
//     return result;
// };

// export const count = (target, input) => {
//     let content = input.map(arr => {
//         return arr.values();
//     });
// };

// export const count = (target, input) => {
//     const result = input.map(function(y) {
//         return y.reduce(function(x) {
//           target.push(x);
//         }, []);
//     });
//     return result;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
export const totalSum = (input) => {
    return input
        .flat()
        .reduce((acc, curr) => {
            acc = acc + curr;
            return acc;
        }, 0);
};

// export const totalSum = (input) => {
//     const masterArr = input.reduce(function(a, b){
//         return a.concat(b);
//     }, []);
//     console.log(masterArr);
// };  

// export const totalSum = (input) => {
//     let masterArr = input.map(arr => {
//         masterArr.push(arr.values());
//     });
//     console.log(masterArr);
//     return masterArr;
// };

// export const totalSum = (input) => {
//     input.reduce(function(acc, curr) {
//         acc.push(curr.values());
//         console.log(acc);
//     }, []);
// };

// export const totalSum = (input) => {
//     const result = input.map(function(y) {
//         return y.reduce(function(a, b) {
//             return a + b;
//         });
//     });
//     // const total = result.map((a, b) => {
//     //     return a + b;
//     // });

//     const total = result.reduce(function(a, b) {
//         return a + b;
//     }, 0);
//     return total;
// };



/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

export const divisibleByFiveTwoToThePower = (input) => {
    return input.map(arr => {
        return arr
            .filter(item => !isNaN(item) && item === Number(item) && item % 5 === 0)
            .map(item => Math.pow(2, item));
    });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findTallerThan that, given the Star Wars data, below,
returns the names of the characters who are taller than the specified height

The names should be combined into a single string with each character name separated by "and".

For example, "Luke Skywalker and C-3PO".
------------------------------------------------------------------------------------------------ */

export const findTallerThan = (minHeight, data) => {
    // iterate through data
    // check if each character is tall enough
    // return array containing only tall characters
    // join the array with ('and')

    return data
        .filter(character => character.height >= minHeight)
        .map(character => character.name)
        .join(' and ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortestName that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

export const findShortestName = (data) => {
  // Solution code here...
};
