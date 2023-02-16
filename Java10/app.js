const mapNumbers = [1,2,3,4,5]

const NewNumbers = mapNumbers.map((number) => {
    return number * 2
})
console.log(NewNumbers)

// ---------------------------------------------------------------------------

const ReduceNumbers = [1,2,3,4,5]

const NewReduce = ReduceNumbers.reduce((total, ReduceNumbers) => {
   return total + ReduceNumbers
})

console.log(NewReduce)

// ---------------------------------------------------------------------------

const FilterNumbers = [1,2,3,4,5]
const parni = FilterNumbers.filter((number) => {
    return number % 2 === 0
})
console.log(parni)

// ---------------------------------------------------------------------------

const people = [
    {name: "bob", age:25},
    {name: "Alice", age:35},
    {name: "Charlie", age:30},
]

// const peopleSort = people.sort((a,b) => {
//     if(a.age > b.age){
//         return 1
//     }else{
//         return -1
//     }
// })
// console.log(peopleSort)

const peopleSort = people.sort((a,b) => {
    return a.age - b.age
})
console.log(peopleSort)




