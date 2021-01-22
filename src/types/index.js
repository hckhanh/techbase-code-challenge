import { gql } from "apollo-server";
import { getUsers } from "../controllers/user";

export const typeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    "This work around keeps empty Mutation valid"
    _empty: String
  }
`;

export const resolvers = {
  Query: {
    users: () => getUsers(),
  },
};
