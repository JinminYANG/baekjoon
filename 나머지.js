// 3052

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let divides = input.map((element) => parseInt(element) % 42);

    let diffNum = [];
    divides.forEach((num) => {
        if (diffNum.indexOf(num) === -1) {
            diffNum.push(num);
        }
    });

    console.log(diffNum.length);

    process.exit();
});