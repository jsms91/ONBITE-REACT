import { getEmotionImage } from "../util/get-emotion-image";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ item }) => {
  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${item.id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${item.id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`img_section img_section_${item.emotionId}`}
      >
        <img src={getEmotionImage(item.emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(item.createdDate).toLocaleDateString()}
        </div>
        <div className="content">{item.content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEditPage} />
      </div>
    </div>
  );
};

export default DiaryItem;
