// 2805

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map((el) => parseInt(el)));
}).on('close', () => {
    let N = input[0][0];
    let M = input[0][1];

    let tree = input[1];
    let cuttingH = tree.reduce((prev, curr) => {
        return prev > curr ? curr : prev;
    });
    let result = tree.reduce((acc, cur) => acc + cur, 0) - N * cuttingH;

    if (result <= M) {
        return console.log(cuttingH - Math.ceil((M - result) / N));
    }

    let low = cuttingH;
    let high = tree.reduce((prev, curr) => {
        return prev > curr ? prev : curr
    });
    let mid = Math.floor((low + high) / 2);

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        result = tree.map((el) => (el - mid) >= 0 ? el - mid : 0).reduce((acc, cur) => acc + cur, 0);

        if (result === M) {
            return console.log(mid);
        }
        if (result < M) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log(result < M ? mid - 1 : mid);

    process.exit();
});

/*
4 7
20 15 10 17
*/
