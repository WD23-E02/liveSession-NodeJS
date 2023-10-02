// process object
// running instance of application
// current working task
/* setTimeout(()=>{
    console.log("process ended")
    process.exit(0)
},30000) */
/* console.log("process started...") */

/* console.log(process.argv) */
/* const arguments = process.argv.slice(2) // => [sum,2,3] */
const [operation, num1, num2] = process.argv.slice(2) // => [sum,2,3]
/* console.log(arguments) */

/* if(arguments[0]==="sum"){
    console.log(parseInt(arguments[1])+parseInt(arguments[2]))
}
if(arguments[0]==="multiply"){
    console.log(parseInt(arguments[1])*parseInt(arguments[2]))
} */
switch(operation){
    case "sum":
        console.log(parseInt(num1)+parseInt(num2))
        break;
    case "multiply":
        console.log(parseInt(num1)*parseInt(num2))
        break;
    case "substract":
        console.log(parseInt(num1)-parseInt(num2))
        break;
    default:
        console.log("please provide correct operation i.e (sum,multiply and substract)")

    }

/* switch(arguments[0]){
    case "sum":
        console.log(parseInt(arguments[1])+parseInt(arguments[2]))
        break;
    case "multiply":
        console.log(parseInt(arguments[1])*parseInt(arguments[2]))
        break;
    case "substract":
        console.log(parseInt(arguments[1])-parseInt(arguments[2]))
        break;
    default:
        console.log("please provide correct operation i.e (sum,multiply and substract)")

    } */




