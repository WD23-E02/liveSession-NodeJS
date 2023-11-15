import {Router} from "express";

import {
  deleteUser,
  getAllUsers,
  login,
  register,
  updateUser,
} from "../controllers/userControllers.js";
import {
  userRegisterValidation,
  userValidationsTest,
} from "../middleware/validation.js";

const router = Router();
// "/api/users"
router.post("/login", login);
router.post("/register", userRegisterValidation, register);

// router.post("/validation", userValidationsTest);

router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/allUsers", getAllUsers);

export default router;
