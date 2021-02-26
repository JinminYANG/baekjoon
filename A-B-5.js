// 10952

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].split(' ').reduce((prev, curr) => {
            if (parseInt(prev) === 0 || parseInt(curr) === 0) {
                process.exit();
            } else {
                return parseInt(prev) + parseInt(curr);
            }
        }));
    }
});