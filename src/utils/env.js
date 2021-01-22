import setupEnv from "@ladjs/env";

const env = setupEnv();

export default {
  ...env,
  isProduction: env.NODE_ENV === "production",
};
