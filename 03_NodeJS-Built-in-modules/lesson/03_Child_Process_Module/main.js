const {exec, execFile,spawn, fork} = require("child_process")


/* exec("npm init -y" , (err,output, commanderror)=>{
    if(err){
        console.log(err.message , "err")
    }
    if(output){
        console.log(output)
    }
    if(commanderror){
        console.log(commanderror)
    }
}) */

execFile("./script.sh" , (err,output, commanderror)=>{
    if(err){
        console.log(err.message , "err")
    }
    if(output){
        console.log(output)
    }
    if(commanderror){
        console.log(commanderror)
    }
})