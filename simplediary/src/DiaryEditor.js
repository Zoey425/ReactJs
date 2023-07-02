import React, { useState } from "react";

const DiaryEditor = () => {

  const [state, setState] = useState({
    author : "",
    content : "",
    levelOfFeeling : 1,
  })

   const handleChangeState = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,  //스프레드 연산자 
      [e.target.name] : e.target.value,
    })
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

      <button>일기 작성하기</button>
  </div>
  )
}


export default DiaryEditor;