// 1712

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    const A = input[0] * 1;
    const B = input[1] * 1;
    const C = input[2] * 1;

    const margin = C - B;
    const count = Math.floor(A / margin) + 1;
    console.log(margin <= 0 ? -1 : count);

    process.exit();
});