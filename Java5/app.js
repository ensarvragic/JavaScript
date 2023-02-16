// Logicki operatori(koji vracaju dve vrednosti -- true ili false)

// Sintaksa
// if
// else if
// else
// switch

// if(uslov) {
//   output
// }

// let prviBroj = 5;
// let drugiBroj = 5;

// if (prviBroj > drugiBroj){
//     console.log(true)
// } else {
//     console.log(false)
// }

// let mesec = 6;

// if(mesec === 1) {
//     console.log("Januar")
// } else if (mesec === 2){
//     console.log("Februar")
// } else {
//     console.log("Jan")
// }

// switch(mesec){
//     case 1:
//         console.log("Januar")
//         break;
//     case 2:
//         console.log("Februar")
//         break;
//     case 3: 
//         console.log("Mart")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("Maj")
//         break;
//     case 5:
//         console.log("Jun")
//         break;
//         default;
// }

let vreme = 14;

if(vreme > 14){
    console.log("Dobar dan")
}else {
    console.log("Dobro jutro")
}

switch(vreme){
    case 1:
        console.log("Dobro jutro")
        break;
    case 2:
        console.log("Dobar dan")
        break;
    case 3: 
        console.log("Dobro vece")
        break;
        default:
            console.log("Ne postoji to vreme")
}