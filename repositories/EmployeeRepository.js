const fs = require('fs');
const path = require('path');
const EMPLOYEE_FILE = path.join(__dirname, '../data/employees.json');

class EmployeeRepository {
  constructor() {
    if (!fs.existsSync(EMPLOYEE_FILE)) {
      fs.writeFileSync(EMPLOYEE_FILE, JSON.stringify([]));
    }
  }

  _readData() {
    const data = fs.readFileSync(EMPLOYEE_FILE);
    return JSON.parse(data);
  }

  _writeData(data) {
    fs.writeFileSync(EMPLOYEE_FILE, JSON.stringify(data, null, 2));
  }

  getAll() {
    return this._readData();
  }

  getById(id) {
    return this._readData().find(emp => emp.id === id);
  }

  add(employee) {
    const data = this._readData();
    data.push(employee);
    this._writeData(data);
  }

  update(id, newEmployeeData) {
    const data = this._readData();
    const index = data.findIndex(emp => emp.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...newEmployeeData };
      this._writeData(data);
      return true;
    }
    return false;
  }

  delete(id) {
    let data = this._readData();
    const originalLength = data.length;
    data = data.filter(emp => emp.id !== id);
    this._writeData(data);
    return originalLength !== data.length;
  }
}

module.exports = EmployeeRepository;
