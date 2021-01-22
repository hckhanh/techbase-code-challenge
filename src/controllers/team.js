import { Team } from "../models/team";

export function createTeam(team) {
  return Team.create(team);
}

export function findTeamsByUser(user) {
  return Team.find({ members: user });
}

export function assignTeamManager(managerId, teamId) {
  return Team.findByIdAndUpdate(teamId, { manager: managerId });
}

export function assignTeamToDepartment(teamId, departmentId) {
  return Team.findByIdAndUpdate(teamId, { department: departmentId });
}

export function assignUserToTeam(userId, teamId) {
  return Team.findByIdAndUpdate(teamId, { $addToSet: { members: userId } });
}
