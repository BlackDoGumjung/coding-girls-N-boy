// https://www.acmicpc.net/problem/2441, 별 찍기 - 4
// node 2441


for(let i = 0; i < 5; i++ ){
    console.log(' '.repeat(i) + '*'.repeat(5-i));
}

['*', '*', '*', '*', '*'].forEach(function(e,i){
    console.log(' '.repeat(i) + '*'.repeat(5-i));
})

for (var i = 0; i < 5; i++) {
    var string = "";
  
    for (var j = 0; j < i; j++) {
      string = string+" ";
    }
    for (var j = 0; j <= 4-i; j++){
      string = string+"*";
  }
    console.log(string);
  }
