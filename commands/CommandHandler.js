const readline = require('readline');

class CommandHandler {
  constructor(employeeService) {
    this.employeeService = employeeService;
  }

  start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'EMPLOYEE-MANAGER> '
    });

    console.log('Welcome to Employee Management System!');
    rl.prompt();

    rl.on('line', async (line) => {
      const [command, ...args] = line.trim().split(' ');

      try {
        switch (command) {
          case 'add':
            await this._handleAdd(rl);
            break;
          case 'list':
            this._handleList();
            break;
          case 'get':
            this._handleGet(args[0]);
            break;
          case 'delete':
            this._handleDelete(args[0]);
            break;
          case 'update':
            await this._handleUpdate(rl, args[0]);
            break;
          case 'exit':
            rl.close();
            break;
          default:
            console.log('Unknown command.');
        }
      } catch (err) {
        console.log(`❌ Error: ${err.message}`);
      }

      rl.prompt();
    });

    rl.on('close', () => {
      console.log('👋 Goodbye!');
      process.exit(0);
    });
  }

  async _handleAdd(rl) {
    const id = await this._ask(rl, 'ID: ');
    const name = await this._ask(rl, 'Name: ');
    const role = await this._ask(rl, 'Role: ');
    const salary = parseFloat(await this._ask(rl, 'Salary: '));
    this.employeeService.createEmployee(id, name, role, salary);
    console.log('✅ Employee added!');
  }

  _handleList() {
    const employees = this.employeeService.listEmployees();
    console.table(employees);
  }

  _handleGet(id) {
    const emp = this.employeeService.getEmployee(id);
    if (emp) {
      console.table([emp]);
    } else {
      console.log('❌ Employee not found.');
    }
  }

  _handleDelete(id) {
    if (this.employeeService.deleteEmployee(id)) {
      console.log('✅ Deleted successfully.');
    } else {
      console.log('❌ Employee not found.');
    }
  }

  async _handleUpdate(rl, id) {
    const emp = this.employeeService.getEmployee(id);
    if (!emp) {
      console.log('❌ Employee not found.');
      return;
    }

    const name = await this._ask(rl, `New name (${emp.name}): `);
    const role = await this._ask(rl, `New role (${emp.role}): `);
    const salary = await this._ask(rl, `New salary (${emp.salary}): `);

    const updatedData = {
      ...(name && { name }),
      ...(role && { role }),
      ...(salary && { salary: parseFloat(salary) }),
    };

    this.employeeService.updateEmployee(id, updatedData);
    console.log('✅ Employee updated!');
  }

  _ask(rl, query) {
    return new Promise((resolve) => {
      rl.question(query, (answer) => resolve(answer));
    });
  }
}

module.exports = CommandHandler;
