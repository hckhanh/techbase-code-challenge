import { gql } from "apollo-server";
import {
  assignDepartmentManager,
  createDepartment,
} from "../controllers/deparment";
import { User } from "../models/user";

export const departmentType = gql`
  type Department {
    id: ID!
    name: String!
    manager: User!
  }

  input DepartmentInput {
    name: String!
    managerId: ID!
  }

  input AssignDepartmentManagerInput {
    managerId: ID!
    departmentId: ID!
  }

  extend type Mutation {
    createDepartment(department: DepartmentInput!): Department
    assignDepartmentManager(input: AssignDepartmentManagerInput!): Department
  }
`;

export const departmentResolvers = {
  Department: {
    manager: (department) => User.findById(department.manager),
  },
  Mutation: {
    createDepartment: (_, { department }) => createDepartment(department),
    assignDepartmentManager: (_, { input }) =>
      assignDepartmentManager(input.managerId, input.departmentId),
  },
};
