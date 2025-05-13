const EmployeeRepository = require('./repositories/EmployeeRepository');
const EmployeeService = require('./services/EmployeeService');
const CommandHandler = require('./commands/CommandHandler');

const repo = new EmployeeRepository();
const service = new EmployeeService(repo);
const handler = new CommandHandler(service);

handler.start();
