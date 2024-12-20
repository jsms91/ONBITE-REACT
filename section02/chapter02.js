//3.2 단락 평가

let varA = false;
let varB = true;

//AND 연산자 varA가 false면 뒤에 varB값은 상관없이 false
console.log(varA && varB);
//OR 연산자 varA가 true면 뒤에 varB값은 상관없이 true
console.log(varA || varB);

console.log("----------");

function returnFalse() {
  console.log("False 함수");
  //   return false;
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  //   return true;
  return 10;
}

console.log(returnFalse() && returnTrue()); //단락평가가 작동되어 returnTrue() 함수 호출은 생략
console.log("----------");
console.log(returnTrue() && returnFalse()); //단락평가가 작동되지 않은 앞에가 true이므로 뒤에도 접근해야 함
console.log("----------");
console.log(returnTrue() || returnFalse()); //단락평가가 작동되어 앞에가 true이므로 뒤에 함수 접근필요 없음
console.log("----------");
console.log(returnFalse() || returnTrue()); //Truthy,Falsy한 값이 출력이 된다.

//단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  //True || True 경우 앞에 Truthy 값
  //True && True 경우 뒤에 Truthy 값
  console.log(name || "person 값이 없음");
}

printName();
printName({ name: "홍길동" });
