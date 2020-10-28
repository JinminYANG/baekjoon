// 백준 10430. 나누기

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', () => {
    console.log((input[0] + input[1]) % input[2]);
    console.log(((input[0] % input[2]) + (input[1] % input[2])) % input[2]);
    console.log((input[0] * input[1]) % input[2]);
    console.log(((input[0] % input[2]) * (input[1] % input[2])) % input[2]);
    process.exit();
});
