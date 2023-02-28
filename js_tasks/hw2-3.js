//1

let password = "bruh";
let passcheck = prompt("1: Enter the password");
passcheck == password
  ? alert("1: Password is right")
  : alert("1: Password is wrong, renew this page and try again");

//2

let c = 2;
c > 0 && c < 10
  ? console.log("2: You are right")
  : console.log("2: You are wrong");

//3

let d = 3;
let e = 101;
d > 100 || e > 100
  ? console.log("3: You are right")
  : console.log("3: You are wrong");

//4

let a = "2";
let b = "3";
alert(`4: a + b = ${+a + +b}`);

//5

let monthNumber = prompt("5: Please enter some month as a number");
switch (monthNumber) {
  case "":
    console.log("5: You haven't entered any number!");
    break;
  case "1":
  case "2":
  case "12":
    console.log("5: It's winter's month");
    break;
  case "3":
  case "4":
  case "5":
    console.log("5: It's spring's month");
    break;
  case "6":
  case "7":
  case "8":
    console.log("5: It's summer's month");
    break;
  case "9":
  case "10":
  case "11":
    console.log("5: It's autumn's month");
    break;
  default:
    console.log(
      "5: It's only 12 months in the year or you have entered not a number!"
    );
}

//7

let f = prompt("7: Please enter any number");

if (f === "") {
  alert("7: You have nothing entered!");
} else if (f % 2 === 0) {
  console.log(`7: ${f} is an even number`);
  alert("7: You have entered an even number");
} else if (f % 2 === 1) {
  console.log(`7: ${f} is an odd number`);
  alert("7: You have entered an odd number");
} else {
  alert("7: You have entered not a number!");
}

//8

let clientOS = String(
  prompt(`8: What OS are you using? iOS or Android?`)
).toLowerCase();
if (clientOS === "") {
  alert("8: You haven't entered nothing");
} else if (clientOS === "ios") {
  clientOS === 1;
  console.log(clientOS);
  alert("8: Please install our iOS app using this link");
} else if (clientOS === "android") {
  clientOS === 0;
  console.log(clientOS);
  alert("8: Please install our Android app using this link");
} else {
  alert("8: Sorry, you haven't given us data about your OS, please try again");
}

//9

clientOS = String(
  prompt("9: What OS are you using? iOS or Android?")
).toLowerCase();
let clientDeviceYear = confirm("Was your device released before 2015?");

if (clientDeviceYear === true) {
  switch (clientOS) {
    case "":
      alert("9: You have entered nothing");
      break;
    case "ios":
      alert("9: Please install light version of our iOS app using this link");
      break;
    case "android":
      alert(
        "9: Please install light version of our Android app using this link"
      );
      break;
    default:
      alert(
        "9: Sorry, you haven't given us data about your OS, please try again"
      );
  }
} else {
  switch (clientOS) {
    case "":
      alert("9: You have entered nothing");
      break;
    case "ios":
      alert("9: Please install our iOS app using this link");
      break;
    case "android":
      alert("9: Please install our Android app using this link");
      break;
    default:
      alert(
        "9: Sorry, you haven't given us data about your OS, please try again"
      );
  }
}
