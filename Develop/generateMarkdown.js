// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "NONE") {
        return ""
    } else {
        return `![License](https://img.shields.io/badge/License.svg)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'GPLv3') {
        return 'https//www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'ODbl') {
        return 'https//opendatacommons.org/licenses/odbl/';
    } else if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC';
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "NONE") {
        return "";
    } else {
        return license;
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licsec = renderLicenseSection(data.License);
    return `
# Title 
${data.Title}

# Description
${data.Description}
#Table of Contents
*[Installation](#Installation)
*[Usage](#Usage)
*[Credits](#Credits)
*[License](#License)
*[Username](#Username)
*[Contact Info](#Contact Info)

## Installation
There are going to be specific dependencies needed to run this app correctly: ${data.Installation}
## Usage
${data.Usage}
## Credits
${data.Credits}
## License
These licenses were used:  ${licsec}
${renderLicenseBadge(data.License)}
${renderLicenseLink(data.License)}
## Username
You can find me on github at: ${data.Username}
## Contact Info
You can contact me at ${data.Contact}


`;
}

module.exports = generateMarkdown;