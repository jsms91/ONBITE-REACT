//3.6 반복문으로 배열과 객체 순회하기
//순회(Interation)이란?
//배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

//1. 배열 순회
let arr = [1, 2, 3];
//1. 배열 인데스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //1,2,3
}

console.log("---------");

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]); //4,5,6,7,8
}

console.log("---------");

//1.2 for of 반복문(배열을 순회)
for (let item of arr) {
  //arr배열에 있는값이 차례대로 item에 순서대로 저장
  console.log(item); //1,2,3
}

console.log("---------");

//2. 객체 순회
let person = {
  name: "홍길동",
  age: 27,
  hobby: "운동",
};

//2.1 Object.keys 사용
//-> 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
console.log("---------");
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
  //   console.log(key, person[key]);
}

//추가사항
//객체의 속성에 접근하는 두 가지 방법(점 표기법, 대괄호 표기법)

// 1. 점표기법(객체의 속성에 접근할 때 .(점)을 사용하여 접근)
// - 간결하고 읽기 쉬워, 가장 많이 사용되는 방식
// - 속성명은 반드시 유효한 자바스크립트 식별자여야 하며, 공백이나 특수 문자를 포함할 수 없다.
// let person = {
//     name: "홍길동",
//   };

//   console.log(person.name); // "홍길동"

// 2. 대괄호 표기법(객체의 속성에 접근할 때 대괄호 []를 사용하여 접근)
// - 속성명을 문자열로 지정할 수 있고, 변수를 사용해 동적으로 속성에 접근할 수 있다.
// - 속성명에 공백, 특수 문자, 숫자로 시작하는 경우에도 접근할 수 있다.
// let person = {
//     "full name": "홍길동",  // 공백이 포함된 속성명
//   };

//   console.log(person["full name"]); // "홍길동"

//   let key = "full name";
//   console.log(person[key]); // "홍길동"

console.log("----------");

//2.2 Object.values
//-> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

console.log("----------");

for (let value of values) {
  console.log(value);
}

console.log("----------");
//2.3 for in(객체를 순회)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
