// 형변환
// 1.묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020 출력 10을 알아서 문자열로 묵시적 형변환

// 2. 명시적 형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1); //문자열 10을 숫자로 형변환
console.log(10 + strToNum1); //위에서 문자열 10을 숫자로 형변환 했으므로 20을 출력

let str2 = "10개";
let strToNum2 = parseInt(str2); //숫자가 아닌 뒤에 문자열은 생략하여 앞에 숫자만 형변환 단, 맨앞이 숫가아닌 경우 형변환이 않는다.
console.log(1 + strToNum2); //1+10의 결과인 11 출력

// -> 숫자 -> 문자열
let num1 = 20;
let numToString = String(num1); // 숫자를 문자열로 형변환
console.log(numToString + " 입니다."); //20 입니다. 출력
