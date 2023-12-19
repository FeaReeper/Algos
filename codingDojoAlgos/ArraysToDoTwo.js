// Problem 1: Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing 
// elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

const reverse = (array) => {
    // Case 1: Array is empty
    if (array.length == 0) return "Array is Empty"
    // Case 2: Array has odd or even length of values
    // Initialize a left point/node and a right point/node
    let left = 0
    let right = array.length - 1
    // Use a while loop to swap the values at each left and right while left is less than right
    while(left < right) {
        [array[left], array[right]] = [array[right], array[left]]
        // Increase left by one and decrease right by 1 each time we loop through
        left++
        right--
    }
    // Return the changed array
    return array
}
// console.log(reverse([1,2,3,4]))

// Problem 1: This time with built in methods

const reverseTwo = (array2) => {
    // Case 1: Array is empty
    if (array2.length == 0) return "Array is empty"
    // Case 2: Array has odd or even length of values
    // Return array reversed using reverse() method
    return array2.reverse()
}
// console.log(reverseTwo([1,2,3,4,5]))



// Problem 2: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' 
// any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2].

const rotateArrOne = (array, shiftBy) => {
    // For loop that runs as many times as the numbers need to shift
    for (let i = 0; i < shiftBy; i++) {
        // Unshift adds the number that we pop from the end of the array to the front
        array.unshift(array.pop())
    }
    return array
}
// console.log(rotateArrOne([1,2,3,4,5,6], 1))


// Problem 3: Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array 
// you are given, with values in original order. No built-in array functions.

const filterRange = (array, min, max) => {
    // We initiate a index that will equal the new array length
    let adjustedArrayLength = 0
    // For loop that iterates over the array
    for (let i = 0; i < array.length; i++) {
        // Condition to check if the number is in range
        if (array[i] >= min && array[i] <= max) {
            // Set each number that meets the conditions to the array starting at index 0
            array[adjustedArrayLength] = array[i]
            // Increment the index by 1 for each next number
            adjustedArrayLength++
        }
    }
    // Change the array length to the length of the numbers that met the condition. This eliminates the extra numbers.
    array.length = adjustedArrayLength
    return array
}
// console.log(filterRange([2,5,9,23,12,32,18,6], 8, 22))



// Problem 4: Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array 
// containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const concat = (arr1, arr2) => {
    // Establish a new blank array
    let newArr = []
    // 
    for (val of arr1) {
        newArr.push(val)
    }
    for (val2 of arr2) {
        newArr.push(val2)
    }
    return newArr
}
// console.log(concat([1,2], ['a','b']))

const concat2 = (arr1, arr2) => {
    return arr1.concat(arr2)
}
console.log(concat2([1,2], ['a', 'b']))