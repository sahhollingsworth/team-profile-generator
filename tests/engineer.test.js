const Engineer = require("../lib/Engineer");

test("Will getRole() retrieve 'Engineer' from the Engineer object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testGithubUser = "jonGH";
    const employee = new Engineer(testName, testId, testEmail, testGithubUser);

    expect(employee.getRole()).toBe("Engineer");
});

test("Will getGithubUser() retrieve githubUser value from manager object", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const testGithubUser = "jonGH";
    const employee = new Engineer(testName, testId, testEmail, testGithubUser);

    expect(employee.getGithubUser()).toBe("jonGH");
});

test("Is the passed value being added to the githubUser key?", () => {
    const testName = "Jon";
    const testId = 300;
    const testEmail = "jon@gmail.com";
    const engineer = new Engineer(testName, testId, testEmail, "jonGH");

    expect(engineer.getGithubUser()).toBe("jonGH");
});

test("Create an Engineer object", () => {
    const employee = new Engineer("Jon", 300, "jon@gmail.com", "jonGH");

    expect(typeof(employee)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.githubUser).toEqual(expect.any(String));
})