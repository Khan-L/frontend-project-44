#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import name from './src/cli.js';

const brainCalc = () => {
    console.log('What is the result of the expression?');
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const opperants = ['+', '-', '*'];
    const opperant = opperants[Math.floor(Math.random() * 3)];
    const question = num1 + opperant + num2;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    console.log(`Your answer: ${answer}`);
};
brainCalc();
export default brainCalc;
