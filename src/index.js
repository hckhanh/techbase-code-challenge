import { ApolloServer } from "apollo-server";
import apolloConfigs from "./configs/apollo";
import { connectMongo } from "./utils/mongo";

connectMongo().catch((error) => {
  console.error(error);
});

const server = new ApolloServer(apolloConfigs);

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
