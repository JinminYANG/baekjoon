// 2562

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(parseInt(line));
}).on('close', () => {
    let max = input.reduce((prev, curr) => {
        return Math.max(prev, curr);
    });
    console.log(max);
    let maxIdx = input.indexOf(max);
    console.log(maxIdx + 1);
});