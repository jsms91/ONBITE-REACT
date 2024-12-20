//3.10 Date 객체와 날짜

//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

let date2 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date2);

console.log("----------");

//2. 타임 스탬프
//특정 시간이  "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자 값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

console.log("----------");

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //1월은 0부터 시작이기 때문에 +1을 해준다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

console.log("----------");

//4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); //0부터 1월이라 2는 3월 Mar

console.log(date1);

console.log("----------");

//5. 시간을 여러 포맷으로 출력하지
console.log(date1.toDateString());
console.log(date1.toLocaleString()); //현지화된 시간표기
