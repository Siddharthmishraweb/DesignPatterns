const EmployeeFactory = require('../factories/EmployeeFactory');

class EmployeeService {
  constructor(repository) {
    this.repository = repository;
  }

  listEmployees() {
    return this.repository.getAll();
  }

  getEmployee(id) {
    return this.repository.getById(id);
  }

  createEmployee(id, name, role, salary) {
    if (this.repository.getById(id)) {
      throw new Error('Employee with this ID already exists.');
    }
    const employee = EmployeeFactory.createEmployee(id, name, role, salary);
    this.repository.add(employee);
  }

  updateEmployee(id, updatedData) {
    return this.repository.update(id, updatedData);
  }

  deleteEmployee(id) {
    return this.repository.delete(id);
  }
}

module.exports = EmployeeService;
