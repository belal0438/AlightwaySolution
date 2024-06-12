import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

import { User } from "../models/user.model.js";
import { Leave } from "../models/leave.model.js";

const leaveApplication = AsyncHandler(async (req, res) => {
  const { leaveType, fromDate, toDate, reason } = req.body;

  if (
    [leaveType, fromDate, toDate, reason].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const leave = await Leave.create({
    employId: req.user._id,
    leaveType,
    fromDate,
    toDate,
    reason,
  });

  const createdLeave = await Leave.findById(leave._id);

  if (!createdLeave) {
    throw new ApiError(
      500,
      "Somthing went wrong while registering the Application"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdLeave, "Application registerd Successfully")
    );
});

/*
manage leave requests
*/

const getLeaveRequest = AsyncHandler(async (req, res) => {
  const checkUser = req.user;
  let getAllRequest;
  if (checkUser.role === "admin") {
    getAllRequest = await Leave.find()
      .select("-createdAt -updatedAt")
      .populate({
        path: "employId",
        select: "-password -createdAt -updatedAt",
      });
  } else {
    getAllRequest = await Leave.find({ employId: checkUser._id })
      .select("-createdAt -updatedAt")
      .populate({
        path: "employId",
        select: "-password -createdAt -updatedAt",
      });
  }

  return res
    .status(201)
    .json(new ApiResponse(200, getAllRequest, "Get all Application "));
});

/*
Admin update request status
*/

const updateLeaveStatus = AsyncHandler(async (req, res) => {
  const requestId = req.params.id;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(requestId)) {
    throw new ApiError(400, "Invalid request ID format");
  }

  const objectId = new mongoose.Types.ObjectId(requestId);

  const checkUser = req.user;
  if (checkUser.role !== "admin") {
    throw new ApiError(400, "Only admin can update status");
  }

  if (status !== "Approved" && status !== "Rejected") {
    throw new ApiError(400, "Invalid status");
  }

  const updateRequest = await Leave.findByIdAndUpdate(
    objectId,
    {
      status,
    },
    { new: true }
  );

  return res
    .status(201)
    .json(new ApiResponse(200, updateRequest, "Status update succefully"));
});

export { leaveApplication, getLeaveRequest, updateLeaveStatus };
