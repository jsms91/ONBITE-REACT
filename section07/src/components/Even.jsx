import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수
    // 클린업 함수는 해당 컴포넌트가 언마운트(Unmount) 될 때 호출
    return () => {
      console.log("UnMount");
    };
  }, []);
  return <div>짝수 입니다.</div>;
};

export default Even;
