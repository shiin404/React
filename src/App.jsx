import { useState } from "react";

function App() {

  let [text,Settext] = useState('')
  let [alltext,AddText] = useState([])
  function RemoveTask(element){
    AddText(alltext.filter((t)=> t !== element))
  }
  return(
    <div>
      <h1>Todo приложение</h1>
      <input type="text" 
      value={text}
       onChange={(event)=> Settext(event.target.value)}/>

       <button onClick={() => {
        AddText([...alltext,text])
        Settext('')}}>Создать запись</button>

       <div>{alltext.map((item) => 
      <div> 
        <h1>{item}</h1>
        <button onClick={() => RemoveTask(item)}>Удалить</button>
      </div>
      )}
       </div>
    </div>
  )
}

export default App;
