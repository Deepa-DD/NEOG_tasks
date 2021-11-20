var score=0;
var chalk = require('chalk');
var commonBasicUser=require("readline-sync");
var userName=commonBasicUser.question("Please enter your userName :   ")
console.log("Hey",userName,"Welcome in Deepa's quiz")chalk.magentachalk.magenta
console.log(chalk.magenta("**** let's stat ****"))
function plyaMyQuiz(newQuestion,newAnswer){
    userAnswer=commonBasicUser.question(newQuestion)
    if (userAnswer===newAnswer){
        score+=1
        console.log(chalk.green("You entered",userAnswer,"\n**** THIS IS RIGHT ****\nNow your score is : ",score,"\n---------------------"))
    }else{
        console.log(chalk.red("You entered",userAnswer,"\nTHIS IS WRONG ANSWER \nStill your score is : ",score,"\n---------------------"))
    }
}
QuesAnsList=[{
    Question:"1. Where I want to GO ? :   ",
    Answer:"paris"
},{
    Question:"2. What I love to EAT ? :   ",
    Answer:"chicken"
},{
    Question:"3. What is my HOBBY ? :   ",
    Answer:"painting"
},{
    Question:"4.Where I am from ? :   ",
    Answer:"delhi"
},{
    Question:"5. What I am pursuing ? :   ",
    Answer:"studing"
}]
for (var number=0; number<QuesAnsList.length; number++){
    plyaMyQuiz(newQuestion=QuesAnsList[number].Question,newAnswer=QuesAnsList[number].Answer)    
}
console.log("yayyyyyy....;)\nYour totle score is :  ",score)
    



