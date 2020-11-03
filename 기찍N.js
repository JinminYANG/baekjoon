// 백준 2742 - 기찍 N

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = 0;
let returnToMessage = '';
rl.on('line', (line) => {
    input = line;
}).on('close', () => {
    for (let i = input; i >= 1; i--) {
        returnToMessage += i + "\n";
    }
    console.log(returnToMessage);
    process.exit();
});