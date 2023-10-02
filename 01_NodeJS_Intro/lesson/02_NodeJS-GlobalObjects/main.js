
//runtime environment
//Browser => host object (global object) => window
//Nodejs => host object (global object) => global

/* console.log(global) */

//module
// each js file in nodejs is a module



//global objects
//module
/* console.log(module) */
//internal // built-in modules
// external modules

//__dirname returns absolute path to your current working directory
/* console.log(__dirname) */

//relative => path started from current location to desired destination
// if path started from current location it is always relative path 

// write relative path to text.txt => "./folder/text.txt"

//absolute => path started from root directory to current location
// if path started from root directory it is called abosolute path.
// "/home/naqvi/Desktop/Classes/liveSession-NODEJS/01_NodeJS_Intro/lesson/02_NodeJS-GlobalObjects"

 // __filename returns absolute path to current working file
 /* console.log(__filename)  */
// "/home/naqvi/Desktop/Classes/liveSession-NODEJS/01_NodeJS_Intro/lesson/02_NodeJS-GlobalObjects/main.js"


//module system
//UDM
//AMD
//COMMONJS (support by nodejs)
/* const {getSum} = require("./index.js") */
//ESM 
/* import {getSum} from"./index.js"

import React,{useState} from "react" */


/* import getSum from"./index.js"

console.log(getSum(2,3)) */





//commonjs import default
const getSum = require("./index.js")
//commonjs import named
/* const {getSum,getProduct} = require("./index.js") */

console.log(getSum(2,3))
























//SEMVER (sementic versioning system) 18.17.0  => Major. Mainor. Patch


