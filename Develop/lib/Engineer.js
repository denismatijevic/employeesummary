// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// requiring employee.js
const Employee = require("./Employee");

// use empoyee template 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.getRole = () => "Engineer";
        this.getGithub = () => this.github;
    };
}

module.exports = Engineer;