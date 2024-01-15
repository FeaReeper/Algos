// Problem 1: Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), 
// preserving non-negatives’ order. As always, do not use built-in array functions.
const removeNegatives = (array) => {
    // Create a new index for each number that is positive
    let newIndex = 0
    // For loop through all numbers in the array
    for (let i = 0; i < array.length; i++) {
        // Condition checks to see if each number is positive
        if (array[i] >= 0) {
            // Set the number that meets condition to the new index
            array[newIndex] = array[i]
            // Increment new index by 1 so the next number can be set
            newIndex++
        }
    }
    // Set the array length to the amount of numbers that met the condition to eliminate additional values
    array.length = newIndex
    return array
}
// console.log(removeNegatives([-2,3,4,-4,5,6,-3,7,-9]))


// Problem 2: Second-To-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
const secondToLast = (array) => {
    // Case Condition: if length is less than 2 we cant return the second to last value, so return null
    if (array.length < 2) return null
    // return the second to last value in the array
    return array[array.length - 2]
}
// console.log(secondToLast([42, true, 2, "Kate", 6]))


// Problem 3: Second Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
const secondLargest = (array) => {
    // Create a max and second for the largest and second largest number in array
    let max = array[0]
    let second = max
    // For loop through the array updating the second as the max and the max as the new highest if the condition is met
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            second = max
            max = array[i]
            // Else we update the second var in case the number is bigger than the current second but not bigger than the max
        } else {
            if (array[i] > second) {
                second = array[i]
            }
        }
    }
    return second
}
// console.log(secondLargest([2,5,3,6,1,8,23,4,13,52]))


// Problem 4: Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

const specificElement = (array, position) => {
    if (array.length < position) return null
    return array[array.length - position]
}
// console.log(specificElement([5,6,7,1,8,2,4,9,3], 9))



// Problem 5: Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, 
// where (N-1) elements are larger. Return null if needed.

const howLarge = (arr, n) => {
    arr.sort((a, b) => {
        return a - b
    })
    console.log(arr)
    return arr[arr.length - n]
}
// console.log(howLarge([5,12,7,4,29,8,1,43,76], 4))



// Problem 6: Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of 
// consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: 
// first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high 
// (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can 
// see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4].

const skyline = (arr) => {
    const stack = [];
    for (const height of arr) {
        if (height > 0) {
            if (stack.length === 0 || height > stack[stack.length - 1]) {
            stack.push(height);
            } else {
            while (stack.length > 0 && height > stack[stack.length - 1]) {
                stack.pop();
            }
            }
        }
    }
    return stack;}
console.log(skyline([-1, 1, 1, 7, 3, 9]))