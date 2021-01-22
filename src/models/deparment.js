import { Schema, model } from "mongoose";

const departmentSchema = new Schema({
  name: { type: String, required: true },
  manager: {
    type: "ObjectId",
    ref: "User",
    required: true,
    alias: "managerId",
  },
});

export const Department = model("Department", departmentSchema);
