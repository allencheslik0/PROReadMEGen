// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([{
            type: "input",
            message: "What is the Title of your Project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Provide a short description explaining the what why and how of your project",
            name: "Description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? If no instructions needed write NONE",
            name: "Installation"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use",
            name: "Usage"
        },
        {
            type: "input",
            message: "Who are the Contributers for this project?",
            name: "Credits"
        },
        {
            type: "list",
            message: "please select a license",
            choices: [
                "MIT",
                "ISC",
                "ODbL",
                "GPLv3",
                "NONE"
            ],
            name: "License"

        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "Username"
        },
        {
            type: "input",
            message: "what is your email address",
            name: "Contact"
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync("./Output/README.md", generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => writeToFile((data)))
        .catch((err) => console.error(err))
}

// Function call to initialize app
init();