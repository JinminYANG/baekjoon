// 10951

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
            return parseInt(prev) + parseInt(curr);
        }));
    }
    process.exit();
});