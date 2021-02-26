// 1931

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let length = parseInt(input[0]);
    input.shift();

    let list = [];
    for (let i of input) {
        list.push(i.split(' ').map((el) => parseInt(el)));
    }

    list.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    let count = 1;
    let tmp = list[0][1];

    for (let i = 1; i < length; i++) {
        if (tmp <= list[i][0]) {
            tmp = list[i][1];
            count += 1;
        }
    }

    console.log(count);
    process.exit();
});