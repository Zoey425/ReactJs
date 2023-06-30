import React, {useState} from "react";


// useState => { count : 0 };
// 객체를 사용
function Example3() {

  const [state, setState] = useState({ count : 0 });

 
  return(
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click(){
    setState({count : state.count + 1});
  }

}

export default Example3;