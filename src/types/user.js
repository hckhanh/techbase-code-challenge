import { gql } from "apollo-server";
import { findTeamsByUser } from "../controllers/team";
import { createUser } from "../controllers/user";

export const userType = gql`
  type User {
    id: ID!
    username: String!
    teams: [Team]
  }

  input UserInput {
    username: String!
    password: String!
  }

  extend type Mutation {
    createUser(user: UserInput!): User
  }
`;

export const userResolvers = {
  User: {
    teams: (user) => findTeamsByUser(user),
  },
  Mutation: {
    createUser: (_, { user }) => createUser(user),
  },
};
