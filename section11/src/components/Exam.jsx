import { useReducer } from "react";
import { useState } from "react";
import { useRef } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  //   console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "reset":
      return 0;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMiuns = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  // useState
  const [number, setNumber] = useState(0);
  const plus = () => {
    setNumber(number + 1);
  };

  const reset = () => {
    dispatch({
      type: "reset",
    });
    setNumber(0);
    ref.current = 0;
    setN(ref.current);
  };

  //useRef
  const [N, setN] = useState(0);
  const ref = useRef(0);
  const refPlus = () => {
    ref.current++;
    setN(ref.current);
  };

  return (
    <div>
      <h1>useReducer</h1>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMiuns}>-</button>
      <br />
      <br />
      <h1>useState</h1>
      <h1>{number}</h1>
      <button onClick={plus}>플러스</button>
      <br />
      <button onClick={reset}>초기화</button>
      <br />
      <br />
      <h1>useRef</h1>
      <h1>{N}</h1>
      <button onClick={refPlus}>증가</button>
    </div>
  );
};

export default Exam;
