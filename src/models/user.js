import argon2 from "argon2";
import { model, Schema } from "mongoose";
import argon2Configs from "../configs/argon2";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
});

userSchema.pre("save", async function () {
  const hash = await argon2.hash(this.password, argon2Configs);
  this.set({ password: hash });
});

export const User = model("User", userSchema);
