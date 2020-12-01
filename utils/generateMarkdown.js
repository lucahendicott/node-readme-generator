// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.titleInput  }

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [Credits](#credits)  
* [License](#license)  


## Installation  
${data.installInput  }

## Usage  
${data.usageInput  }

## License  
${data.licenseInput  }

`;
}

module.exports = generateMarkdown;
