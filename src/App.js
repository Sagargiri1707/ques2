 import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([
    {id:1,color:""},
    {id:2,color:""},
    {id:3,color:""},
    {id:4,color:""},
    {id:5,color:""},
    {id:6,color:""},
    {id:7,color:""},
    {id:8,color:""},
    {id:9,color:""}
  ])
  const [number,setNumber]=useState(1)
  const setColor=(e)=>{
     const d=data.map(a=>a.id==number?{id:a.id,color:"red"}:{id:a.id,color:""})
    console.log(d)
    setData(d)
  }
  
  return (
    <div className="App ">
       <div className="Input">
          <input placeholder="Pick number" value={number} onChange={e=>setNumber(e.target.value==""?0:parseInt(e.target.value))}/>
          <button style={{margin:"10px"}} id="button" onClick={setColor}>
            Color Me
          </button>
      </div>
      <div className="grid">
          {data.map(a=>(
              <div className="items" key={a.id} style={{backgroundColor:a.color}}>{a.id}</div>
          ))}
      </div>
    </div>
  );
}

export default App;



