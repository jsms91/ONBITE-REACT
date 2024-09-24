//함수
function getArea(width, height) {
  // width, height -> 매개변수
  //   let width = 10;
  //   let height = 20;
  let area = width * height;

  function another() {
    console.log("함수 안에 함수 = 중첩함수");
  }

  another();
  return area;
  //   console.log("직사각형의 넓이는 : " + area);
}

let area1 = getArea(10, 20); //10, 100  -> 인수
console.log(area1);

//호이스팅
// -> 끌어올리다
// 함수 호출을 먼저하고 선언문이 밑에 있어도 호출하는데는 문제가 없다.
