// 3.9 배열 메서드 3. 배열 변형

//5가지 배열 변형 메서드

//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "홍길동", hobby: "테니스" },
  { name: "김철수", hobby: "테니스" },
  { name: "김나박", hobby: "요리" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
const tennisPeople1 = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);
console.log(tennisPeople1);

console.log("----------");

//2. map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결괄값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult);
//활용
let names = arr1.map((item) => item.name);
console.log(names);

console.log("----------");

//3. sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "c", "a"];
arr3.sort();
console.log(arr3); //a,b,c

let arr3_1 = [10, 3, 5];
// arr3_1.sort(); // -> 10,3,5 정렬되지 않고 그대로이기 때문에 다음처럼 정렬해야한다.

//오름차순 정렬
arr3_1.sort((a, b) => {
  if (a > b) {
    //b가 a앞에 와라
    return 1; //-> b,a 배치
  } else if (a < b) {
    //a가 b앞에 와라
    return -1; //-> a,b 배치
  } else {
    //바꾸지 마라
    return 0; // a,b 자리 그대로 유지
  }
});

console.log(arr3_1);

//내림차순 정렬
arr3_1.sort((a, b) => {
  if (a > b) {
    //a가 b앞에 와라
    return -1; //-> a,b 배치
  } else if (a < b) {
    //b가 a앞에 와라
    return 1; //-> b,a 배치
  } else {
    //바꾸지 마라
    return 0; // a,b 자리 그대로 유지
  }
});

console.log(arr3_1);

console.log("----------");

//4. toSorted(가장 최근에 추가된 최신 함수)
//정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["a", "c", "b"];
const sorted = arr5.toSorted();

console.log(arr5); //"a","c","b"
console.log(sorted); //"a","b","c"

console.log("----------");

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "my", "name"];
const joined = arr6.join();
const joined1 = arr6.join("-");

console.log(joined); //hi,my,name
console.log(joined1); //hi-my-name
