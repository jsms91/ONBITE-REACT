import "./DiaryList.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest"); //최신값을 기본값으로 설정

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate); //오래된 일기가 먼저 배열
      } else {
        return Number(b.createdDate) - Number(a.createdDate); //최신 일기가 먼저 배열
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
          onClick={() => nav("/new")}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
