import DiaryEditor from "components/DiaryEditor";
import DiaryList from "components/DiaryList";
import "css/style.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";


function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const getData = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/comments')
   .then((res) => res.json());

   const initData = res.slice(0,20).map((it) => {
      return{
        author:it.email,
        content:it.body,
        emotion : Math.floor(Math.random()*5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++,
      }
   });

   setData(initData);
  };

  useEffect(() => {
      getData();
  }, []);

  const onCreate = useCallback(
    (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
   };
   dataId.current += 1;
   setData((data)=>[newItem, ...data]);
  }, []);


  const onRemove = useCallback((targetId) => {
      // 삭제 전달 받은걸 재 배열 후 전달
      setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

   //수정완료
   const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) => it.id === targetId ? {...it, content: newContent} : it )
    );
  }, []);


  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>

        <div>전체일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>

      <DiaryList diaryList ={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
