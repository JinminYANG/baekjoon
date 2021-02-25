// 10818

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let max, min = 0;

function findMax(input) {
    max = input.split(' ').reduce((prev, curr) => {
        return Math.max(prev, curr);
    });

    return max;
}

function findMin(input) {
    min = input.split(' ').reduce((prev, curr) => {
        return Math.min(prev, curr);
    });

    return min;
}


rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    console.log(findMin(input[1]), findMax(input[1]));
    process.exit();
});