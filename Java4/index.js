// 1
const a = ["Ensar", 18, "student", true, false];
console.log(a)

// 2
let myArray = ["bmw", "mercedes", "audi", "vw"]
myArray[1] = "skoda"
console.log(myArray)

// 3
let mixedNumbers = ["IV", 5, "six"]
mixedNumbers.unshift("I", 2, "three")
mixedNumbers.push("VII", "VIII", 9,)
console.log(mixedNumbers)

// 4
let arr = [1, 2, 3, 4, 5,];
arr.pop()
arr.shift()
console.log(arr)

// 5
let userActivity = {
    id: 23841904290,
    date: "January 1, 2017",

    data: {
        totalUsers: 51,
        online: 42,
    },
};
userActivity.data.online = 45,

console.log(userActivity)
