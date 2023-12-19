// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    let n = nums.length
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                return[nums[i], nums[j]]
            }
        }
    }
}
console.log(twoSum([1,3,4,5,6,8,10], 15))