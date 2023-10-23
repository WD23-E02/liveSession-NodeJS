import express from "express"
import indexRoute from "./routes/indexRoutes.js"
import postRoute from "./routes/postRoutes.js"

const PORT = 5000; 
const app = express()

//MVC design pattern/architecture
// views => frontend (GUI) presentational code
// controllers => holds all your request handlers / holds main logic of your app 
// models => hold all app data // data related code

// index route
app.use("/", indexRoute)

// /posts route
app.use("/posts", postRoute)

// your task is to make remaining endpoints 
/*  
/comments	500 comments
/albums	100 albums
/photos	5000 photos
/todos	200 todos
/users	10 users
 */


app.listen(PORT, ()=>console.log("server is running on port: ",PORT))