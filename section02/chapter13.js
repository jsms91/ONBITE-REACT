//3.13 비동기 작업 처리하기
//2. Promise *****
//Promise란?
//비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//비동기 작업을 감싸는 객체
// 대기(작업이 아직 완료되지 않은 상태) - Pending 상태 -> 성공(비동기 작업이 성공적으로 마무리 된 상태) Full - Fulfilled
//                                                  -> 실패(비동기 작업이 실패한 상태) - Rejected

//1)
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

//2)
// const promise = new Promise((resolve, reject) => {
//   //비동기 작업 실행하는 함수
//   //excutor
//   setTimeout(() => {
//     const num = 10;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num은 숫자가 아닙니다.");
//     }
//   }, 2000);
// });

//3) 함수로
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    //excutor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(10);

// p.then((value) => {
//   console.log(value);

//   const newP = add10(value); //add10(20)

//   newP.then((value) => {
//     console.log(value); //30
//   });
// });

//위에 깊이 들어가는 문제를 해결하는 방법
add10(0)
  .then((value) => {
    console.log(value); //10
    return add10(value); //add10(10) -> 결과값 PromiseResult : 20
  })
  .then((value) => {
    console.log(value); //20
    return add10("value"); //add10(20) -> 결과값 PromiseResult : 30
  })
  .then((value) => {
    console.log(value); //"num은 숫자가 아닙니다."
    return add10(value); //add10("num은 숫자가 아닙니다.")
  }) //return 값이 reject이기 때문에 then이 아닌 catch로 가서 종료
  .then((value) => {
    console.log(value);
    return add10("value");
  })
  .then((value) => {
    console.log(value);
    return add10("value");
  })
  .catch((error) => {
    console.log(error); //"num은 숫자가 아닙니다."
  });

// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

//////////////////////////////////////////////////

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

//then 메서드
// -> 그 후에
//성공후 실행 및 결과값을 매개변수로 제공(실패 후에는 실행 x)
// promise.then((value) => {
//   console.log(value); //20
// });

// //catch
// //실패했을때 실행
// promise.catch((error) => {
//   console.log(error); //"num은 숫자가 아닙니다."
// });

//then,catch 같이
// promise
//   .then((value) => {
//     console.log(value); //20
//   })
//   .catch((error) => {
//     console.log(error); //"num은 숫자가 아닙니다."
//   });
