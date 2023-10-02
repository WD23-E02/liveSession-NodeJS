// ESM (ES6 module syntax) default export
/* export default function getSum(a,b){
    return a+b
} */
// ESM (ES6 module syntax) named export
/* export function getSum(a,b){
    return a+b
} */




//CommonJS syntax default export
/* module.exports = function getSum(a,b){
    return a+b
} */

//CommonJS syntax named exports
function getSum(a,b){
    return a+b
}
function getProduct(a,b){
    return a*b
}
module.exports = {getSum,getProduct}
