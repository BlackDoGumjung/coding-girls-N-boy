// https://www.acmicpc.net/problem/2442, 별 찍기 -5
// node 2442

for(let i = 1; i < 11; i+= 2 ){
    console.log(' '.repeat((11-i)/2) + '*'.repeat(i));
}

const arr = ['*','*','*','*','*','*','*','*','*','*','*']
arr.forEach(function(e,i){
    if(i % 2 !== 0){
        console.log(' '.repeat((arr.length - i)/2) + '*'.repeat(i));
    }  
})

var star = '';
for (var i = 0; i < 5; i++) {
    for (var j = 4; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);
