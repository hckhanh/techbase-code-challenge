import { gql } from "apollo-server";
import {
  assignTeamManager,
  assignTeamToDepartment,
  assignUserToTeam,
  createTeam,
} from "../controllers/team";
import { Department } from "../models/deparment";
import { User } from "../models/user";

export const teamType = gql`
  type Team {
    id: ID!
    name: String!
    department: Department!
    manager: User!
    members: [User]
  }

  input TeamInput {
    name: String!
    managerId: ID!
    departmentId: ID!
  }

  input AssignTeamManagerInput {
    managerId: ID!
    teamId: ID!
  }

  input AssignTeamToDepartmentInput {
    teamId: ID!
    departmentId: ID!
  }

  input AssignUserToTeamInput {
    userId: ID!
    teamId: ID!
  }

  extend type Mutation {
    createTeam(team: TeamInput!): Team
    assignTeamManager(input: AssignTeamManagerInput!): Team
    assignTeamToDepartment(input: AssignTeamToDepartmentInput!): Team
    assignUserToTeam(input: AssignUserToTeamInput!): Team
  }
`;

export const teamResolvers = {
  Team: {
    manager: (team) => User.findById(team.manager),
    department: (team) => Department.findById(team.department),
    members: async (team) => {
      const t = await team.populate("members").execPopulate();
      return t.members;
    },
  },
  Mutation: {
    createTeam: (_, { team }) => createTeam(team),
    assignTeamManager: (_, { input }) =>
      assignTeamManager(input.managerId, input.teamId),
    assignTeamToDepartment: (_, { input }) =>
      assignTeamToDepartment(input.teamId, input.departmentId),
    assignUserToTeam: async (_, { input }) =>
      assignUserToTeam(input.userId, input.teamId),
  },
};
