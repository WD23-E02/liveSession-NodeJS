import express from "express"
import { deleteUser, getUsers, patchUser, postUser } from "../controllers/userControllers.js";
const route = express.Router()

// endpoints for /users
// GET /users
route.get("/",getUsers) 

// POST /users
route.post("/",postUser) 

// PATCH /users
route.patch("/",patchUser) 

// DELETE /users
route.delete("/",deleteUser) 


export default route; //IMPORTANT!!!