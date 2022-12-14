// manager constructor test cases
const Manager = require("../lib/Manager");

describe("Manager", () => {
  // Test for all use cases when initializing a new manager
  describe("initialization", () => {
    it("should create a new manager object with a name, id, email and office number", () => {
      const manager = new Manager("Adam", "123", "test@test.com", "123");

      expect(manager.name).toEqual("Adam");
      expect(manager.id).toEqual("123");
      expect(manager.email).toEqual("test@test.com");
      expect(manager.officeNumber).toEqual("123");
    });
  });
});