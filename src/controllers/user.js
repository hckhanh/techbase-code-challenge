import { User } from "../models/user";

export function createUser(user) {
  return User.create(user);
}

export function getUsers() {
  return User.find().limit(1500);
}
