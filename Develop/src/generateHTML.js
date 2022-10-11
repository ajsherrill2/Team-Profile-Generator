// Manager card
const renderManager = function (manager) {
  return `
          <li class="card col-10 col-sm-10 col-md-4 col-lg-3">
            <div class="card-header">
              <h1>${manager.name}</h1>
              <p><i class="fa-solid fa-mug-hot"></i> Manager</p>
            </div>
            <div class="card-body">
              <p>ID: ${manager.id}</p>
              <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p>Office Number: ${manager.officeNumber}</p>
            </div>
          </li>
        `;
};

// Engineer card
const renderEngineer = function (engineer) {
  return `
          <li class="card col-10 col-sm-10 col-md-4 col-lg-3">
            <div class="card-header">
              <h1>${engineer.name}</h1>
              <p><i class="fa-solid fa-glasses"></i> Engineer</p>
            </div>
            <div class="card-body">
              <p>ID: ${engineer.id}</p>
              <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
          </li>
        `;
};

// Intern card
const renderIntern = function (intern) {
  return `
          <li class="card col-10 col-sm-10 col-md-4 col-lg-3">
            <div class="card-header">
              <h1>${intern.name}</h1>
              <p><i class="fa-solid fa-user-graduate"></i> Intern</p>
            </div>
            <div class="card-body">
              <p>ID: ${intern.id}</p>
              <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p>School: ${intern.school}</p>
            </div>
          </li>
        `;
};

// push array to page
generateHTML = (data) => {
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = renderManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = renderEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = renderIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generateTeamProfile(employeeCards);
  return generateTeam;
};

// Generates markup for HTML
const generateTeamProfile = (employeeCards) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <div class="app-title">
        <h1>My Team</h1>
      </div>
    </header>

    <main>
      <div class="col-12">
        <ul class="card-list">
          <!-- Team Cards -->
          ${employeeCards}
        </ul>
      </div>
    </main>

    <script
      src="https://code.jquery.com/jquery-3.6.1.min.js"
      integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
      crossorigin="anonymous"
    ></script>
    <!-- jQuery UI <script> tag -->
    <script
      src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
      integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY="
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

module.exports = {
  generateHTML,
};
