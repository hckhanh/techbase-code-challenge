import { Schema, model } from "mongoose";

const teamSchema = new Schema({
  name: { type: String, required: true },
  manager: {
    type: "ObjectId",
    ref: "User",
    required: true,
    alias: "managerId",
  },
  department: {
    type: "ObjectId",
    ref: "Department",
    required: true,
    alias: "departmentId",
  },
  members: [{ type: "ObjectId", ref: "User" }],
});

export const Team = model("Team", teamSchema);
