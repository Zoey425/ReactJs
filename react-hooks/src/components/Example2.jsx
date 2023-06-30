import React, {useState} from "react";


// useState => count
function Example2() {

  const [count, setCount] = useState(0);

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

export default Example2;