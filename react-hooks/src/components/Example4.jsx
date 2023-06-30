import React, {useState, useEffect} from "react";

export default function Example4() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount');

    return () => {
      // clean up
      // Dependency에 의해서 다음 render가 실행될 때
      // 그 직전에 return이 실행 후 함수 실행.
      // componentWillUnmount 역할.
    }
  }, []);
  // React.DependencyList 가 없을 땐, 
  // 항상 랜더가 된 직후에는 무조건 useEffect 안에 함수를 실행해주세요 라는 의미

  // React.DependencyList = [] = 빈배열 을 넣을 경우
  // 최초에만 실행이 된다. 라는 선언.
  // [] 배열안에 의미가 배열안에 값으로 인해 랜더가 될때, 직후 useEffect 안에 있는 함수 실행 하라는 역할.
  // [] = 지금 현 상태는 빈 배열이기 때문에 어떤 값이 변해도 값이 없기에 useEffect 함수는 최초 말고는 실행 될 수 밖에 없다.
  // 하지만 최초일 경우는, 빈배열이던 아니던 간 무조건 실행된다.
  

  //useEffect는 여러개 사용가능.
  //위 아래의 useEffect는 순차적으로 실행됨.
  // Dependency가 맞는 것일 때 마다 해당되는 함수가 실행.
  useEffect(() => {
    console.log('componentDidMount & componentDidUpdate by count', count);

    return () => {
      console.log("clean up by count.")
    }
  }, [count]);
  // count에 Dependency가 있어서 count가 업데이트 될 때만 render가 업데이트 되면서
  // useEffect가 실행.

  // 즉, useEffect는 render와 Dependency list와 밀접한 관계가 있다.
  
  function click(){
    setCount(count + 1);
  }
  return(
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

}