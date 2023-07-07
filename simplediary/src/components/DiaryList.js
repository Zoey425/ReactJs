import { useContext } from "react";
import DiaryItem from "./DiaryItem.js";
import { DiaryStateContext } from "App.js";

const DiaryList = () => {

  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>List</h2>
      <h5>{diaryList.length}개의 일기가 있습니다.</h5>
      <div>
      {
          diaryList.map((it) => (
           <DiaryItem key={it.id} {...it} />
           // 모든 데이터를 spread 연산자로 전달.
          ))
        }
      </div>
    </div>
  );

}


DiaryList.defaultProps={
  diaryList: [],
};


export default DiaryList;