'use strict'
// let js = "amazing";
// // if (js === "amazing") alert("javascript is fun");
// // console.log(40 + 8 + 23 - 10);


// const country = "US";
// const continent = "NA";
// let population = 325_000_000;
// const isIsland = false;
// const language = 'ENG-US';

// console.log(typeof country, typeof continent, typeof population,
//     typeof isIsland, typeof language)

// let halfPop = population / 2;
// console.log(halfPop)
// console.log(population + 1)
// let finPop = 6_000_000;
// console.log(population > finPop)
// let avgPop = 33_000_000;
// console.log(avgPop > population);

// let description = `${country} is in ${continent} and its ${population} people speak ${language}.`

// console.log(description);

// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.92;
// const johnWeight = 92;

// let markHigherBMI = false;




// let markBMI = markWeight / markHeight ** 2;

// let johnBMI = johnWeight / johnHeight ** 2;

// if (markBMI > johnBMI) {
//     markHigherBMI = true;
//     console.log(markHigherBMI)
// } else {
//     markHigherBMI = false;
//     console.log(markHigherBMI);
// }

// let number = 1111;

// console.log(String(number) + 2222);


// let falsey = undefined;

// console.log(Boolean(falsey));

let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg == koalasAvg) {
    console.log("its a tie")
} else {
    dolphinsAvg > koalasAvg ? console.log("Dolphins win") : console.log("Koalas win");
}

let tip = .15;
let bill = 275;

bill >= 50 || bill <= 300 ? tip = .15 : tip = .20;

let total = bill + (tip * bill);

console.log(total);