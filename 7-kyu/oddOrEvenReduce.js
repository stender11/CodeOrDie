// ---Instructions:---
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

// ---Submitted Solution:---
function oddOrEven(array) {
    return array.reduce((cv, acc) => cv + acc, 0) % 2 === 0 ? "even" : "odd"
}

// ---Test cases:---
console.log(oddOrEven([0, -1, -5])) // 'even'
console.log(oddOrEven([0, -1, -3])) // 'even'
console.log(oddOrEven([-1023, 1, -2])) // 'even'
console.log(oddOrEven([0, 1, 2])) // 'odd'
console.log(oddOrEven([0, 1, 4])) // 'odd'
console.log(oddOrEven([1023, 1, 3])) // 'odd'
console.log(oddOrEven([])) // 'even'
