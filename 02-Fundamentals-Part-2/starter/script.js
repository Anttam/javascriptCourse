'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// passTest ? hasDriversLicense = true : hasDriversLicense = false;
// if(hasDriversLicense)  console.log("i can drive") ;



// function logger(){
//     console.log("my name is jonas")
// }

// function fruitProccessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProccessor(5,0);

// console.log(appleJuice);

// function calcAge1(birthYear){
//     return 2037 -birthYear;
// }


// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthyear){
//     return 2037 -birthyear
// }

// console.log(calcAge2(1991));

// const calcAge2 = function (birthYear){
//     return 2037 -birthyear
// }

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991)

// console.log(age3);


// function calcAverage(score1, score2, score3){
//     return score1+score2+score3 / 3;
// }
// function checkWinner(firstTeam, secondTeam){
//     if( firstTeam == secondTeam){
//         console.log(`It is a tie`)
//     }else{
//     firstTeam > secondTeam ? console.log(`Dolphin is the winner`) : console.log(`Koala is the winner`)
//     }
// }

// const dolphinAvg = calcAverage(44,23,71);
// const koalaAvg = calcAverage(65,54,49)


// checkWinner(dolphinAvg,koalaAvg)

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0])

// console.log(friends.length);
// friends[2] = 'Jay';
// console.log(friends)


// const firstName = 'jonas';
// const jonas = [firstName,'lastname',2037-1991, 'teacher', friends ]

// console.log(jonas);



// friends.push('Jay');
// console.log(friends)

// friends.unshift('John');

// console.log(friends)


// friends.pop();
// console.log(friends)
// const shift = friends.shift();
// console.log(friends)
// console.log(shift)


// console.log(friends.includes('Steven'));


function calcTip(bill){
   return  bill>=50 && bill<=300 ? bill * .15 : bill * .2
}


// const bills = [125,555,44];
// const tips = [caclTip(bills[0]), caclTip(bills[1]), caclTip(bills[2])]

// console.log(tips);



// let interestedIn = prompt("What do you want to know about Jonas? choose between first name, last name , age, job and friends")

// console.log(jonas[interestedIn])

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn])
// }else[
//     console.log('Wrong request')
// ]

// jonas.location = 'Portugal';
// jonas["twitter"] = '@jonaschscsadwe'
// console.log(jonas)

// console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is named ${jonas.friends[0]}`)


// const jonas = {
//     firstName : 'Jonas',
//     lastName : "last Name",
//     birthYear : 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense : true,

//     calcAge : function (){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary : function(){
//          console.log(`${this.firstName} is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriversLicense ? 'has ' : 'does not have '} a driver's license`) 

//     }
// }
// jonas.calcAge();

// jonas.getSummary();

// console.log(jonas.age)


// const john = {
//     firstName : 'John',
//     lastName : 'Smith',
//     height : 1.95,
//     weight : 92,

//     calcBMI : function (){
//         this.bmi = Math.round(this.weight / (this.height**2));
//         return Math.round( this.bmi);
//     }
// }

// const mark = {
//     fullName : this.firstName+' '+this.lastName,
//     firstName : 'Mark',
//     lastName : 'Miller',
//     height : 1.69,
//     weight : 78,

//     calcBMI : function (){
//         this.bmi = Math.round(this.weight / (this.height**2));
//         return this.bmi;
//     }
// }

// john.calcBMI();
// mark.calcBMI();


// console.log(`${
//     mark.bmi > john.bmi 
//     ? mark.firstName+' '+mark.lastName+' ('+(mark.bmi)+')' 
//     : john.firstName+' '+john.lastName+' ('+john.bmi+')' 
// } has a bigger BMI than ${
//     mark.bmi < john.bmi ?
//      mark.firstName+' '+mark.lastName+' ('+mark.bmi+')' : 
//      john.firstName+' '+john.lastName +' ('+john.bmi+')'}`)


const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const total = [];

// console.log(bills)



function caclTip(bills){
    for(const bill in bills){
        const tip = calcTip(Number(bills[bill]))
        console.log(tip)
        tips.push(tip);
        total.push(bills[bill]+tip);
    } 
    }
function calcAvg(arr){
    let total = 0;
    for(const value in arr){
         total +=  arr[value];
    }
    return total/arr.length;
}

    caclTip(bills);
    console.log(tips)
    console.log(total)



    console.log(calcAvg(bills),calcAvg(tips),calcAvg(total))