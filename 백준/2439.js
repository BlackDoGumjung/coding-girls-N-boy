// https://www.acmicpc.net/problem/2439, 별 찍기 - 2
// node 2439

// 첫번째줄은 공백 4 별 1
// 두번째 줄은 공백 3 별 2
// 세번째 줄은 공백 2 별 3
// 네번째 줄은 공백 1 별 4
// 다섯번째 줄은 공백 0 별 5
// 공백은 줄고 별은 늘어나는 방식

// 미리 필요한 값??? 

for(let i = 4; i >= 0; i-- ){
    console.log(' '.repeat(i) + '*'.repeat(5-i))
}

['*','*','*','*','*'].forEach(function(e,i){
    console.log(' '.repeat(4 - i) + '*'.repeat(i + 1))
})


for (var i = 0; i < 5; i++) {
    var string = "";
  
    for (var j = 0; j < 4-i; j++){
      string = string+" ";
  }
    for (var j = 0; j <= i; j++) {
      string = string+"*";
    }
    console.log(string);
  }
