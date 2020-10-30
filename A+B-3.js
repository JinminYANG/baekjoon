// 백준 10950. A+B -3

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    // input = line.split(' ').map((el) => parseInt(el));
    input.push(line);


}).on('close', () => {
    let testCaseCount = Number(input.shift());
    let numbers = [];

    for (let i = 0; i < testCaseCount; i++) {
        numbers.push(input[i].split(' '));
    }

    for (let i = 0; i < testCaseCount; i++) {
        console.log(Number(numbers[i][0]) + Number(numbers[i][1]));
    }
    process.exit();
});
