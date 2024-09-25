//3.1 Truthy & Falsy

if (123) {
  // -> Truthy한 값(참 같은 값)
  console.log("123 is true");
} else {
  console.log("123 is false");
}

if (undefined) {
  // -> Falsy한 값(거짓 같은 값)
  console.log("undefined is true");
} else {
  console.log("undefined is false");
}

//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f4) {
  //거짓의 !이기 때문에 참
  console.log("falsy");
}

//2. Truthy한 값
//-> 7가지 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

//3. 활용사례
function printName(person) {
  //   if (person === undefined || person === null) { 또는
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "홍길동" };
// let person; //오류 발생(undefined) -> 따라서 위에 if문을 사용

printName(person);

console.log("******* 기타 *******");
//기타
//==는 타입을 자동 변환하여 비교하고, ===는 엄격하게 타입까지 고려한다.
// 0 == false는 true로 false(0), true(1) 숫자로 자동변환한다.
// 0 === false는 false
// 이유는 JavaScript에서는 불리언 값 false는 숫자 0으로, true는 1로 강제 타입 변환되며,
// 이러한 변환은 JavaScript의 동적 타입 특성 때문에 발생한다.

//동적, 정적
//동적 타입: 변수의 타입이 실행 시간에 결정되고, 변경될 수 있음 (예: JavaScript, Python, Ruby).
let value = 1;
console.log(value);
value = "하나";
console.log(value);
//정적 타입: 변수의 타입이 컴파일 시간에 결정되고, 변경할 수 없음 (예: Java, C++, C#).
//int num = 1;
//num = "하나" (x) -> String num1 = "하나";
