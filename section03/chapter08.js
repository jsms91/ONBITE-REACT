// 3.8 배열 메서드 2. 순회와 탐색

//5가지 요소 순회 및 탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 가각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

console.log(doubleArr);

console.log("----------");

//2. includes
//배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

console.log("----------");

//3. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); //arr3가 [2,2,2] 경우 가장 앞에 인덱스 번호인 0을 저장
console.log(index);

console.log("----------");

//4. findIndex
//모든 요소를 순회하면서, 콜백함수를 만족하는 그런
//특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

const findIndex2 = arr4.findIndex((item) => item % 2 !== 0);

console.log(findIndex); //0, 만족하는 값이 없으면 -1을 반환

console.log("----------");

//indexOf, findIndex 차이
//indexOf는 엄격한 동등성(===) 비교를 사용하므로,
//두 객체가 같은 메모리 주소를 가지지 않는 한 indexOf로 찾을 수 없기 때문에 -1을 반환.

let objArr = [{ name: "홍길동" }, { name: "김철수" }]; //여기서 name:"홍길동" 객체와

const indexOfobj = objArr.indexOf({ name: "홍길동" }); //여기서 새로 생성되는 name:"홍길동"은 내용은 같아도 참조값이 다르기 떄문에 동일한 객체로 인식하지 않는다.
console.log(indexOfobj); //-1

//findIndex 메서드는 콜백 함수를 통해 조건을 검사하므로 객체의 특정 속성 값들을 비교할 수 있다.
const findIndexobj = objArr.findIndex((item) => item.name === "김철수");
console.log(findIndexobj); //1

console.log("----------");

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ nname: "홍길동" }, { name: "김철수" }];
const finded = arr5.find((item) => item.name === "김철수");
console.log(finded);
