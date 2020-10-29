// 백준 9498. 시험 정적

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

let input = '';

rl.on('line', (line) => {
    input = line;
}).on('close', () => {
    if (input >= 90) {
        console.log("A");
    } else if (input >= 80){
        console.log("B");
    } else if (input >= 70){
        console.log("C");
    } else if(input >= 60){
        console.log("D")
    } else{
        console.log("F");
    }
    process.exit();
})