#!/usr/bin/env node
//Shebang

//sudo npm link (add binary file in bin)

//sudo npm unlink (remove binary file from bin)

const [operation, num1 , num2] = process.argv.slice(2); //[ 'sum', '1', '2' ]

switch(operation){
    case "sum":
        console.log(Number(num1)+ Number(num2))
        break;
    case "multiply":
        console.log(Number(num1)* Number(num2))
        break;
    case "divide":
        console.log(Number(num1)/ Number(num2))
        break;
    default:
        console.log("please provide valid operation i.e(sum,multiply,divide)")
}