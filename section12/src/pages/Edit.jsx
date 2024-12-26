import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const data = useContext(DiaryStateContext); //전체 일기 데이터
  const [curDiaryItem, setCurDiaryItem] = useState(); //현재 params.id와 일치하는 데이터(일기)

  //현재일기 찾기
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true }); //useEffect를 사용하지 않으면 페이지를 리턴하기 전에 먼저 실행되면 안되기 때문에
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]); //params.id가 바뀔때만 랜더링(실행) 또는 마운트된 이후

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(), //타임스태프 타입으로 변경
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
