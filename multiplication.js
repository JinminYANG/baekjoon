// 백준 2588. 곱셈

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let first = Number(input[0]);
    let second = Number(input[1]);

    let hundreds = Math.floor(second / 100);
    let tens = Math.floor(second / 10) - (hundreds * 10);
    let units = second % 10;

    console.log(first * units);
    console.log(first * tens);
    console.log(first * hundreds);
    console.log(first * second);

    process.exit();
});


