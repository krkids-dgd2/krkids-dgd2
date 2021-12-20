//시간 측정을 시작함
console.time('alpha');

var output = 1;
for(var i = 1; i <=10; i++) {
    output *= i;
}
console.log('Result:', output);

//시간 측정을 종료함
console.timeEnd('alpha');
