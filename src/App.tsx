import React, { useState } from "react";
import "./App.css";
import {Button} from "./Button";

function App() {

  let [count, setCount] = useState(0);

  const [disabledInc, setDisabledInc] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);

const inc = () => {
   setCount(++count)
  if (count   === 5 ) {
    setDisabledInc(true)
   }
   setDisabledReset(false)
  
}

const reset = () => {
  setCount(0)
  setDisabledReset(true)
  setDisabledInc(false)
}

 return (
     
 <div className="wrapper">
   <div className={count ===5 ? "wrapper-count1" : "wrapper-count"}>{count}</div>
     <Button disabled={disabledInc} onClick={inc} titleButton={'inc'}/>
     <Button disabled={disabledReset} onClick={reset} titleButton={'reset'}/>
</div> 
   
       
  );
}


export default App;
