// intern constructor test cases
const Intern = require("../lib/intern");

describe("Intern", () => {
  // Test for all use cases when initializing a new
  describe("initialization", () => {
    it("should create a new intern object with a name, id, email and school name", () => {
      const intern = new Intern("Adam", "123", "test@test.com", "UT");

      expect(intern.name).toEqual("Adam");
      expect(intern.id).toEqual("123");
      expect(intern.email).toEqual("test@test.com");
      expect(intern.school).toEqual("UT");
    });
  });
});