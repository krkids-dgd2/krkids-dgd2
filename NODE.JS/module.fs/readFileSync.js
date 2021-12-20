var fs = require('fs');

//readFileSync 메서드 
/* fs.readFile('textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});
 */

var data = 'hello world .. !';

//모듈을 사용합니다
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');
