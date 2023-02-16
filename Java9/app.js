const payment =[
    { ime: "Ensar", prezime: "Vragic", mesecnaPlata: 1000 },
    { ime: "Alem", prezime: "Sinanovic", mesecnaPlata: 700 },
    { ime: "Semir", prezime: "Zupic", mesecnaPlata: 1500 },
    { ime: "Alija", prezime: "Rasljanin", mesecnaPlata: 1000 },
];

const ages = [33, 45, 32, 18, 12, 90, 50, 15, 9]

// forEach -> izlistava nizove
payment.forEach((x) => {
    console.log(x)
})

// Map -> pravi novi niz na osnovu zadatog niza
const paymentNew = payment.map((x) => {
    return x.prezime 
})

console.log(paymentNew)

// filter -> filtrira niz i vraca trazenu vrednost
 
const sinanovicPrezime = payment.filter(function(sinanovic){
    if(sinanovic.prezime === "Sinanovic"){
        return true
    }
})
console.log(sinanovicPrezime)

// sort -> sortira niz

const sortName = payment.sort((a, b) => {
    if( a.ime > b.prezime){
        return 1
    }else{
        return -1
    }
})
console.log(sortName)

// Reduce - kombinuje sve elemente u jedan niz 

const ageSum = ages.reduce((total, age) => {
    return total + age
})

console.log(ageSum)




    

