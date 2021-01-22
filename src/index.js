import { ApolloServer } from "apollo-server";
import apolloConfigs from "./configs/apollo";
import env from "./utils/env";
import { connectMongo } from "./utils/mongo";

connectMongo().catch((error) => {
  console.error(error);

  // Terminate the app when first connection cannot be established
  process.exit(1)
});

const server = new ApolloServer(apolloConfigs);

server.listen({ port: env.PORT }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
