import mongoose, { Schema } from "mongoose";

const leaveSchema = new Schema(
  {
    employId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    leaveType: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
    },

    fromDate: {
      type: Date,
      required: true,
    },

    toDate: {
      type: Date,
      required: true,
    },

    reason: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },

  {
    timestamps: true,
  }
);

export const Leave = mongoose.model("Leave", leaveSchema);
