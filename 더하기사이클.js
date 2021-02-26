// 1110

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;
rl.on('line', (line) => {
    input = parseInt(line);
}).on('close', () => {
    let cycle = 0;
    let temp = input;
    let step = 0;
    let isNotSame = true;

    while (isNotSame) {
        cycle++;

        if (temp < 10) {
            step = temp % 10;
        } else {
            step = Math.floor(temp / 10) + (temp % 10);
        }

        temp = (temp % 10).toString() + (step % 10).toString();
        temp = Number(temp);

        if (temp === input) {
            isNotSame = false;
        }
    }

    console.log(cycle);
    process.exit();
});
