// employee constructor import
const Employee = require('./employee');

// engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;