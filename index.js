const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of this application?",
        name: "titleInput",
    },
    {
        type: "input",
        message: "Enter a description about this application.",
        name: "descriptionInput",
    },
    {
        type: "input",
        message: "Enter application installation instructions.",
        name: "installInput",
    },
    {
        type: "input",
        message: "Enter application usage information.",
        name: "usageInput",
    },
    {
        type: "input",
        message: "Enter anyone else involved with this project along with a link to their github.",
        name: "creditsInput",
    },
    {
        type: "input",
        message: "Enter any recourses or tutorials used to create this application with links to the recources.",
        name: "resourcesInput",
    },
    {
        type: "input",
        message: "Enter any contribution guidelines for this application.",
        name: "contributionsInput",
    },
    {
        type: "list",
        message: "Which type of license would you like to use?",
        name: "licenseInput",
        choices: ["MIT", "other", "Apache", "GPLv2" ],
    },
    {
        type: "input",
        message: "Enter any testing instructions for this application.",
        name: "testInput",
    },
    {
        type: "input",
        message: "Enter your github user name.",
        name: "githubInput",
    },
    {
        type: "input",
        message: "Enter your email.",
        name: "emailInput",
    },
]) 
.then((res) => {
    console.log(res)
    
    fs.writeFile("README.md", generateMarkdown(res), (err) => {
        if (err) throw err;
        console.log("complete")
    })
})

