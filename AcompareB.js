// 백준 1330. 두 수 비교하기

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', () => {
    let first = Number(input[0]);
    let second = Number(input[1]);

    if (first > second) {
        console.log(">");
    } else if (first === second) {
        console.log("==");
    } else {
        console.log("<");
    }
    process.exit();
});