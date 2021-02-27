// 8958

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    for (let i = 1; i < input.length; i++) {
        let score = 0;
        let sum = 0;
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 'O') {
                score += 1;
            } else {
                score = 0;
            }
            sum += score;
        }
        console.log(sum);
    }
    process.exit();
});