const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];


const answers = [];
const collectAnswers = (questions, done) => {
    const [firstQuestion] = questions;

    rl.question(firstQuestion, response => 
        { 
            questionAnswered(done, response);
         });
}
const questionAnswered = (done, answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
        rl.question(questions[answers.length], response => questionAnswered(done, response))
    }
    else {
        done(answers);
    }
}

collectAnswers(questions, answers => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});