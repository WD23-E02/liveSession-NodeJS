import express from "express";
import {
  createCoffee,
  deleteCoffeeById,
  findByName,
  getAllCoffee,
  updateCoffeeById,
} from "../controller/coffeeControllers.js";

const router = express.Router();
// localhost:5000/api/coffee
router.get("/", getAllCoffee);

// localhost:5000/api/coffee/create
router.post("/create", createCoffee);
// localhost:5000/api/coffee/update/9586058609643knsd555fkjs (update method)
router.patch("/update/:id", updateCoffeeById);
// localhost:5000/api/coffee/update/9586058609643knsdfuiukjs (delete method)
router.delete("/delete/:id", deleteCoffeeById);

router.get("/:name", findByName);
export default router;
