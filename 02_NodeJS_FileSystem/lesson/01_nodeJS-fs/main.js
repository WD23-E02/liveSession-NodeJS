const fs = require("node:fs")

/* const fs = require("fs/promises") */

/* async function createDirectory(){
    try{
        await fs.mkdir("./promises")
        console.log("folder created succcssfully!")
    }
    catch(err){
        console.log(err)
    }}
createDirectory() */

/* async function createAFile(path,data){
    try {
        await fs.writeFile(path,data )
        console.log("successfully created new file")
    } catch (error) {
        console.log(err)
    }
}

createAFile("./promises/newFile.txt","Hello World") */

//CommonJS 
/* const fs = require("fs") */


//create directory
/* fs.mkdir("./folder",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("folder created....")
    }
}) */


//create a file
// writeFile will check if that file exist ,it will overwrite data into in, otherwise it will create a new file and write data.
 
/* fs.writeFile("./folder/hello.txt","Hello World", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created successfully!")
    }
}) */

//append or add something into that file
// appendFile will check if file exist ,it will append more data, otherwise it will create that file and add data inot that file
/* fs.appendFile("./folder/hello.txt", "\n Adding more data" , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("data added successfully!")
    }
}) */

//read all data from that file
/* fs.readFile("./folder/hello.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
}) */

//rename that file
/* fs.rename("./folder/hello.txt","./folder/renamedHello.js",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file renamed successfully!")
    }
}) */

//make a copy of that file
/* fs.copyFile("./promises/newFile.txt","./promises/copyNewFile.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file copied successfully!")
    }
}) */
//make file empty
//fs.truncate

//delete that file
/* fs.unlink("./promises/copyNewFile.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted successfully!")
    }
}) */

//delete/remove a folder/directory
/* fs.rmdir("./promises",{recursive:true,force:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("directory deleted !")
    }
}) */
/* fs.rm("./promises",{recursive:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("directory deleted !")
    }
}) */

/* fs.stat("./folder/renamedHello.js",(err,stat)=>{
    if(err){
        console.log(err)
    }else{
        console.log(stat)
    }
}) */
/* 
fs.chmod("main.js",0o467, (err)=>{  // -r--, rw- , rwx
    console.log(err)
} )
 */

//fetching data and storing it into a file
/* fetch("").then(res=>res.json()).then(data=>{
    fs.writeFile("./folder/hello.txt",data, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created successfully!")
        }
    })  
}) */



//Readable − Stream which is used for read operation.
//Writable − Stream which is used for write operation.
//Duplex − Stream which can be used for both read and write operation.
//Transform − A type of duplex stream where the output is computed based on input.

/* const readStream = fs.createReadStream("./folder/text.txt")
const writeStream = fs.createWriteStream("./folder/newFile.txt")

readStream.pipe(writeStream)
 */
/* readStream.on("data",(data)=>{
    writeStream.write(data)
    console.log(data)
}) */

/* const folders=["./first/src","./second/public"]

folders.forEach(folder=>{
    fs.mkdir(folder,{recursive:true}, (err)=>{
        console.log(err)
    })
}) */

/* Array.from(["./first/src","./second/public"]).forEach(folder=>{
    fs.mkdir(folder,{recursive:true}, (err)=>{
        console.log(err)
    })
}) */

/* fs.mkdir("./second", (err)=>{
    console.log(err)
}) */