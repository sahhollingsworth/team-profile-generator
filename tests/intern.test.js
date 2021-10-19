const Intern = require("../lib/Intern");

test("Will getRole() retrieve 'Intern' from the intern object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testSchool = "Uo Hard Knocks";
    const employee = new Intern(testName, testId, testEmail, testSchool);

    expect(employee.getRole()).toBe("Intern");
});

test("Will getSchool() retrieve school value from intern object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testSchool = "Uo Hard Knocks";
    const employee = new Intern(testName, testId, testEmail, testSchool);

    expect(employee.getSchool()).toBe("Uo Hard Knocks");
});

test("Is the passed value being added to the school key?", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const intern = new Intern(testName, testId, testEmail, "Uo Hard Knocks");

    expect(intern.getSchool()).toBe("Uo Hard Knocks");
});

test("Create an Intern object", () => {
    const employee = new Intern("Jon", 300, "jon@gmail.com", "Uo Hard Knocks");

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})