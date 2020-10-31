// 백준 8393. 합

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = '';
let rtn = 0;
rl.on('line', (line) => {
    input = Number(line);
}).on('close', () => {

    for (let i = 1; i <= input; i++) {
        rtn += i;
    }
    console.log(rtn);
    process.exit();
})