const Employee = require('../models/Employee');

class EmployeeFactory {
  static createEmployee(id, name, role, salary) {
    return new Employee(id, name, role, salary);
  }
}

module.exports = EmployeeFactory;
