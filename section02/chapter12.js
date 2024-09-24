// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //익명함수
  //   console.log("funcB");
};
varB();

// 2. 화살표 함수

// (1)
// let varC = function() {
//     return 1;
// }

// (2)
// let varC = () => {
//   return 1;
// };

// (3)
let varC = () => 1;

//(4)
let varD = (value) => value + 1;

//(5)
// let varD = (value) => {
//     console.log("중간에 작성할 내용");
//     return value + 1;
// }

console.log(varC());
console.log(varD(100));
