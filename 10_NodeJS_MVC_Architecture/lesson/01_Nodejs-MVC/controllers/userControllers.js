export const getUsers = (req,res) => {
    //request handler // controller
    res.send("We received get request on /users")
}

export const postUser = (req,res)=>{
    //request handler // controller
    res.send("We received post request on /users")
}

export const patchUser= (req,res)=>{
    //request handler // controller
    res.send("We received patch request on /users")
}

export const deleteUser = (req,res)=>{
    //request handler // controller
    res.send("We received delete request on /users")
}