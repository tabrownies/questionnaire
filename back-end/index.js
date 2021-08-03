// external dependencies
const yaml = require('yaml');
const express = require('express');

// external devDependencies
const fs = require('fs');
const { urlencoded } = require('express');

// quiz paths, will eventually be deleted
const sampleQuizzesPath = '../Documentation/SampleQuizzes'
const exampleQuizPath = sampleQuizzesPath + '/Example1/text.yml'

//read and parse the yaml file in a primitive way. In the future the parsing will be more advanced
const file = fs.readFileSync(exampleQuizPath, 'utf8');
let quiz = yaml.parse(file);
delete quiz.version;
delete quiz['times played'];

//print the quiz file
console.log(yaml.stringify(quiz));

// set up express app
let app = new express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// get basic quiz details
app.get('/quiz/details', async (req,res)=>{
    try{
        let quizDetails = {
            name: quiz.name,
            numQuestions: quiz.questions.length,
        }
        res.send(quizDetails);
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});


app.listen(3000, ()=> console.log('Questionnaire listening on port 3000!'))

