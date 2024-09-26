//3.4 Spread 연산자와 Rest 매개변수

//1. Spread 연산자
//-> Spread : 흩뿌리다, 펼치다 라는 뜻
//-> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); //[4,1,2,3,5,6]

let obj1 = {
  a: 1,
  b: 2,
};
console.log(obj1);

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); //{a:1,b:2,c:3,d:4}

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

console.log("----------");

//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수

function funcB(one, ...rest) {
  //one에는 1이 저장, 나머지 2,3번째 2,3의 값은 rest에 저장
  //...rest 뒤에는 추가적인 매개변수가 올 수 없다!!
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
