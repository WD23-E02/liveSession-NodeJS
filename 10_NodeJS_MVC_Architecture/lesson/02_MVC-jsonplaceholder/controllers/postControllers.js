
export const getPosts =(req,res)=>{
    res.sendFile("models/posts.json", {root:"."})
}