const age = 18;
age >= 18 ? console.log("You are adult") : console.log("you aren't adult yet");

let price = 1100;
const isLeader = true;

// price = isLeader === true ? 0 : (price += 100);

// console.log(price);

// if (isLeader === true) {
//   if (price > 1000) {
//     price /= 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price;
// }

price = isLeader === true ? (price > 1000 ? (price /= 2) : 0) : 0;
console.log(price);
