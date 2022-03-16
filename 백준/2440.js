// https://www.acmicpc.net/problem/2440, 별 찍기 - 3
// node 2440

for(let i = 5; i > 0; i--){
    console.log('*'.repeat(i));
}

const arr = ['*','*','*','*','*']
arr.forEach(function(e, i){
    console.log(e.repeat(5-i));
});

var star = '';
for (var i = 5; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);
