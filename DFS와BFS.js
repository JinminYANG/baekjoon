// 1260

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {

    let info = input[0].split(' ');
    let n = info[0] / 1;
    let m = info[1] / 1;
    let v = info[2] / 1;

    let link = [];
    for (let i = 1; i < input.length; i++) {
        link.push(input[i].split(' ').map(element => element / 1));
    }

    let graph = makeGraph(n, link) ;                // 인접행렬 그래프
    let visit = Array(n).fill(false);         // 방문 여부를 체크할 visit 배열   
    let result = [];                                // 결과 담을 배열
    let letsDFS = dfs(v, visit, graph, result);     
    console.log(letsDFS.join(' '));

    visit = Array(n).fill(false);              // 초기화
    result = [];                                     // 초기화
    let letsBFS = bfs(v, visit, graph, result);
    console.log(letsBFS.join(' '));
    process.exit();
});

function bfs(v, visit, graph, result) {
    // bfs로 순회하기 위한 큐
    let q = [];
    
    // 시작 vertex를 큐에 넣고 방문 여부를 true로 바꿈
    q.push(v);
    visit[v - 1] = true;


    while (q.length !== 0) {
        // 큐의 가장 첫번째에 있는 원소를 뽑아 현재 vertex로 지정
        let curr = q.shift();
        result.push(curr);

        for (let i = 0; i < graph[0].length; i++) {
            if (graph[curr - 1][i] === 1 && visit[i] === false) {   // 현재 vertex와 연결되어있으면서 방문하지 않은 vertex가 있으면
                q.push(i + 1);        // 큐에 삽입 
                visit[i] = true;      // 방문여부 true로 바꿈
            }
        }
    }
    return result;

}

function dfs(v, visit, graph, result) {
    result.push(v);
    visit[v - 1] = true;
    // 맨 처음 시작하는 vertex를 result에 담고 방문 여부를 true로 바꿔줌

    let curr = v - 1;
    for (let i = 0; i < graph[0].length; i++) {
        if (graph[curr][i] === 1 && visit[i] === false) {   // 현재 vertex와 연결되어 있고, 방문도 안했으면
            dfs(i + 1, visit, graph, result);            // 해당 vertex 재귀로 방문
        }
    }
    return result;
}

// 인접행렬로 그래프를 만드는 함수
function makeGraph(n, link) {
    let arr = [];
    
    // 2차원 배열의 arr 생성
    for (let i = 0; i < n; i++) {
        arr.push(Array(n).fill(0));
    }

    // 무방향 그래프 형식으로 연결
    for (let i = 0; i < link.length; i++) {
        let x = link[i][0];
        let y = link[i][1];
        if (arr[x - 1][y - 1] === 0 && arr[y - 1][x - 1] === 0) {
            arr[x - 1][y - 1] = 1;
            arr[y - 1][x - 1] = 1;
        }
    }
    return arr;
}