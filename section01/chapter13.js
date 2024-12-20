// 1. 콜백함수(다른 함수의 파라미터로써 전달되는 함수)
function main(value) {
  console.log(1);
  console.log(2);
  value();
}

function sub() {
  console.log("sub");
}

main(sub);

//chapter12에서 배운 화살표 함수로 실행
let fun = () => console.log("화살표 함수");
main(fun);

main(() => console.log("콜백 화살표 함수"));

console.log("==========================");

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// (1)
repeat(5, function (idx) {
  console.log(idx);
});
// (2)
repeat(5, (idx) => console.log(idx * 2));

// 이렇게 콜백함수를 사용하게 되면
// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
//이렇게 idx*2를 출력하는 함수를 또 생성할 필요가 없다.
