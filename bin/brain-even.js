#!/usr/bin/env node
import readlineSync from 'readline-sync';
import helloMan from './src/cli.js';
import { name } from './src/cli.js';
// helloMan();
const isEven = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
    let winCount = 0;
    while (winCount < 3) {
        const question = Math.floor(Math.random() * 100);
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        let correctAnswer = question % 2;
        if (correctAnswer === 1) {
            correctAnswer = 'no';
        } else if (correctAnswer === 0) {
            correctAnswer = 'yes';
        }
        if (correctAnswer === answer) {
            console.log('Correct!');
            winCount = winCount + 1;
        } else if (correctAnswer !== answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}`);
            return;
        }
    }
    if (winCount === 3) {
        console.log(`Congratulations, ${name}`);
    }
};
isEven();
export { isEven };
