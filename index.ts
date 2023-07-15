const lines : string[] = [];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line: string) {
  lines.push(line);
});
reader.on('close', function () {
    main(lines);
});

const main = (input: string[]) => {
    const [S] = input[0].split(" ");
    const [N] = input[1].split(" ").map(Number);
    
    console.log(S, N);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));