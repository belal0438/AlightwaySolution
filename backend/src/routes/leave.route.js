import { Router } from "express";
const router = Router();

import {
  leaveApplication,
  getLeaveRequest,
  updateLeaveStatus,
} from "../controllers/leave.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.route("/application").post(verifyJWT, leaveApplication);
router.route("/application").get(verifyJWT, getLeaveRequest);
router.route("/application/:id").put(verifyJWT, updateLeaveStatus);
export default router;
