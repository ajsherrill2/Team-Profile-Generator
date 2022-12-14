// employee constructor test cases
const Employee = require("../lib/Employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new employee
  describe("", () => {
    it("should create a new employee object with a name, id, and email", () => {
      const employee = new Employee("Adam", "123", "test@test.com");

      expect(employee.name).toEqual("Adam");
      expect(employee.id).toEqual("123");
      expect(employee.email).toEqual("test@test.com");
    });
  });
});
