//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array.
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != i+1){
      return i
    }
  }
  return -1
}

//Call function here with arguments
console.log(firstNonConsecutive([1, 2, 3, 5, 6, 7])) // Should log out 3
// values:1, 2, 3, 5, 6, 7
// index:0, 1, 2, 3, 4, 5


//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15]
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1]
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here
let numbers= (parameters) => {
  sum = 0;
  for(let i =0; i < parameters.length; i++){
    if(parameters[i] >= 1){
      sum += parameters[i]
    }
  }
  return sum
};

// Call function here with arguments
console.log(numbers([10, 12, -9, 3, -1, 0, 15]))
