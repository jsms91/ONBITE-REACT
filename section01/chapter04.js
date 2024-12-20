//1. 변수

let age;
age = 30;

//2. 상수
const birth = "1997.01.07"; //상수는 변하지 않는 값을 사용
//birth = "1991.09.09" 초기화한 상수값은 변경할 수 없다.(에러)
//const a; 상수는 선언과 동시에 초기화를 해야한다(에러)

//3. 변수 명명규칙(네이밍 규칙)
//3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

//3-2. 변수의 이름은 숫자를 사용할 수 없다.
let name1;
let $1name;

//3-3. 예약얼르 사용할 수 없다.
//let if, let let, let const 등 예약어를 변수명으로 사용할 수 없다.

//4. 변수 명명 가이드(어떤 의미,용도로 사용하려는지 생각하고 변수명을 지어야 한다. 다른 사용자가 이해할 수 있도록)
let salesCount = 1;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;
