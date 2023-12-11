//! variable
// Explicitly typed variable
var greeting = "Hello there";
//greeting = 23 // can't assign greeting to numeric value
// Implicity // Inferred type; "myNum" is a number!
var myNums = 23; //infer myNum has type number
//myNum = "Hi" // TS can help catch other errors too!
// let myText:any = "hello"
// myText = 23
//! function
function fixedNumberOne(num) {
  num.toFixed();
  console.log(num);
}
fixedNumberOne(234);
var printSum2 = function (x, y) {
  return x + y;
};
console.log(printSum2(2, 5));
function showObj(userInfo) {
  console.log(userInfo.username, userInfo.city);
  return userInfo;
}
function printUserInfo(userInfo) {
  console.log(userInfo);
  return userInfo;
}
printUserInfo({email: "h@h.com", password: "hello123"});
function showSong(songInfo) {
  return songInfo.artist;
}
function pringSongInfo(songInfo) {
  return {
    title: songInfo.title,
    artist: songInfo.artist,
    stream: songInfo.stream,
  };
}
pringSongInfo({title: "I love bread", artist: "Parry Gripp", stream: 2123334});
//! object
var shape = {x: 4, y: 8};
//! Array
var myArr = []; // declare an empty array
// myArr.push("hello");
var colors = ["red", "green", "yellow", "pink"]; // is array of strings
colors.push("blue");
var ages = [24, 55, 12, 32];
// ages.push("hi")// error only number should be pushed
var nestedArr = [["leon", "John"]];
//! Tuples are array of fixed order and length
var fixedArr;
fixedArr = [22, "Berlin"];
//! union that allow the variable to have multiple type
var myAge = 33;
myAge = "33";
function printShape(para) {
  console.log(para);
}
var printObj = {x: 44, y: 12};
printObj = {age: "52", name: "John"};
function printTotal(price, quantity) {
  if (typeof price === "number") {
    console.log(price * quantity);
  } else {
    price = price.replace("$", "");
    price = parseFloat(price);
    console.log(price * quantity);
  }
}
var allBooks = []; // create an array of number and string
allBooks.push(22);
allBooks.push("hello");
console.log(allBooks);
var classInfo = [];
classInfo = [
  {x: 22, y: 13},
  {age: "33", name: "Ali"},
];
// classInfo = [{age: "40", name: "Tom"}];
console.log(classInfo);
//! Enum in ts is to create a set of named constant
var UsersType;
(function (UsersType) {
  UsersType[(UsersType["PREMIUM"] = 0)] = "PREMIUM";
  UsersType["GUEST"] = "guest";
  UsersType["VISITOR"] = "visitor";
})(UsersType || (UsersType = {}));
function checkUser(param) {
  console.log(param);
}
checkUser(UsersType.VISITOR);
var Status;
(function (Status) {
  Status[(Status["fail"] = 400)] = "fail";
  Status[(Status["success"] = 200)] = "success";
})(Status || (Status = {}));
console.log(Status.success);

console.log("cn=exampleuser,example.com,ou=admin" /* Roles.ADMIN */);
