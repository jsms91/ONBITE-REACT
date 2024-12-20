//3.11 동기와 비동기
console.log(1);

setTimeout(() => {
  //비동기적으로 작동하는 함수
  console.log(2);
}, 3000); //3초후 2가 출력 따라서 1,3,2 순으로 출력됨

console.log(3);
