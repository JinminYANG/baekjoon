// 10871

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let fixed = parseInt(input[0].split(' ')[1]);
    let mins = [];

    input[1].split(' ').map((element) => {
        if (element < fixed) {
            mins.push(parseInt(element));
        }
    });

    console.log(mins.join(' '));
});