// https://www.acmicpc.net/problem/2438, 별 찍기 - 1
// node 2438 1시간, 2시간
// 20분 이상 고민해보시고... 답지보시거나, 일요일에 오셔서
// 어떻게 접근하는가?
// 변수로 저장을 해놓는다.
// 2중 for문으로 루프를 돌린다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (a) {

  for(let i = 1; i <= 5; i++){
    console.log('*'.repeat(i));
  }


  const arr = ['*','*','*','*','*'];
  arr.forEach(function(e,index){
      console.log(e.repeat(index + 1));
  });


  var star = '';
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

  rl.close();
}).on('close', function () {
  process.exit();
});

  rl.close();
}).on('close', function () {
  process.exit();
});

// 구현능력 길러주는 훈련
