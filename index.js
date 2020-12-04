const readlineSync = require('readline-sync');
const chalk = require('chalk');


var userName = readlineSync.question("Hey! What's your name? ");

console.log("Welcome "+userName+" do you know Famous Indian Ads");

console.log("\n");

var score = 0;

var highScores = [
  {
    name: "Hrithik",
    score: 8
  },
  {
    name: "Tiger",
    score: 7,
  }
]


// Question Answer function
function play(question,answer,options){

  console.log(chalk.bold("\nQ:Fill in the blank! \n "+question));
  options.forEach((optn)=>{
    console.log(chalk.greenBright(optn));
  })
  var userAnswer = readlineSync.question("");
  userAnswer = userAnswer.toUpperCase()

  if(userAnswer === answer){
    console.log(chalk.green("\nYou are right!"));
    score++;
    console.log(chalk.green("Your score is: "+score))
    console.log("\n");
  }
  else{
    console.log(chalk.red("\nYou are wrong!"));
    console.log(chalk.yellowBright("Your score is: "+score))
    console.log("\n");
  }
}

var questions = [
  q1 = {
    question: "Doodh si safedi ______ se aayi, rangeen kapda bhi khil khil jaaye",
    answer: "a",
    options:  ["a: nirma","b: surf excel","c: tide"]
  },

  q2 = {
    question: "Surakshit kaale mere baal, _______ ne kiya kamaal",
    answer: "b",
    options:  ["a: parachute","b: vaismol","c: streax"]},

   q3 = {
    question: "Tum husn pari, tum jaan e jahaan, tum sabse haseen, tum sabse jawaaan saundarya saabun ________",
    answer: "b",
    options:  ["a: Lux", "b: nirma","c: WildStone"]
  },

   q4 = {
    question: "Taste mai best! Mummy aur _______",
    answer:  "a",
    options:  ["a: everest","b: mdh","c: chicken"]
  },

   q5 = {
    question: "Kitchen king ho ya garam masaala, pav bhaji ya chunky chaat masaala asli masaale sach sach _______", 
    answer: "c",
    options:  ["a: everest","b: kitchen king","c: mdh"]
  },

   q6 = {
    question: "Aaya mausam thande thande _________ ka", 
    answer: "c",
    options:  ["a: ice cream", "b: ponds", "c: dermicool"]
  },

   q7 = {
    question: "_______ doodh peeta hai India!", 
    answer: "a",
    options:  ["a: amul", "b: dairy queen", "c: Hershey's"]
  },

   q8 = {
    question: "Bole mere lips, I love _______ chips", 
    answer: "b",
    options: [ "a: chacha","b: uncle","c: aunty"]
  },
];



for(var i = 0;i<questions.length;i++){
  var userInput = readlineSync.question("Press e to exit and c to continue\n");
  if(userInput === "e"){
    break;
  }
  play(questions[i].question, questions[i].answer.toUpperCase(),questions[i].options);
}

if(score>4){
console.log(chalk.bgGreenBright("Your final score is: "+score));
}
else{
  console.log(chalk.bgRedBright("Your final score is: "+score));
}


if(score>=7){
  console.log(chalk.bgGreenBright("\n Congratulations you're on of the top scorers!\n Send me a screenshot to update your name in the list!\n"))
}

var userChoice = readlineSync.question("\n To check high scores, press s\n")
if(userChoice === "s"){
  highScores.forEach((score)=>{
    console.log("name: "+score.name+", score: "+score.score)
  })
}