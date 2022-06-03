// Node modolus
const inquirer = require('inquirer');
const fs = require('fs');

// prompts for the input

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'Please answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'How do you describe your application?',
            naem: 'description',
            validate: (value) => { if (value) { return true } else { return 'Please answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'What is the Table Of Content for your application?',
            name: 'table',
            validate: (value) => { if (value) { return true } else {return 'Plese answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'How to install your application?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'How to use your application?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}}
        },
        // list of licenses
        {
            type: 'list',
            message: 'What type of license did you use for your application?',
            choices: ['The MIT License', 'The GPL license', 'Apache License', 'GNU License', 'N/A'],
            name: 'license',
            validate: (value) => { if (value) { return true } else {return 'Please select from the list to continue!'}}
        },

        {
            type: 'input',
            message: 'What is the Contribution Guidlines to your application?',
            name: 'contributing',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'How to test your application',
            name: 'test',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}}
        },

        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'git',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}},
        },

        {
            type: 'input',
            message: 'What is your E-mail?',
            name: 'email',
            validate: (value) => { if (value) { return true } else {return 'Please answer the question to continue!'}},
        }
    ]
).then(({
    title,
    description,
    table,
    installation,
    usage,
    license,
    contributing,
    test,
    git,
    email
}) => {
    // template to be used
    const template = `# ${title}
    
    * [License](#license)
    * [Table Of Content](#table)
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Test](#test)
    #Table Of Content
    ${table}
    ##Description
    ${description}
    ##Installation
    ${installation}
    ###Usage
    ${usage}
    ##Contribution Guidlines
    ${contributing}
    ##Test
    ${test}
    #License
    * This application is covered under ${license}.
    
    #Contact
    * Github: ${git}
    * E-mail: ${email}`;
}
)