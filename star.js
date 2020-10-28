// 백준 2438 - 별찍기 -1

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let stars = "*";
    for (let i = 0; i < line; i++) {
        console.log(stars);
        stars += "*";
    }
}).on('close', function () {
    process.exit();
});