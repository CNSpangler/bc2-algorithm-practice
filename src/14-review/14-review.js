/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

// export const toTitleCase = (arr) => {
//     arr.map(word => toTitleCase(word));
// };

// export const toTitleCase = (arr) => {
//     arr.map(item => item.toUpperCase);
// };

// export const toTitleCase = (arr) => {
//     arr.map(item => {
//       console.log(item.toUpperCase);
//         return item.toUpperCase;
//     });
// };

// export const toTitleCase = (arr) => {
//     return arr.map(item => {
//         item.charAt(0).toUpperCase();
//     });
// };

// export const toTitleCase = (arr) => {
//     arr.map(item => {
//         const firstLetter = item.charAt(0).toUpperCase();
//         console.log(firstLetter);
//     });
// };

// export const toTitleCase = (arr) => {
//     const result = arr.map(string => {
//         string.replace(/^./, string[0].toUpperCase());
//     });
//     console.log(result);
//     return result;
// };

export const toTitleCase = (arr) => {
    return arr.map(item => {
        return item.replace(item[0], item[0].toUpperCase());
    });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

export const biggerThanLuke = (arr) => {
// handle behavior if it receives empty array
    if(arr.length === 0) {
        return '';
    } else {
        const luke = arr.find(item => item.name.includes('Luke'));
        const lukeMass = Number(luke.mass);
    
        return arr
            .filter(char => Number(char.mass) > lukeMass)
            .map(bigChar => bigChar.name)
            .join(' - ');
    }

    // const result = [];
    // arr.forEach(char => {
    //     if(char.mass > 77) {
    //         result.push(char.name + ` - `);
    //     }
    // });
    // return result.toString();
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
    {name: 'Sweatshirt', price: 45},
    {name: 'Bookmark', price: 2.50},
    {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

export const sortBy = (property, arr) => {
    // console.log(arr[0][property]);
    // // typeof(arr[0][property]) === String
    //     // ? arr.sort((a, b) => a[property] - b[property])
    // arr.map(item => console.log(item[property]));
    // arr.sort((a, b) => a[property] - b[property]);

    // function compare(a, b) {
    //     if(a[property] < b[property]) {
    //         return -1;
    //     }
    //     if(a[property] > b[property]) {
    //         return 1;
    //     }
    //     return 0;
    // }

    // return arr.sort(function compare(a, b) {
    //     return a[property] - b[property];
    // // });

    // arr.sort((a, b) => (a[property] > b[property]) 
    //     ? 1 
    //     : (a[property] === b[property]) 
    //         ? 0 
    //         : -1
    // );

    return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */

export const isSecure = (url) => { 
    return url.match(/^https:\/\//) !== null ? true : false;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */

export const detectTicTacToeWin = (board) => {
  // Solution code here...
};
