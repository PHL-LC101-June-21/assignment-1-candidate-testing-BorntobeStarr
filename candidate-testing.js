const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters?", 
  "(5 + 3)/2 * 10 = ?", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 
  "What is the minimum crew size for the ISS?"
  ];
let correctAnswer = [
  "Sally Ride", 	
  "true", 
  "40", 
  "Trajectory", 
  "3"];
let candidateAnswer = "";
let questions;
let correctAnswers = [
  "Sally Ride", 	
  "true", 
  "40", 
  "Trajectory", 
  "3"];
let candidateAnswers= [];
let points = [];


function askForName () {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("Please enter candidates name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i=0; i<question.length; i++) {
candidateAnswer = input.question (question[i]);
  candidateAnswers.push(candidateAnswer);
  if (candidateAnswer.toUpperCase() === correctAnswer[i].toUpperCase()) {
    points.push(20);
   console.log (`Great work ${candidateName}, ${candidateAnswer} is the correct answer!`)
    console.log  ("\n");
  } 
  else {
    points.push(0);
   console.log(`Thank you for your input ${candidateName}, the answer ${candidateAnswer} , you provided was incorrect. The correct answer was ${correctAnswer[i]}`);
    console.log  ("\n");
  } 
}

} 


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log (`Here is a copy of the answers you typed today ${candidateAnswers} and the points you recieved from each answer ${points}`);
//console.log ();
let grade = points[0] + points[1] + points[2] + points[3] + points[4];
console.log (`>>> Overall Grade: ${grade}%<<<`)
 console.log  ("\n");
 if (grade >=80 ) {
   console.log (">>> Status = Passed<<<");
 } else {
    console.log (">>> Status = failed<<<");
 }
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log  ("\n");
  console.log ("Welcome "  + candidateName + "! This is step one to completing the astronaut training program quiz!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};