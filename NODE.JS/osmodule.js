//OS 모듈을 추출합니다
var os = require('os');
var url = require('url');
var querystring = require('querystring');

//모듈을 사용합니다
console.log("hostname :", os.hostname());
console.log("OS Type :",os.type());
console.log("Platform :",os.platform());
console.log("Architecher :",os.arch());
console.log("Release :",os.release());
console.log("Uptime :",os.uptime());
console.log("Loading :",os.loadavg());
console.log("Totalmem :",os.totalmem());
console.log("Freemem :",os.freemem());
/* console.log("Cpus :", os.cpus());
console.log(os.networkInterfaces());
 */

/*
// url모듈의 메서드
parse(urlStr [, parseQueryString = false, slashesDenoteHost = false])//URL문자열을 RUL객체로 변환해 리턴합니다.
format(urlOjb)
resolve(from, to) */

//var parsedOject = url.parse('http://www.hanb.co.kr/trackback/978-89-7914-874-9');
//console.log(parsedOject);

var parsedObject = url.parse('http://www.hanb.co.kr/book/look.html?isbn = 978-89-7914-874-9');
console.log(querystring.parse(parsedObject.query));
