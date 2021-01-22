import { argon2id, defaults } from "argon2";
import merge from "lodash.merge";
import env from "../utils/env";

const options = {
  type: argon2id,
  memoryCost: env.ARGON2_MEMORY_COST,
  timeCost: env.ARGON2_TIME_COST,
  parallelism: env.ARGON2_PARALLELISM,
  saltLength: env.ARGON2_SALT_LENGTH,
  hashLength: env.ARGON2_HASH_LENGTH,
};

export default merge({}, defaults, options);
