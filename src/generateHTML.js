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
    //////////////////////////////////////////////////////////////////
</body>
</html>`
return html;
}

// funtion to create html person objects 

module.exports = generateHTML;