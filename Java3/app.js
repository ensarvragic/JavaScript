// let samo definise unutar zagrada i ne mozemo ga pozvati izvan zagrade 
// function test(
//     let a = 20;
//     console.log(a)
// i nikako ga ne mozemo pozvati izvan
// )
// var poziva globalno
// jedno = daje vrednost
// dva = provera vrednost
// tri = proverava i tip i vrednost

const cars = ["bmw", "audi", "vw", "skoda", "peugeot"];
cars.slice(0, 4, "seat" )
console.log(cars)

const brojevi = [1, 2,];
const brojevi1 = [...brojevi, 3, 4]
console.log(brojevi1);

//Metode za rad sa nizovima
// 1. push -> ubacuje element na kraj niza         
//             -cars.push("mercedes");

// 2. unshift -> ubacuje element na kraj niza
//             -cars.shift("mercedes");

// 3. pop -> brisemo element na kraj niza
//             -cars.push("peugeot")

// 4. shift -> brisemo element na pocetak niza
//             -cars.shift("bmw");

// 5. slice -> ne menja niz, samo uzima podatke iz proslog niza
//             const cars2 = cars.slice(0, 2); uzima od pocetka do kraja (prvi broj start-drugi broj end)

// 6. splice -> menja niz, brise selektovane elemente i dodaje nove
//             -cars.splice(0, 4, "seat")

// 7. Spread operator(...) -> pravi kopiju postojeceg niza
//  -const brojevi = [1, 2,];
//  -const brojevi1 = [...brojevi, 3, 4]
//  -console.log(brojevi1);

// {} -> oznacava objekat
// [] -> oznacava niz
// () -> poziva metodu

