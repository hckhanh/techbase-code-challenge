import env from "../utils/env";

export const uri = env.MONGO_URI;

export const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};
