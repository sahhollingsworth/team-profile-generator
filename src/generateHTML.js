// Generate the actual teamprofilepage html file using the data (team array) from command line user input
function generateHTML(team) {
    let html =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Reset stylesheet -->
    <link rel="stylesheet" href="css/reset.css">
    <!-- Bootstrap and FontAwesome link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- CSS stylesheet -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="images/teamprofiles_icon.png">
    <title>Team Profile Page</title>
</head>
<body>
    <!-- Full width jumbotron, padding top and bottom definition -->
    <header class="jumbotron jumbotron-fluid text-white justify-content-center align-items-center py-3">
        <div class="container text-center py-3">
            <h1>My Team</h1>
        </div>
    </header>
    <main>
        <section class="container-fluid justify-content-center mt-3 pt-1">
            <div class="container pt-2 justify-content-center">
                ${renderEmployees(team)}
            </div>
        </section>
    </main>
</body>
</html>`
return html;
}

// add ${renderEmployees(team)} to html template where cards will be generated

// funtion to create html cards from person object data in the team array
function renderEmployees(team) {
    // create a empty array to store all cards created
    let employeeCards = [];
    // iterate through to team array to create a card for each employee and add it to the employeeCards array
    for (var i = 0; i < team.length; i++) {
        employeeCards.push(`<div class="card card-background shadow shadow-offset-down-md shadow-offset-left-md">
            <div class="card-body card-header py-3">
                <h5 class="card-title">${team[i].getName()}</h5>
                <h6 class="card-title">${team[i].getRole()}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush border m-1">
                    <li class="list-group-item">ID: ${team[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                    ${renderExtendedInfo(team[i])}
                </ul>
            </div>
        </div>`)
    }
    // join creates a string of all card html by concatenating all of the elements in the employeeCards array. "" strips apostrophes, commas, and spaces between objects, in this case html
    return employeeCards.join("");
}

// function to add class-specific elements to the card list in addition to Employee elements. 'Employee' used as placeholder
function renderExtendedInfo(Employee) {
    // Evaluate the array for each (employee) object. For each object, get the Role value
    switch(Employee.getRole()) {
        // if role = Manager then do add the officeNumber element li
        case "Manager":
            return `<li class="list-group-item">Office Number: ${Employee.getofficeNumber()}</li>`
        // if role = Engineer then add the githubUser element as a li
        case "Engineer":
            return `<li class="list-group-item">Github: <a href="https://github.com/${Employee.getGithubUser()}" target="_blank">${Employee.getGithubUser()}</a></li>`
        // if role = Intern then add the school element li
        case "Intern":
            return `<li class="list-group-item">School: ${Employee.getSchool()}</li>`
    }
}

module.exports = generateHTML;