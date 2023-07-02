import React, { useState } from "react";

const DiaryEditor = () => {

  const [state, setState] = useState({
    author : "",
    content : "",
    emotion : 1,
  })

   const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
      ...state,  //스프레드 연산자 
      [e.target.name] : e.target.value,
    })
   }


   const handleSubmit  = () => {
      console.log(state);
      alert("등록완료");
   }

  return (
  <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
          name="author"
          value={state.author}
          onChange={handleChangeState}
          />
      </div>
      <div>
        <textarea
           name="content"
          value={state.content}
          onChange={handleChangeState}/>
      </div>
      <div>
      <span>오늘의 감정점수 : </span>

        <select name='emotion' value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1 : 매우좋음</option>
          <option value={2}>2 : 좋음</option>
          <option value={3}>3 : 보통</option>
          <option value={4}>4 : 나쁨</option>
          <option value={5}>5 : 매우나쁨</option>
        </select>
      </div>
      <button onClick={handleSubmit}>일기등록</button>
  </div>
  )
}


export default DiaryEditor;