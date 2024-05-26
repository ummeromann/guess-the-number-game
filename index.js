"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const systemGeneratedNumber = Math.floor(Math.random() * 10);
const { userGuess } = await inquirer_1.default.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 to 10):"
});
if (userGuess === systemGeneratedNumber) {
    console.log("congratulation! you guessed it right.");
}
else {
    console.log(`oops! the correct number was ${systemGeneratedNumber}. Better luck next time!`);
}
