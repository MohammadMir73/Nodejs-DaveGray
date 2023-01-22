const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');

// data.employees[0].firstname = 'David';
// // console.log(data.employees);

// fs.writeFileSync('../../data/employees.json', JSON.stringify(data.employees))

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee)

module.exports = router;