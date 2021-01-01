const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const solution = (line) => {
    let count = 1;
    line.forEach(element => {
        console.log(element);
        let answer = 0;
        let first = element[0];
        let second = element[2];
        element.split(" ").map(el => {
            answer += parseInt(el);
            console.log(answer);
        });
        console.log(`Case #${count}: ${first} + ${second} = ${answer}`);
        count += 1;
    });
}

const input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution(input.slice(1));
    process.exit();
});
