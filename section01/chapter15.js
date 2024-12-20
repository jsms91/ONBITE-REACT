// 객체(1)
// 1. 객체
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  //key: value
  name: "송도",
  age: 10,
  hobby: "운동",
  job: "Developer",
  extra: {},
  10: 20,
  "like cat": true, //띄어쓰기가 필료할 때는 key에 ""를 붙여야 한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); //typescript 공부하면 알게되는데 지금은 무시

let age = person["age2"];
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "back developer"; // 수정
person["favoriteFood"] = "연어"; // 추가
console.log(person.job);
console.log(person["favoriteFood"]);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "job" in person;
let result3 = "favoriteFood" in person;
console.log(result1);
console.log(result2);
console.log(result3);
