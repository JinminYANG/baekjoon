// 4344

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', () => {
    for (let i = 1; i < input.length; i++) {
        let count = parseInt(input[i].splice(0, 1).toString());
        let sum = input[i].reduce((cal, curr) => {
            return cal + curr;
        }, 0);

        let aver = sum / count;
        let ratio = 0;
        let student = 0;

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] > aver) {
                student++;
            }
        }

        ratio = (student/count) * 100;
        console.log(ratio.toFixed(3) + '%');

    }

    process.exit();
});