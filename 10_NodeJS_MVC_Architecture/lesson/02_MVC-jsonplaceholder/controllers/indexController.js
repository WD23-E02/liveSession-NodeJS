export const index = (req,res)=>{
    //request handler
    res.sendFile("views/index.html", {root:"."})
}