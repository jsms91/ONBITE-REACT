import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업테이트: 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  /*
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps
  */

  const onClickButton = (value) => {
    setCount(count + value); //비동기로 동작(여기서 함수를 호출했지만 동작은 나중에 이뤄짐 즉, 호출은 되었지만 완료된 것은 아님)
    //console.log(count) 변경되기 이전에 값을 출력
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
