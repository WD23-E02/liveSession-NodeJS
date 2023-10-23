import { Router } from "express"
import { index } from "../controllers/indexController.js"

const route = Router()

route.get("/", index)


export default route 


