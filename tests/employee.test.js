const Employee = require("../lib/Employee");


test("Will getRole() retrieve 'Employee' from the employee object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const employee = new Employee(testName, testId, testEmail);

    expect(employee.getRole()).toBe("Employee");
});

test("Will getName() retrieve name value from employee object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const employee = new Employee(testName, testId, testEmail);

    expect(employee.getName()).toBe("Jon");
});

test("Will getId() retrieve id value from employee object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const employee = new Employee(testName, testId, testEmail);

    expect(employee.getId()).toBe(300);
});

test("Will getEmail() retrieve email value from employee object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const employee = new Employee(testName, testId, testEmail);

    expect(employee.getEmail()).toBe("jon@gmail.com");
});

test("Create an employee object", () => {
    const employee = new Employee("Jon", 300, "jon@gmail.com");

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})