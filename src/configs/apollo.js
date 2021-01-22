import { resolvers, typeDefs } from "../types";
import { departmentResolvers, departmentType } from "../types/department";
import { teamResolvers, teamType } from "../types/team";
import { userResolvers, userType } from "../types/user";
import env from "../utils/env";

export default {
  typeDefs: [typeDefs, userType, teamType, departmentType],
  resolvers: [resolvers, userResolvers, teamResolvers, departmentResolvers],
  tracing: !env.isProduction,
  mocks: env.GRAPHQL_MOCKS,
  mockEntireSchema: env.GRAPHQL_MOCK_ENTIRE_SCHEMA,
};
