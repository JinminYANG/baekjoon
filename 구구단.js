// 백준 - 2739. 구구단

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    for (let i = 1; i <= 9; i++) {
        console.log(line + " * " + i + " = " + (line*i));
    }
    rl.close();
}).on('close',() => {
    process.exit();
});
