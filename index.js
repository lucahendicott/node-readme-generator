const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "titleInput",
    },
    {
        type: "input",
        message: "Enter application installtion instructions.",
        name: "installInput",
    },
    {
        type: "input",
        message: "Enter application usage information.",
        name: "usageInput",
    },
    {
        type: "list",
        message: "Which type of license would you like to use?",
        name: "licenseInput",
        choices: ["MIT", "other", "Apache", "GPLv2" ],
    },
]) 
.then((res) => {
    console.log(res)})