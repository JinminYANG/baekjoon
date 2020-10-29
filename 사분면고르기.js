// 백준 14681. 사분면 고르기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    // input = line.split(" ").map((el) => parseInt(el));
    input.push(line);   // 첫 줄에 x, 두번 째 줄에 y 가 주어지는 형식이므로 이렇게 사용해야한다.
}).on('close', () => {
    let x = input[0];
    let y = input[1];

    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (x > 0 && y < 0) {
        console.log(4);
    }

    process.exit();
});