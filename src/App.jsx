import { useState } from "react";

function App() {

  let [text,Settext] = useState('')
  let [alltext,AddText] = useState([])
  
  return(
    <div>
      <h1>Todo приложение</h1>
      <input type="text" 
      value={text}
       onChange={(event)=> Settext(event.target.value)}/>

       <button onClick={() => {
        AddText([...alltext,text])
        Settext('')}}>Создать запись</button>

       <div>{alltext.map((item) => <h2>{item}</h2> )}</div>
    </div>
  )
}

export default App;
