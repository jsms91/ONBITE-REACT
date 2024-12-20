// 객체(2)
// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal.age);
console.log(animal.name);
console.log("age" in animal);
console.log("color" in animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "송도",
  //메서드
  sayHi: function () {
    console.log("세이 하이");
  },
  sayHello: () => console.log("세이 헬로우"),
  //메서드 선언
  sayHo() {
    console.log("세이 호우");
  },
};
person.sayHi();
person.sayHello();
person["sayHo"]();
