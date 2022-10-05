// employee constructor import
const Employee = require('./employee');

// intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;