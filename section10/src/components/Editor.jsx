import "../css/Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    //엔터로 추가
    if (e.keyCode === 13) {
      onSumit();
    }
  };

  const onSumit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeyDown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSumit}>추가</button>
    </div>
  );
};

export default Editor;
