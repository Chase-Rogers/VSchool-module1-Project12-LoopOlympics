// Preliminaries!!!!!!
const printNumber = num => {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}
console.log("Write a for loop that prints to the console the numbers 0 through 9.")
printNumber(9);
console.log("\n");

const printNumberBackwards = num => {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
console.log("Write a for loop that prints to the console 9 through 0.")
printNumberBackwards(9);
console.log("\n");

const fruit = ["banana", "orange", "apple", "kiwi"];

const printArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.log('Write a for loop that prints these fruits to the console. var fruit = ["banana", "orange", "apple", "kiwi"]')
printArray(fruit);
console.log("\n");

// Going for Bronze!!!!!
const pushToArray = (num, arr) => {
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }
    console.log(arr)
}
console.log("Write a for loop that will push the numbers 0 through 9 to an array.")
pushToArray(9, []);
console.log("\n");

const printEven = num => {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log("Write a for loop that prints to the console only even numbers 0 through 100.")
printEven(100);
console.log("\n");

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

const pushFruit = (arr, newArray) => {
    for (let i = 0; i < arr.length; i += 2) {
        newArray.push(arr[i])
    }
    console.log(newArray);
}
console.log('Write a for loop that will push every other fruit to an array. var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]')
pushFruit(fruits, []);
console.log("\n");

// Going for Silver!!!!!
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

const printNames = arrayOfObjects => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(arrayOfObjects[i].name);
    }
}
console.log("Write a loop that will print out all the names of the people of the people array.")
printNames(peopleArray);
console.log("\n");

const pushJobsAndNames = (arr, arrayOfNames, arrayOfJobs) => {
    for (let i = 0; i < arr.length; i++) {
        arrayOfNames.push(arr[i].name);
        arrayOfJobs.push(arr[i].occupation);
    }
    console.log(arrayOfNames);
    console.log(arrayOfJobs);
}
console.log("Write a loop that pushes the names into a names array, and the occupations into an occupations array.")
pushJobsAndNames(peopleArray, [], []);
console.log("\n");

const pushJobsAndNames2 = (arr, arrayOfNames, arrayOfJobs) => {
    for (let i = 0; i < arr.length; i++) {
        if  (i%2 === 0) {
            arrayOfNames.push(arr[i].name);
        } else {
            arrayOfJobs.push(arr[i].occupation);
        }   
    }
    console.log(arrayOfNames);
    console.log(arrayOfJobs);
}
console.log('Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".')
pushJobsAndNames2(peopleArray, [], []);
console.log("\n");

// Going for Gold!!!!!!
const makeNestedArray1 = (numOfElements, numOfArrays, matrix) => {
    for (let i = 0; i < numOfArrays; i++) {
        const arrayForNesting = [];
        for (let j = 0; j < numOfElements; j++) {
            arrayForNesting.push(0);
        }
        matrix.push(arrayForNesting);
    }
    console.log(matrix);
    return matrix;
}
console.log('Create an array that mimics a grid like the following using nested for loops:[[0, 0, 0], [0, 0, 0], [0, 0, 0]]')
makeNestedArray1(3, 3, []);
console.log("\n");

const makeNestedArray2 = (numOfElements, numOfArrays, matrix) => {
    for (let i = 0; i < numOfArrays; i++) {
        const arrayForNesting = [];
        for (let j = 0; j < numOfElements; j++) {
            arrayForNesting.push(i);
        }
        matrix.push(arrayForNesting);
    }
    console.log(matrix);
    return matrix;
}
console.log('Create an array that mimics a grid like the following using nested for loops:[[0, 0, 0], [1, 1, 1], [2, 2, 2]]')
makeNestedArray2(3, 3, []);
console.log("\n");

const makeNestedArray3 = (numOfElements, numOfArrays, matrix) => {
    for (let i = 0; i < numOfArrays; i++) {
        const arrayForNesting = [];
        for (let j = 0; j < numOfElements; j++) {
            arrayForNesting.push(j);
        }
        matrix.push(arrayForNesting);
    }
    console.log(matrix);
    return matrix;
}
console.log('Create an array that mimics a grid like the following using nested for loops:[[0, 1, 2], [0, 1, 2], [0, 1, 2]]')
makeNestedArray3(3, 3, []);
console.log("\n");

const makeNestedArrayAllX = (num, arr) => {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            arr[i][j] = "x";
        }
    }
}
console.log('Given a grid like the previous ones, write a nested for loop that would change every number to an x.')
makeNestedArrayAllX(3, makeNestedArray1(3, 3, []));
makeNestedArrayAllX(3, makeNestedArray2(3, 3, []));
makeNestedArrayAllX(3, makeNestedArray3(3, 3, []));
