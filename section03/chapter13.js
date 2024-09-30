//3.13 비동기 작업 처리하기
//2. Promise *****
//Promise란?
//비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//비동기 작업을 감싸는 객체
// 대기(작업이 아직 완료되지 않은 상태) - Pending 상태 -> 성공(비동기 작업이 성공적으로 마무리 된 상태) Full - Fulfilled
//                                                  -> 실패(비동기 작업이 실패한 상태) - Rejected

// const promise = new Promise((resolve, reject) => {
//   //비동기 작업 실행하는 함수
//   //excutor

//   setTimeout(() => {
//     console.log("안녕");
//     // resolve("성공");
//     reject("실패");
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행하는 함수
  //excutor
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve("num은 숫자 -> " + num);
    } else {
      reject("num은 숫자가 아닙니다. -> " + num);
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
