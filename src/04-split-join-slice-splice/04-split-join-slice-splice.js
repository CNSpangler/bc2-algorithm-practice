/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.

As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.

Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

export const howMuchPencil = (str) => {
    let result = [];
    
    for(let i = 0; i <= str.length; i++) {
        const newString = str.slice(i);
        result.push(newString);
    }
    
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.

For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

export const wordsToCharList = (str) => {
    return str.split('');

    // let result;

    // for(let i = 0; i <= str.length; i++) {
    //     return str.split('');
    // }
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The .indexOf() method may also be helpful.

Do not use split for this function.
------------------------------------------------------------------------------------------------ */
const recipe = {
    name: 'How to make a Gruffalo Crumble',
    ingredients: [
        '1 medium-sized Gruffalo',
        '8 pounds oats',
        '2 pounds brown sugar',
        '4 pounds flour',
        '2 gallons pure maple syrup',
        '16 cups chopped nuts',
        '1 pound baking soda',
        '1 pound baking powder',
        '1 pound cinnamon',
        '6 gallons melted butter',
        '2 gallons fresh water',
    ],
    steps: [
        'Pre-heat a large oven to 375',
        'De-prickle the gruffalo',
        'Sprinkle with cinnamon, sugar, flour, and nuts',
        'Mix until evenly distributed',
        'Grease a 3-foot x 3-foot casserole dish',
        'Combine gruffalo compote with water to maintain moisture in the oven',
        'Fold together remaining ingredients to make the crisp',
        'Spread the crisp evenly over the gruffalo mixture',
        'Bake for 12-15 hours',
    ]
};

export const listFoods = (recipe) => {
    let noNumArr = [];
    const result = [];
    recipe.ingredients.map(item => {
        const target = item.indexOf(' ');
        const noNumItem = item.slice(target + 1);
        noNumArr.push(noNumItem);
    });

    noNumArr.map(item => {
        const target = item.indexOf(' ');
        const ingredient = item.slice(target + 1);
        result.push(ingredient);
    });
    return result;

    // let result = [];
    // result.push(
    //     recipe.ingredients[0].slice(15), recipe.ingredients[1].slice(9),
    //     recipe.ingredients[2].slice(9),
    //     recipe.ingredients[3].slice(9),
    //     recipe.ingredients[4].slice(10),
    //     recipe.ingredients[5].slice(8),
    //     recipe.ingredients[6].slice(8),
    //     recipe.ingredients[7].slice(8),
    //     recipe.ingredients[8].slice(8),
    //     recipe.ingredients[9].slice(10),
    //     recipe.ingredients[10].slice(10),
    // );
    // return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named splitFoods that uses split to produce the same output as Challenge 3.

You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

export const splitFoods = (recipe) => {
    const result = [];

    recipe.ingredients.map(item => {
        const splitItem = item.split(' ');
        const end = splitItem.length;
        const final = splitItem.slice(2, end).join(' ');
        result.push(final);
    });
    return result;

    // let result = [];

    // recipe.ingredients.forEach((ingredient) => {
    //     const splitArray = ingredient.split(' ');
    //     console.log('split array', splitArray);
    //     const slicedArray = splitArray.slice(2);
    //     console.log('sliced array', slicedArray);
        
    //     if(slicedArray.length > 1) {
    //         const joinedItem = slicedArray.join(' ');
    //         console.log('joined item', joinedItem);
    //         result.push(joinedItem);
    //     } else {
    //         result.push(slicedArray);
    //     }
    // });


    // console.log('result', result);

    // return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Use the same recipe from Challenge 3, above.

Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.

Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

export const stepActions = (recipe) => {
    return recipe.steps.map(item => item.split(' ')[0]);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
    const integers = [1, 2, 3, 4, 5, 6];
    removeEvenValues(integers);
    console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

export const removeEvenValues = (arr) => {
    // return arr.forEach(num => {
    //     if(num % 2 === 0) {
    //         console.log(arr.indexOf(num));
    //         arr.splice(arr.indexOf(num), 1);
    //     }
    // });

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr.splice(i, 1);
        }
    }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.

If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.

If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.

For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

export const removeLastCharacters = (str, numberOfCharacters) => {
    const arr = str.split('').reverse();
    arr.splice(0, numberOfCharacters);
    arr.reverse();
    return arr.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

export const totalSumCSV = (str) => {
    let total = 0;
    let arr = str.split(',');
    const nums = arr.map(num => Number(num));
    
    return nums.reduce((acc, curr) => {
        return acc + curr;
    });
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

export const removeVowels = (str) => {
    const arr = str.split('');
    arr.forEach(letter => {
        if(letter === 'a') {
            arr.splice(arr.indexOf(letter), 1);
        } else if(letter === 'e') {
            arr.splice(arr.indexOf(letter), 1);
        } else if(letter === 'i') {
            arr.splice(arr.indexOf(letter), 1);
        } else if(letter === 'o') {
            arr.splice(arr.indexOf(letter), 1);
        } else if(letter === 'u') {
            arr.splice(arr.indexOf(letter), 1);
        }
    });
    return arr.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

export const extractVowels = (str) => {
    let vowelHolder = [];
    const vowelArr = str.split('');
    vowelArr.forEach(letter => {
        if(letter === 'a') {
            vowelHolder.push(letter);
        } else if(letter === 'e') {
            vowelHolder.push(letter);
        } else if(letter === 'i') {
            vowelHolder.push(letter);
        } else if(letter === 'o') {
            vowelHolder.push(letter);
        } else if(letter === 'u') {
            vowelHolder.push(letter);
        } else return;
    });
    const vowels = vowelHolder.join('');
    
    const consArr = str.split('');
    consArr.forEach(letter => {
        if(letter === 'a') {
            consArr.splice(consArr.indexOf(letter), 1);
        } else if(letter === 'e') {
            consArr.splice(consArr.indexOf(letter), 1);
        } else if(letter === 'i') {
            consArr.splice(consArr.indexOf(letter), 1);
        } else if(letter === 'o') {
            consArr.splice(consArr.indexOf(letter), 1);
        } else if(letter === 'u') {
            consArr.splice(consArr.indexOf(letter), 1);
        }
    });
    const consonants = consArr.join('');

    return [consonants, vowels];
};
