import DiaryEditor from "components/DiaryEditor";
import DiaryList from "components/DiaryList";
import "css/style.css";
import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";


const reducer = (state, action) => {
  switch(action.type) {
    case "INIT" : {
      return action.data
    }
    case "CREATE" : {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case "REMOVE" : {
      return state.filter((it)=>it.id !== action.targetId);
    }
    case "EDIT" : {
      return state.map(
        (it)=> it.id === action.targetId ? 
        {...it, content:action.newContent} : it
      );
    }
      default : return state;
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function App() {
  //reducer
  const [data, dispatch] = useReducer(reducer, []);

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
   

   dispatch({type:"INIT", data:initData});
  };

  useEffect(() => {
      getData();
  }, []);

  const onCreate = useCallback(
    (author, content, emotion) => {
     dispatch({type: 'CREATE', data:{ author, content, emotion, id : dataId.current}})
     dataId.current += 1;
  }, []);


  const onRemove = useCallback((targetId) => {
      // 삭제 전달 받은걸 재 배열 후 전달
      dispatch({type : 'REMOVE', targetId})
  }, []);

   //수정완료
   const onEdit = useCallback((targetId, newContent) => {

    dispatch({type: 'EDIT', targetId, newContent})
  }, []);


  const memoizedDispatches = useMemo(()=> {
    return {onCreate, onRemove, onEdit};
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
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor />

            <div>전체일기 : {data.length}</div>
            <div>기분 좋은 일기 개수 : {goodCount}</div>
            <div>기분 나쁜 일기 개수 : {badCount}</div>
            <div>기분 좋은 일기 비율 : {goodRatio}</div>

          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
