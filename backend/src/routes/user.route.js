import { Router } from "express";
const router = Router();

import {
  registerUser,
  loginUser,
  loggoutUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/loggout").post(verifyJWT, loggoutUser);
export default router;
