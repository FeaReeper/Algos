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