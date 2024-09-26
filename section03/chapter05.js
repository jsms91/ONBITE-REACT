//3.5 원시타입 VS 객체타입
//1. 원시타입(Number, String, Boolean...) :
//값 자체로서 변수에 저장되고 복사된다.
//불변값이다.

let p1 = 1;
let p2 = p1;
console.log("p1 :" + p1); //1
console.log("p2 :" + p2); //1

p2 = 2;
console.log("수정한 p2 :" + p2); //2
console.log("p1 :" + p1); //1

console.log("----------");

//2. 객체타입(Object, Array, Function...) :
//참조값을 통해 변수에 저장되고 복사된다.
//가변값이다.

let o1 = { name: "홍길동" };
let o2 = o1;

console.log("o1 : " + o1.name);
console.log("o2 : " + o2.name);

o2.name = "김철수"; //o2와 o1은 참조값이 같기 때문에 o2.name으로 값을 변경하면 o1.name이 참조하는 값도 같이 변경된다.
console.log("수정된 o2 : " + o2.name);
console.log("o1 : " + o1.name);

//따라서 이렇게 할 경우 의도치 않은 문제가 발생할 수 있기 때문에
//let o1 = {...o1}로 선언하여 새로운 참조값을 생성해 원본객체가 수정될 수 없게한다.

//정리
//얕은 복사
//let o1 = { name: "홍길동" };
//let o2 = o1; --> 객체의 참조값을 복사, 원본객체가 수정될 수 있어 위험

//깊은 복사
//let o1 = { name: "홍길동" };
//let o1 = {...o1} --> 새로운 객체를 생성하면서 프로퍼티만 따로 복사 함,
//원본객체가 수정될 일이 없어 안정하다.

console.log("----------");

let a1 = { name: "김철수" };
let a2 = a1;
let a3 = { ...a1 };

console.log(a1 === a2); //true
console.log(a1 === a3); //false
console.log(JSON.stringify(a1) === JSON.stringify(a3)); //true
//JSON.stringify() : 자바스크립트 내장 함수, 객체를 문자열로 변환하는 기능

//정리
//얕은 비교
//a1 === a2 --> 참조값을 기준으로 비교

//깊은 비교
//JSON.stringify(a1) === JSON.stringify(a3) --> 객체를 문자열로 변환하여 비교,
//JSON.stringfy 등의 내장 함수를 이용해야 함
