// 연산자2(특수)
// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> unll, undefined가 아닌 값을 찾아내는 연산자

let var0 = null;
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; //var1이 undefined이기 때문에 var2 10이 출력
console.log(var4);
let var5 = var0 ?? var3; //var0이 null이기 때문에 var3 20이 출력
console.log(var5);
let var6 = var2 ?? var3; //둘다 null, undefined일 경우 앞에 var2가 출력
console.log(var6);

//사용 예시
let userName = "톰";
let userNickName = "Tom";
console.log(userName ?? userNickName); //이름을 출력하는데 없으면 닉네임으로 표시

// 2. typeOf 연산자
// -> 값의 타입을 문자열로 반환하는 긴으을 하는 연산자

let var7 = 10; // 처음에는 숫자형으로 설정했다가
var7 = "문자열"; // 다시 문자열값을 입력하여 문자열로 설정

let t1 = typeof var7; //var7 어떤 타입인지 출력
console.log(t1); //var7의 마지막 값이 문자열 타입이었기 때문에 string를 출력(숫자면 number, 불리언이면 boolean이 출력)

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
