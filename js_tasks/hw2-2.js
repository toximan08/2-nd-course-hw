// //1

// let a = Number(10);
// alert(`1: a = ${a}`);

// a = 20;
// alert(`1: Now a = ${a}`);

// //2

// let iphoneReleaseYear = Number(2007);
// alert(
//   `2: If you didn't know, first Iphone was released in ${iphoneReleaseYear}`
// );

// //3

// let javascriptCreator = "Brendan Eich";
// alert(`3: JavaScript creator is ${javascriptCreator}`);

// //4

// let b = Number(10);
// let c = Number(2);
// alert(`4:
// b + c = ${b + c}
// b - c = ${b - c}
// b * c = ${b * c}
// b / c = ${b / c}`);

// //5

// result = 2 ** 5;
// alert(`5: 2 ** 5 = ${result}`);

// //6

// a = 9;
// b = 2;
// alert(`6: 9 % 2 = ${a % b}`);

// //7

// let num = 1;

// console.log((num += 5));

// console.log((num -= 3));

// console.log((num *= 7));

// console.log((num /= 3));

// console.log(++num);

// console.log(--num);

// alert(num);

// //8

// let age = Number(prompt("8: How old are you?"));
// alert(`8: You are ${age} years old! What a surprise!`);

//9.0

let user = {
  name: "Fedor",
  age: 27,
  isAdmin: true,
};

console.log(user["name"]);
console.log(user["age"]);
console.log(user["isAdmin"]);

//9.1

user["cityOfResidence"] = "Gatchina";
console.log(user["cityOfResidence"]);

//9.2

user["age"] = 5;
console.log(user["age"]);

//9.3

delete user["cityOfResidence"];
console.log(user);

//9.4

let info = prompt("9.4: What information do you want to get about the user?");
alert(user[info]);

// //10

// let username = prompt(`10: What is your name?`);
// alert(`Hello, ${username}!`);
