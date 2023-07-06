import React, {  useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {


  const authorInput = useRef();
  const contentTextarea = useRef();
  // uesRef 으로 생성한 레퍼런스 객체

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
      // console.log(state);

      if(state.author.length < 1){
        authorInput.current.focus();
        // uesRef 으로 author Input 태그를 불러와 focus를 한다.
        return;
      }

      if(state.content.length < 5) {
        contentTextarea.current.focus();
        return;
      }

      onCreate(state.author, state.content, state.emotion);
      alert("등록완료");
      setState({ 
        author : "",
        content : "",
        emotion : 1,
     });
   };



  return (
  <div className="DiaryEditor">
      <h2>DIARY</h2>
      <div>
        <input 
          ref = {authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="이름을 입력하세요"
          />
      </div>
      <div>
        <textarea
          ref={contentTextarea}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="내용을 입력하세요"
          />
      </div>
      <div>
      <span>오늘의 감정점수 : </span>

        <select name='emotion' value={state.emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>일기등록</button>
  </div>
  )
};


export default React.memo(DiaryEditor);