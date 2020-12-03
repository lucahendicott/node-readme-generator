// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
![badge](https://img.shields.io/badge/license-${data.licenseInput}-brightgreen)   
# ${data.titleInput}  

## Description  
${data.descriptionInput}    

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [Credits](#credits)  
* [Contribution Guidelines](#contribution-guidelines)   
* [License](#license)  
* [Testing](#testing)  
* [Questions](#questions)  

## Installation  
${data.installInput}  

## Usage  
${data.usageInput}  

## Credits  
${data.creditsInput}  
${data.resourcesInput}  

## Contribution Guidelines  
${data.contributionsInput}  

## License  
${data.licenseInput}  

## Testing  
${data.testInput}  

## Questions  
Contact information for any questions about this application:   
* https://github.com/${data.githubInput}  
* ${data.emailInput}  

`;
}

module.exports = generateMarkdown;
