// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE: Create a function called greaterThan: which will return an array [].
// greaterThan function will have the parameters of the array fibLength1 that takes in a number numx > 2 and returns those numbers in a NEW array
//input : fiblength1, fiblength 2
//output // Expected output: [1, 1, 2, 3, 5, 8], [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]




// const greaterThan=(length) =>{
//   let array = [1,1] 
//   for (let i = 2; i < length;i++)
//   array.push(array[i-1] + array[i-2])
//  return (array)
// }

// describe("greaterThan", () => {
//   const fibLength1= 6
//   const fibLength2 = 10
//   it("returns numbers that are greater than 2", () => {})
//   expect(greaterThan(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//   expect(greaterThan(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// })

// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
//PSEDUOCODE:Create a function called sortWeek, This function will take in the values from studyMinutesWeek1. 
// This function will take the values and put in array and use .sort 


// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
const leastGreatest = (object) => {
  let newArray =  Object.values(object)
  return newArray.sort((a,b) => (a - b))
}

// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("leastGreatest", () => {
  const fibLength1= 6
  const fibLength2 = 10
  it("returns numbers in array least to greatest", () => {})
  expect(leastGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(leastGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//PSEUDOCODE: Create new function called accumSum that will add the previous number to accumulate
//start using index 0 and going through to the end by using .length
//input accountTransactions1,2,3
//output  [100, 83, 60, 51], [250, 161, 261, 165], []

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
const acuumSum = (length) => {
  let array = [0, 1]
  for (let i = 0; i < length;i++)
  array.push(array[i-1] + array[i-2])
  return array()
}


describe("acuumSum", () => {
  const accountTransactions1= 6
  const accountTransactions2 = 10
  const accountTransactions3 = 10
  it("returns array of accumulating sum", () => {})
  expect(acuumSum(studyMinutesWeek1)).toEqual([100, 83, 60, 51])
  expect(acuumSum(studyMinutesWeek2)).toEqual([250, 161, 261, 165])
  expect(acuumSum(studyMinutesWeek2)).toEqual([])
})

//ERROR tried got the first two expected values but for the last array tried to figure it out. I used the logic from question 1
//ERROR DISPLAYED BELOW
// Array [
//   -   100,
//   -   83,
//   -   60,
//   -   51,
//   +   Array [
//   +     0,
//   +     1,
//   +   ],
//     ]

//     115 |   const accountTransactions3 = 10
//     116 |   it("returns array of accumulating sum", () => {})
//   > 117 |   expect(acuumSum(studyMinutesWeek1)).toEqual([100, 83, 60, 51])
//         |                                       ^
//     118 |   expect(acuumSum(studyMinutesWeek2)).toEqual([250, 161, 261, 165])
//     119 |   expect(acuumSum(studyMinutesWeek2)).toEqual([])
//     120 | })

