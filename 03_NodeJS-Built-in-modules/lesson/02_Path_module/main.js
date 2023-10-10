const path = require("path") //CommonJS

/* import path from "path" */ //ESM => ES6 Module
/*  console.log(__dirname) //will not work with ESM
console.log(path.dirname(__filename))  //will not work with ESM */
console.log(path.resolve(".")) //returns absolute path to your current working directory
console.log(path.isAbsolute(path.resolve(".", "../01_Url_Module/main.js")))// "../01_Url_Module/main.js_"


//path is a location to your file

/* console.log(__filename )*/ // /home/naqvi/Desktop/Classes/liveSession-NODEJS/03_NodeJS-Built-in-modules/lesson/02_Path_module/main.js

/* console.log(path.isAbsolute(__filename)) *///true

/* console.log(path.dirname(__filename)) */ // /home/naqvi/Desktop/Classes/liveSession-NODEJS/03_NodeJS-Built-in-modules/lesson/02_Path_module

/* console.log(path.basename(__filename)) */ // main.js 

/* console.log(path.extname(__filename)) */

/* console.log(path.parse(__filename)) */

/* console.log(path.join("folder","////src","index.js")) */

/* const filePath = path.join("folder","/src////","index.js")
console.log(filePath) */

/* const filePath =  path.resolve(".", "../01_Url_Module/main.js")

console.log(filePath)
 */
