// Preliminaries!!!!!!
const printNumber = e => {
    for (let i = 0; i <= 9; i++) {
        console.log(i);
    }
}

printNumber(9);

const printNumberBackwards = e => {
    for (let i = e; i >= 0; i--) {
        console.log(i);
    }
}

printNumberBackwards(9);

let fruit = ["banana", "orange", "apple", "kiwi"];

const printArray = e => {
    for (let i = 0; i < e.length; i++) {
        console.log(fruit[i]);
    }
}

printArray(fruit);

// Going for Bronze!!!!!
const zeroToNine = [];

const pushToArray = e => {
    for (let i = 0; i <= e; i++) {
        zeroToNine.push(i);
    }
}

pushToArray(9);
console.log(zeroToNine);

const printEven = e => {
    for (let i = 0; i <= e; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEven(100);

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let newFruit = [];

const pushFruit = e => {
    for (let i = 0; i < fruits.length; i = i + 2) {
        newFruit.push(e[i])
    }
}

pushFruit(fruits);
console.log(newFruit);

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

const printNames = e => {
    for (let i = 0; i < e.length; i++) {
        console.log(e[i].name);
    }

}

printNames(peopleArray);

namesArray = [];
occupationsArray = [];

const pushJobsAndNames = e => {
    for (let i = 0; i < e.length; i++) {
        namesArray.push(e[i].name);
        occupationsArray.push(e[i].occupation);
    }
}

pushJobsAndNames(peopleArray);
console.log(namesArray);
console.log(occupationsArray);

namesArray2 = [];
occupationsArray2 = [];

const pushJobsAndNames2 = e => {
    for (let i = 0; i < e.length; i = i + 2) {
        namesArray2.push(e[i].name);
        occupationsArray2.push(e[i].occupation);
    }
}

pushJobsAndNames2(peopleArray);
console.log(namesArray2);
console.log(occupationsArray2);

// Going for Gold!!!!!!
const nestedArray = [];
const nestedArray2 = [];
const nestedArray3 = [];
const arrayOfXes = [];

const makeNestedArray = (e, Array) => {
    for (let i = 0; i < e; i++) {
        const arrayForNesting = []
        for (let j = 0; j < e; j++) {
            arrayForNesting.push(0)
        }
        Array.push(arrayForNesting);
    }
}

makeNestedArray(3, nestedArray);
console.log(nestedArray);
      
const makeNestedArray2 = (e, Array) => {
    for (let i = 0; i < e; i++) {
        const arrayForNesting2 = []
        for (let j = 0; j < e; j++) {
            arrayForNesting2.push(i)
        }
        Array.push(arrayForNesting2);
    }
}

makeNestedArray2(3, nestedArray2);
console.log(nestedArray2)

const makeNestedArray3 = (e, Array) => {
    for (let i = 0; i < e; i++) {
        const arrayForNesting3 = []
        for (let j = 0; j < e; j++) {
            arrayForNesting3.push(j)
        }
        Array.push(arrayForNesting3);
    }
}

makeNestedArray3(3, nestedArray3);
console.log(nestedArray3);

makeNestedArray3(3, arrayOfXes);

const makeNestedArrayAllX = (e, Array) => {
    for (let i = 0; i < e; i++) {
        for (let j = 0; j < e; j++) {
            Array[i][j] = "x";
        }
    }
}

makeNestedArrayAllX(3, arrayOfXes);
console.log(arrayOfXes);
