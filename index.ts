import inquirer from "inquirer";
const systemGeneratedNumber = Math.floor(Math.random()*10);

const {userGuess}: {userGuess:number}  = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 to 10):"
});

if(userGuess === systemGeneratedNumber){
    console.log("congratulation! you guessed it right.");
}else{
    console.log(`oops! the correct number was ${systemGeneratedNumber}. Better luck next time!`)
}
