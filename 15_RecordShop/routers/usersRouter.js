import {Router} from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  register,
  updateUser,
} from "../controllers/userControllers.js";

const router = Router();
// "/api/users"
router.post("/login", login);
router.post("/register", register);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/allUsers", getAllUsers);

export default router;
