// 2839

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', (line) => {
    input = line;
}).on('close', () => {
    let bags = 0;
    while (true) {
        if (input % 5 === 0) {
            console.log(input / 5 + bags);
            break;
        } else if (input <= 0) {
            console.log(-1);
            break
        }
        input = input - 3;
        bags++;
    }
});