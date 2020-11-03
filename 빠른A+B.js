// 백준 15552. 빠른A+B => 시간초과 미해결문제

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];
let inputCount = -1;
let i = 0;
let lineSum = [];

rl.on('line', (line) => {
    input.push(line);
    if (inputCount === -1) {
        inputCount = Number(input.shift());
    } else {
        lineSum.push(input[i].split(' '));
        console.log(Number(lineSum[i][0]) + Number(lineSum[i][1]));
        i++;
        inputCount--;
        if(inputCount === 0){
            rl.close();
        }
    }
}).on('close', () => {
    process.exit();
});