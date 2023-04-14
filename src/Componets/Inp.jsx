import React, { useState } from 'react'
import store from './redux/store';
import { useSelector } from 'react-redux';
function Inp() {
    const [inp, setinp] = useState("second")
    const data =  useSelector((stored)=>stored)
  return (
    <div>
         <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        onChange={(e) => {
            setinp(e.target.value);
        }}
      />
      <button onClick={()=>{
        store.dispatch({
            type:"name",
            username:inp
        });
      }}>Submit</button>
      <p>{data.name}</p>
    </div>
    </div>
  )
}

export default Inp