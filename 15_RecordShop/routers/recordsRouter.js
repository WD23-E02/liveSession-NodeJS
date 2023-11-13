import { Router } from "express";
const router = Router()
import {getAllRecords,getSingleRecord,createRecord,updateRecord,deleteRecord} from "../controllers/recordControllers.js"


// "/api/records"
router.get("/allrecords", getAllRecords) //read
router.get("/singlerecord/:id", getSingleRecord) //read sindle record
router.post("/newrecord", createRecord) // create
router.patch("/update/:id", updateRecord) // update
router.delete("/delete/:id", deleteRecord) //delete
 
export default router;