// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// requiring employee.js
const Employee = require("./Employee");

// use employee templet
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.getRole = () => "Intern";
        this.getSchool = () => this.school;
    };
}

module.exports = Intern;