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
    // setState({count : state.count + 1});
    // 위의 코드는 객체로 들어옴

    // 기존 state 값에 의존적으로 변경하고 싶다면, 객체가 아니라 함수로 사용
    // 새로운 state를 받아서 새로운 state를 return 
    setState((state) => {
      return {
        count : state.count + 1,
      };
      // 나중에 setState가 어떤 것을 의존해서 사용하고 있는지 확인할 수 있다.
    })
  }

}

export default Example3;