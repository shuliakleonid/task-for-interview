/*
* */
const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    const result = [sortedIntervals[0]]

    for (let i = 0; i < sortedIntervals.length; i++) {
        const recent = result[result.length - 1]

        if (recent[1] >= sortedIntervals[i][0]) {
            recent[1] = Math.max(recent[1], sortedIntervals[i][1])
        } else {
            result.push(sortedIntervals[i])
        }
    }
    return result;
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
