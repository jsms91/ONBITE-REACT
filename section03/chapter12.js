//3.12 비동기 작업 처리하기
//1. 콜백함수

// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b; //3
//     callback(sum);
//   }, 2000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황(순차적 실행)
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function freezFood(food, callback) {
  setTimeout(() => {
    const freezFood = `냉동된 ${food}`;
    callback(freezFood);
  }, 1500);
}

orderFood((food) => {
  //3초뒤 떡볶이 출력후 2초뒤 식은 떡볶이가 출력
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezFood(food, (freezFood) => {
      console.log(freezFood);
    });
  });
});

//다음과 같이 각각의 비동기 함수가 독립적으로 실행되면 freez, cool, order Food 순서로 출력된다.
// const food = "떡볶이";

// function orderFood(callback) {
//   setTimeout(() => {
//     callback(food);
//   }, 3000);
// }

// function cooldownFood(food, callback) {
//   setTimeout(() => {
//     const cooldownFood = `식은 ${food}`;
//     callback(cooldownFood);
//   }, 2000);
// }

// function freezFood(food, callback) {
//   setTimeout(() => {
//     const freezFood = `냉동된 ${food}`;
//     callback(freezFood);
//   }, 1500);
// }

// orderFood((food) => {
//   //3초뒤 떡볶이 출력후 2초뒤 식은 떡볶이가 출력
//   console.log(food);
// });

// cooldownFood(food, (cooldownFood) => {
//   console.log(cooldownFood);
// });

// freezFood(food, (freezFood) => {
//   console.log(freezFood);
// });
