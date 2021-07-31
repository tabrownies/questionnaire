const yaml = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('../Documentation/SampleQuizzes/Example1/text.yml', 'utf8');

let quiz = yaml.parse(file);

console.log(yaml.stringify(quiz));