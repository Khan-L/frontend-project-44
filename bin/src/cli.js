import readlineSync from 'readline-sync';
let name;
const helloMan = () => {
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
};
helloMan();
export default helloMan;
export { name };
