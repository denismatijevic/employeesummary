// TODO: Write code to define and export the Employee class
// building the employee template to be used for manager.js engineer.js and intern.js 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => this.name;
        this.getId = () => this.id;
        this.getEmail = () => this.email;
        this.getRole = () => "Employee";
    };
};

module.exports = Employee;