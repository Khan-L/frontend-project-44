import readlineSync from 'readline-sync';

const helloMan = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    return name;
};
const name = helloMan();
export default helloMan;
export { name };
