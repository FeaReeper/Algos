// Likes: Depending on how many likes, display message

// function likes(names) {
//     // TODO
//     if (names.length == 0) return "no one likes this"
//     else if (names.length == 1) return `${names[0]} likes this`
//     else if (names.length == 2) return `${names[0]} and ${names[1]} like this`
//     else if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// }

// console.log(likes([]))




// Masked String: given an integer (like a credit card), make all but the last 4 digits #

// function maskify(cc) {
//     let resultString = ''
//     const stringArray = cc.split('')
//     if (stringArray.length > 4) {
//         for (var i = 0; i < stringArray.length - 4; i++) {
//             stringArray[i] = '#'
//         }
//     } else {
//         stringArray[i] =stringArray[i]
//     }
//     resultString = stringArray.join('')
//     return resultString
// }

// console.log(maskify('12345678940'))

// Version Two: 2 lines of code verses 11 lines of code
// const maskifyVTwo = (cc) => {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
// }
// console.log(maskifyVTwo("123456789"))




// Descending order: take given integer and put in descending order

// function highestPossibleNumber(n) {
//     // We turn the integer of n into a string then split the string into an array of each number called digits
//     const digits = n.toString().split('');
//     // We sort the digits: sort takes 2 arguments subtracting b - a to check the return is negative or positive.
//     // Then the comparison function knows to keep comparing to the left if b - a returns positive and stop if returns negative.
//     digits.sort((a, b) => b - a);
//     // Here we join the digits and parseInt to turn them back to an integer
//     const highestNumber = parseInt(digits.join(''));
//     // Lastly return the results
//     return highestNumber;
// }

// console.log(highestPossibleNumber(21435))




// Spin Words: Words that have 5 or more char, reverse the word

// const spinWords = (string) => {
//     let array = string.split(' ')
//     console.log(array)
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].length > 4) {
//             let modifiedWord = array[i].split('').reverse().join('')
//             array[i] = modifiedWord
//             console.log(modifiedWord)
//         }
//     }
//     return array.join(' ')
// }

// console.log(spinWords("Hey fellow warriors"))


// Spin Words: Words that have 5 or more char, reverse the word

// const spinWordsV2 = (phrase) => {
//     let phraseArray = phrase.split(' ')
//     for (var i = 0; i < phraseArray.length; i++) {
//         if (phraseArray[i].length > 4) {
//             let modifiedWord = phraseArray[i].split('').reverse().join('')
//             phraseArray[i] = modifiedWord
//         }
//     }
//     return phraseArray.join(' ')
// }
// console.log(spinWordsV2('The chicken fights with honor'))




// Pete the baker, 5 kyu: determine how many cakes you can bake with the given recipe and available ingredients
// const cakes = (recipe, inventory) => {
//     let cakes = []
//     for (neededIngredient in recipe) {
//         for (haveIngredient in inventory) {
//             if (neededIngredient == haveIngredient) {
//                 cakes.push(Math.floor(inventory[haveIngredient] / recipe[neededIngredient]))
//             }
//         }
//     }
//     const smallest = (arr) => Math.min(...arr)
//     return smallest(cakes)
// }
// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//         return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
// }
// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))




// Key, Values: Print key and values

// const objFunction = (object) => {
//     const entries = Object.entries(object);
//     for (const [key, value] of entries) {
//         console.log(`Key: ${key}, Value: ${value}`);
//     }
// }
// console.log(objFunction({ a: 1, b: 2, c: 3 }))




// Does my number look big in this? 6 kyu: Narcissistic Number or Armstrong Number: return true if number is narcissistic
// Ex. 153: 3 digit number, so add each digit to the 3rd power: 1^3 + 5^3 + 3^3 = 153 return true

// const narcissistic = (value) => {
//     let array = value.toString().split('')
//     let total = 0
//     for (num of array) {
//         console.log(num)
//         total = total + (num**array.length)
//     }
//     if (total == value) return true
//     return false
// }
// console.log(narcissistic(155))


// function narcissistic(number) {
//     var arrayOfDigitals = number.toString().split(''),
//         numberLength = arrayOfDigitals.length,
//         sum = 0;

//     arrayOfDigitals.forEach(function(digit) {
//         sum += Math.pow(digit, numberLength);
//     });

//     return sum === number;
// }




// Counting Duplicates 6 kyu: Count how many characters are repeated, don't count single characters. 
// Ex. input: a,b,c,d,e output: 0; input: a,a,b,b,c,d output: 2 (because a and b repeat)

// const duplicates = (string) => {
    // let array = string.split('')
    // let count = 0
    // for (var i = 0; i < array.length; i++) {
    //     for (var j = i+1; j < array.length; j++) {
    //         if (array[i] == array[j]) {
    //             count++
    //         }
    //     }
    // }
    // return count
// }
// console.log(duplicates('abcde'))
// console.log(duplicates('aabbcde'))

// const duplicates = (string) => {
//     let lowerCase = string.toLowerCase()
//     let count = 0;
//     const charCounts = {};
//     for (const char of lowerCase) {
//         if (!charCounts[char]) {
//         charCounts[char] = 0;
//         }
//         charCounts[char]++;
//         if (charCounts[char] > 1) {
//             count++;
//         }
//     }
//     return count;
// };

//   console.log(duplicates('abcde')); // Output: 0
//   console.log(duplicates('aaBbcde')); // Output: 2




// Take a Ten Minute Walk, 6 kyu: Given an array of n, s, e, w. Return true if 10 length and walk returns you to starting point. 

// const isValidWalk = (walk) => {
//     if (walk.length != 10) return false
//     const charCounts = {}
//     for (char of walk) {
//         if (!charCounts[char]) {
//             charCounts[char] = 0
//         }
//         charCounts[char]++
//     }
//     if (charCounts['n'] == charCounts['s'] && charCounts['e'] == charCounts['w']) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))




// Unique In Order 6 kyu: Given a sequence return a list of items without consecutive repeating ones

// const uniqueInOrder = (iterable) => {
//     let correctedArray = []
//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i+1] != iterable[i]) {
//             correctedArray.push(iterable[i])
//         }
//     }
//     return correctedArray
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')) // Should return ['A', 'B', 'C', 'D', 'A', 'B']




// Roman Numerals Decoder 6 kyu: Return the numerical value of a roman numeral input
// const solution = (roman) => {
    // const romanValues = {
    //     "I": 1,
    //     "V": 5,
    //     "X": 10,
    //     "L": 50,
    //     "C": 100,
    //     "D": 500,
    //     "M": 1000
    // }
    // let count = 0
    // let prevValue = 0
    // for (char of roman) {
    //     const currentValue = romanValues[char]
    //     if (currentValue > prevValue) {
    //         count -= prevValue
    //     } else {
    //         count += prevValue
    //     }
    //     prevValue = currentValue
    // }
    // count += prevValue
    // return count
// }
// console.log(solution("IV"))




// Create a Phone Number, 6 kyu: Function that turns 10 integers into a phone number format.

// const createPhoneNumber = (numbers) => {
//     const areaCode = numbers.slice(0, 3).join('')
//     const prefix = numbers.slice(3, 6).join('')
//     const suffix = numbers.slice(6).join('')
//     return `(${areaCode}) ${prefix}-${suffix}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




// Human Readable Time, 5 kyu: Function that takes seconds input and formats to hours:minutes:seconds

// const humanReadable = (seconds) => {
//     const hours = Math.floor(seconds / 3600)
//     const minutes = Math.floor((seconds % 3600) / 60)
//     const modifiedSeconds = seconds % 60
//     const formattedHours = hours.toString().padStart(2, '0')
//     const formattedMinutes = minutes.toString().padStart(2, '0')
//     const formattedSeconds = modifiedSeconds.toString().padStart(2, '0')
//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
// }
// console.log(humanReadable(45296))



