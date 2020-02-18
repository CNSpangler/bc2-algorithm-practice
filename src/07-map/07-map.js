/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

export const forLoopTwoToThe = (arr) => {
    let newArr = [];  
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const newNum = Math.pow(2, num);
        newArr.push(newNum);
    }
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

export const forEachTwoToThe = (arr) => {
    let newArr = [];
    arr.forEach((item) => {
        const newNum = Math.pow(2, item);
        newArr.push(newNum);
    });
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1 and your forEachTwoToThe function from challenge 2, but uses map instead of a for loop or forEach.
------------------------------------------------------------------------------------------------ */

export const mapTwoToThe = (arr) => {
    const newArr = [];  
    arr.map(num => {
        const newNum = Math.pow(2, num);
        newArr.push(newNum);
    });
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */

export const charCode = (arr) => {
    const newArr = [];
    arr.map(char => {
        const item = char.charCodeAt();
        newArr.push(item);
    });
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

export const evenOdd = (arr) => {
    const newArr = [];
    arr.map(num => {
        if(isNaN(num)) {
            newArr.push('N/A');
        } else if(num % 2 === 0) {
            newArr.push('even');
        } else {
            newArr.push('odd');
        } 
    });
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

// snorlaxAbilities.abilities[0].ability.name

export const extractAbilities = (arr) => {
    const newArr = [];
    arr.map((name, index) => {
        const abilityName = name[index].ability.name;
        newArr.push(abilityName);
    });
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */


export const extractStats = (arr) => {
    let item;
    arr.map(item, index => {
        return {
            name: item[index].stat.name,
            total: item[index].effort + item[index].baseStat,
        };
    });
};