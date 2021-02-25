// 2439

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
    input = line;
}).on('close', () => {

    for (let i = 1; i <= input; i++) {
        let result = '';
        let space = input - i;
        for (let j = 0; j < space; j++) {
            result += ' ';
        }
        let stars = input - space;
        for (let j = 0; j < stars; j++) {
            result += '*';
        }
        console.log(result);
    }
});