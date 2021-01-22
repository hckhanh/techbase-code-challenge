import { Department } from "../models/deparment";

export function createDepartment(department) {
  return Department.create(department);
}

export function assignDepartmentManager(managerId, departmentId) {
  return Department.findByIdAndUpdate(departmentId, { manager: managerId });
}
