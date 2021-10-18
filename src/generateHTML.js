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
                <div class="card card-background shadow shadow-offset-down-md shadow-offset-left-md">
                    <div class="card-body card-header py-3">
                        <h5 class="card-title">Sarah Hollingsworth</h5>
                        <h6 class="card-title">Bug Creator</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border m-1">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: whatever@gmail.com</li>
                            <li class="list-group-item">Github: sahhollingsworth</li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    </main>
</body>
</html>`
return html;
}

// funtion to create html person objects 

module.exports = generateHTML;