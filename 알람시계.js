// 백준 2884. 알람 시계

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(" ").map((el) => parseInt(el));

}).on('close', () => {
    let hour = input[0];
    let minute = input[1];

    minute -= 45;
    if (minute < 0) {
        hour -= 1;
        minute = (60 - Math.abs(minute));
    }
    if( hour < 0 ){
        hour = 23;
    }

    console.log(hour + " " + minute);
    process.exit();
})