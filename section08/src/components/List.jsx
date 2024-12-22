import "../css/List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

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

  return (
    <div className="List">
      <h4>TodoList 🎄</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ); //키값과 value값인데 value는 객체
        })}
      </div>
    </div>
  );
};

export default List;
