// employee constructor test cases
const Engineer = require("../lib/engineer");
// const Employee = require("../lib/employee");

describe("Engineer", () => {
  // Test for all use cases when initializing a new
  describe("initialization", () => {
    it("should create a new engineer object with a name, id, email and GitHub username", () => {
      const engineer = new Engineer("Adam", "123", "test@test.com", "test123");

      expect(engineer.name).toEqual("Adam");
      expect(engineer.id).toEqual("123");
      expect(engineer.email).toEqual("test@test.com");
      expect(engineer.github).toEqual("test123");
    });
  });
});