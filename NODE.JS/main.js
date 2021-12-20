//생성한 모듈을 다른 스크립트 파일에서 추출할때는
//require()함수를 사용합니다
//CHANGE

//모듈을 추출합니다
var mymodule = require('./mymodule.js');

//모듈을 사용합니다
console.log('abs(-273) = %d', mymodule.abs(-273));
console.log('circleArea(3) = %d', mymodule.circleArea(3));
console.log('circleArea(9) = %d', mymodule.abs(mymodule.circleArea(9)));