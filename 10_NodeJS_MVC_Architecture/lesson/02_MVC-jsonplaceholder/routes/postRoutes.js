import {Router} from "express"
import { getPosts } from "../controllers/postControllers.js"

const route = Router()

route.get("/", getPosts)


export default route;