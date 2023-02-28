// //Task 1

// for (let i = 0; i < 2; i++) {
//   console.log("Task 1: Hello!");
// }

// //Task 2

// for (let i = 1; i <= 5; i++) {
//   if (i >= 1 && i <= 5) {
//     console.log(`Task 2: ${i}`);
//   }
// }

// //Task 3

// for (let i = 1; i <= 22; i++) {
//   if (i >= 7 && i <= 22) {
//     console.log(`Task 3: ${i}`);
//   }
// }

// //Task 4

// let obj = {
//   Kolya: "200",
//   Vasya: "300",
//   Petya: "400",
// };
// for (let worker in obj) {
//   console.log(`Task 4: ${worker}'s salary is ${obj[worker]} bucks`);
// }

// //Task 5

// n = 1000;

// for (num = 0; n / 2 > 50; ++num) {
//   n = n / 2;
// }
// if (n / 2 < 50) {
//   n = n / 2;
//   ++num;
// }
// console.log(`Task 5: n / 2 ${num} times = ${n}`);

//Task 6

let firstFriday = 3;

for (let friday = firstFriday; friday <= 31; friday += 7) {
  switch (friday) {
    case 1:
      console.log(
        `6: It's friday the ${friday}st, so it's time to do a report.`
      );
      break;
    case 2:
      console.log(
        `6: It's friday the ${friday}nd, so it's time to do a report.`
      );
      break;
    case 3:
      console.log(
        `6: It's friday the ${friday}rd, so it's time to do a report.`
      );
      break;
    default:
      console.log(
        `6: It's friday the ${friday}th, so it's time to do a report.`
      );
      break;
  }
}
