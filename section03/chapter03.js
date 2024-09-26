//3.3 구조분해 할당

//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;

console.log(one, two, three, four);

console.log("----------");

//2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 27,
  hobby: "운동",
};
console.log(person.name, person.age, person.hobby);

let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

console.log("----------");

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, myAge, hobby, extra);
};

func(person);
