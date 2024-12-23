import "../css/TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ todo }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(todo.id);
  };

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={todo.isDone}
        type="checkbox"
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   // todo 객체의 속성들만 비교
//   if (prevProps.todo.id !== nextProps.todo.id) return false;
//   if (prevProps.todo.isDone !== nextProps.todo.isDone) return false;
//   if (prevProps.todo.content !== nextProps.todo.content) return false;
//   if (prevProps.todo.date !== nextProps.todo.date) return false;

//   return true;
// });
