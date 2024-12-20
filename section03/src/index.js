// console.log("안녕 Node.js");

//3-4

//1. Common JS
// const mouduleData = require("./math");
// const { add, sub } = require("./math");

// console.log(mouduleData.add(1, 2));
// console.log(mouduleData.sub(1, 2));

//2. ES 모듈
// import mul from "./math.js"; //이름 수정도 가능
// import { add, sub } from "./math.js";

//합치는 것도 가능
// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

//3-5
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
