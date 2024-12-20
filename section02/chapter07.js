// 3.7 배열 메서드 1. 요소 조작

//6가지의 요소 조작 메서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
// arr1.push(4, 5, 6, 7);
const newLength = arr1.push(4, 5, 6, 7); //변경된 배열의 길이를 반환

console.log(arr1); //1,2,3,4,5,6,7
console.log(newLength); //7

console.log("----------");

//2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop(); //뽑힌 아이템을 popedItem에 저장

console.log([popedItem]); //3
console.log(arr2); //1,2

console.log("----------");

//3. shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem, arr3);

console.log("----------");

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2];
const newLength2 = arr4.unshift(0);

console.log(newLength2, arr4);

console.log("----------");

//5. slice
//마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 변환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //2번인덱스값부터 5번인데스 앞까지
let sliced2 = arr5.slice(2); //앞에서 2개 짜르고 출력
let sliced3 = arr5.slice(-1); //뒤어서 1개만 출력

console.log(sliced); //3,4,5
console.log(arr5); //1,2,3,4,5
console.log(sliced2); //3,4,5
console.log(sliced3); //5

console.log("----------");

//6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3];

let concatedArr = arr6.concat(arr7);
let concatedArr2 = arr7.concat(arr6);
console.log(concatedArr); //1,2,3
console.log(concatedArr2); //3,1,2
