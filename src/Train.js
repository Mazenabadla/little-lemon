


import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
    const [inputValule, setInputValue] = useState(""); 
    const [submitted, setSubmitted] = useState(""); 

  const handleClick = () => {
       setCount(count+1);
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(inputValule);
    setInputValue(''); //resets state
  };

  return (
    < >
      <h1>Counter example</h1>
 <p>Count is {count}</p>
      <button onClick={handleClick}>Add one</button>
      <form onSubmit={handleSubmit}>
         <label htmlFor="insert">Please, insert the last count here:</label>
       <input id="insert" value={inputValule} onChange={(e)=>setInputValue(e.target.value)} placeholder="last count here"/>
      <button type="submit">Submit</button>

      </form>
       {submitted && <p>Submitted value: {submitted}</p>}
    </ >
  );
}

           
