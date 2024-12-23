import "../css/List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const [search, setSearch] = useState("");
  const todos = useContext(TodoStateContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) //모두 소문자로 변환해서 검색
    );
  };
  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  //의존성 배열 : deps

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>TodoList 🎄</h4>
      <div>
        <div>total : {totalCount} </div>
        <div>done : {doneCount} </div>
        <div>notDone : {notDoneCount} </div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />; //키값과 value값인데 value는 객체
        })}
      </div>
    </div>
  );
};

export default List;
