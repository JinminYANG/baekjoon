// 백준 - 2741. N찍기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    const N = parseInt(line);
    let result = '';
    for(let i=1; i<=N; i++){
        result += i + '\n';  // 결과를 저장하여
    }
    console.log(result); // 한꺼번에 출력하는 것이 시간 단축 방법
}).on('close', () => {
    process.exit();
})

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').split(' ');
//
// let num = Number(input);
//
// for (let i = 1; i <= num; i++) {
//     console.log(i); // 이렇게 한줄한줄 출력하면 시간이 오래걸린다.
// }

