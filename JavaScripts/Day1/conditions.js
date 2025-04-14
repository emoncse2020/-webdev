// // comparison

// if (13 < 10) {
//   console.log("I have a smaller value");
// }

const price = 9500;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  //   console.log(discount);
  console.log(payAmount);
} else if (price >= 3000) {
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
