// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// requiring employee.js
const Employee = require("./Employee");

// use employee templet
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getRole = () => "Manager";
        this.getOfficeNumber = () => this.officeNumber;
    };
}

module.exports = Manager;