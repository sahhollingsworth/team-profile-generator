const Manager = require("../lib/Manager");

test("Will getRole() retrieve 'Manager' from the manager object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testOfficeNumber = 42;
    const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

    expect(employee.getRole()).toBe("Manager");
});

test("Will getOfficeNumber() retrieve officeNumber value from manager object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testOfficeNumber = 42;
    const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

    expect(employee.getOfficeNumber()).toBe(42);
});

test("Is the passed value being added to the officeNumber key?", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const manager = new Manager(testName, testId, testEmail, 42);

    expect(manager.getOfficeNumber()).toBe(42);
});

test("Create a Manager object", () => {
    const employee = new Manager("Jon", 300, "jon@gmail.com", 42);

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

