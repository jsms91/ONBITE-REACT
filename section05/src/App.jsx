import "./App.css";
//~5.5
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";

//5.6
import { useState } from "react";

//5.7
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam ";

//5.11
function App() {
  return (
    <>
      <HookExam />
    </>
  );
}
//5.8
// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   );
// }

//5.7 -> 5.6에서 추가한 Bulb,Counter 컴포넌트로 따로 생성해서 분류(분류하지 않으면 App이 부모로서 자식컴포넌트가 관련없어도 실행되어 분류)
// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

//5.6
// function App() {
//   const [count, setCount] = useState(0); //count(값),setCount(count 값을 설정하는 함수)
//   const [light, setLight] = useState("OFF");

//   return (
//     <>
//       <div>
//         <h1>{light}</h1>
//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           {light === "ON" ? "끄기" : "켜기"}
//         </button>
//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }

//~5.5
// function App() {
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       <Button {...buttonProps} />
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <Header />
//       </Button>
//     </>
//   );
// }

export default App;
