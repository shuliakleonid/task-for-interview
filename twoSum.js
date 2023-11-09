var twoSum = function (nums, target) {
    let leftpointer = 0
    let rightpointer = 1
    const result = []
    let sum = nums[leftpointer] + nums[rightpointer]
    while (leftpointer < nums.length && rightpointer < nums.length) {

        if (sum > target) {
            sum -= nums[leftpointer]
            leftpointer++
        }

        if (sum < target) {
            rightpointer++
           sum += nums[rightpointer]
        }

        if (sum === target) {
            result.push(leftpointer, rightpointer)
            break
        }

    }
    return result
};
console.log(twoSum([3,2,4], 6))

