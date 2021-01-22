import { connect, connection } from "mongoose";
import * as mongoConfigs from "../configs/mongo";

connection.on("error", (error) => {
  console.error(error);
});

connection.once("open", () => {
  console.log("Connected to Mongo");
});

export function connectMongo() {
  return connect(mongoConfigs.uri, mongoConfigs.options);
}
