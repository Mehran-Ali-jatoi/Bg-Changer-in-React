import React, { useState } from "react";
import './App.css'; 
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  
  };
  const decrement = () => {
    if (count> 0) {
      setCount(count - 1);
    }else{
      return
    }
  };
  const multiplication =()=>{
    setCount(count * 2);
  }
  const devide=()=>{
    setCount(count / 2);
  }
  const clear =()=>{
    setCount(count * 0);

  }
  return (
<>
    <div className="main">

      <h1>Counter App</h1>
      <p>{count}</p>
  <div className="btns">
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  <button onClick={multiplication}>* 2</button>
  <button onClick={devide}>/ 2</button>
  <button onClick={clear}>clear</button>


  </div>
    </div>
      </>
  );
}

export default App;
