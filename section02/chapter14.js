//3.14 비동기 작업 처리하기
//async / await

//1.async
//어떤 함수를 비도기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 변환해주는 그런 키워드

// async function getData() {
//   return {
//     name: "홍길동",
//     id: "id1",
//   };
// }

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "홍길동",
        id: "id1",
      });
    }, 1500);
  });
}

console.log(getData());

//2.await
//async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  //getData함수가 반환하는 Promise의 비동기 작업이 종료될 때까지 기다렸다가 결과값을 data 변수에 저장
  const data = await getData();
  //await 함수는 async가 앞에 없는 함수에서 사용할 경우 오류가 발생한다.
  console.log(data);
}

printData();
