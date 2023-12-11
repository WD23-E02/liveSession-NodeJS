//! variable
// Explicitly typed variable
let greeting: string = "Hello there";

//greeting = 23 // can't assign greeting to numeric value
// Implicity // Inferred type; "myNum" is a number!
let myNums = 23; //infer myNum has type number

//myNum = "Hi" // TS can help catch other errors too!

// let myText:any = "hello"
// myText = 23

//! function

function fixedNumberOne(num: number): void {
  num.toFixed();
  console.log(num);
}

fixedNumberOne(234);

const printSum2 = (x: number, y: number): number => {
  return x + y;
};

console.log(printSum2(2, 5));

function showObj(userInfo: {username: string; city: string}): {
  username: string;
  city: string;
} {
  console.log(userInfo.username, userInfo.city);
  return userInfo;
}

//! =============================! type aliases
// aliases : is to declare the shape of variables but its more used to declare the shape of the object

type SignUp = {
  email: string;
  password: string;
  firstName?: string; // firstName is optional
};

function printUserInfo(userInfo: SignUp): SignUp {
  console.log(userInfo);
  return userInfo;
}

printUserInfo({email: "h@h.com", password: "hello123"});

type Song = {title: string; artist: string; stream: number};

function showSong(songInfo: Song): string {
  return songInfo.artist;
}

function pringSongInfo(songInfo: Song): Song {
  return {
    title: songInfo.title,
    artist: songInfo.artist,
    stream: songInfo.stream,
  };
}

pringSongInfo({title: "I love bread", artist: "Parry Gripp", stream: 2123334});

//! object

let shape: {x: number; y: number} = {x: 4, y: 8};

//! Array

let myArr: [] = []; // declare an empty array

// myArr.push("hello");

let colors: string[] = ["red", "green", "yellow", "pink"]; // is array of strings

colors.push("blue");

let ages: number[] = [24, 55, 12, 32];

// ages.push("hi")// error only number should be pushed

let nestedArr: string[][] = [["leon", "John"]];

//! Tuples are array of fixed order and length

let fixedArr: [number, string];

fixedArr = [22, "Berlin"];

//! union that allow the variable to have multiple type

let myAge: number | string = 33;

myAge = "33";

type Circle = {
  x: number;
  y: number;
};

type Info = {
  age: string;
  name: string;
};

function printShape(para: Circle | Info) {
  console.log(para);
}

let printObj: Info | Circle = {x: 44, y: 12};

printObj = {age: "52", name: "John"};

function printTotal(price: number | string, quantity: number) {
  if (typeof price === "number") {
    console.log(price * quantity);
  } else {
    price = price.replace("$", "");
    price = parseFloat(price);
    console.log(price * quantity);
  }
}

const allBooks: (string | number)[] = []; // create an array of number and string
allBooks.push(22);
allBooks.push("hello");
console.log(allBooks);
let classInfo: (Circle | Info)[] = [];

classInfo = [
  {x: 22, y: 13},
  {age: "33", name: "Ali"},
];

// classInfo = [{age: "40", name: "Tom"}];
console.log(classInfo);

//! Enum in ts is to create a set of named constant

enum UsersType {
  PREMIUM, //By default, TypeScript assigns a numeric value to enum members starting from 0
  GUEST = "guest", //here, the GUEST  is explicitly assigned the string value "guest"
  VISITOR = "visitor",
}

function checkUser(param: UsersType) {
  console.log(param);
}

checkUser(UsersType.VISITOR);

enum Status {
  fail = 400,
  success = 200,
}

console.log(Status.success);

//?The const keyword here creates a constant enum, meaning that the enum itself  cannot be modified or mutated after it's defined and reduce the code in js

const enum Roles {
  ADMIN = "cn=exampleuser,example.com,ou=admin",
  MANAGER = "cn=exampleuser,example.com,ou=manager",
  EDITOR = "cn=exampleuser,example.com,ou=editor",
  USER = "cn=exampleuser,example.com,ou=user",
}

console.log(Roles.ADMIN);
