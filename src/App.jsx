import { useState } from "react";

function App() {

  let [text,Settext] = useState('')
  let [description,Setdes] = useState('')
  let [alltext,AddText] = useState([])

  function RemoveTask(element){
    AddText(alltext.filter((t)=> t !== element))
  }
  function AddTask(){
    if (alltext.length === 0){
      return <h1>Список на данный момент пуст</h1>
    }
    
    let Alltask = alltext.map(item => (
      <div>
        <h1>{item.text}</h1>
        <h3>{item.description}</h3>
        <button onClick={() => RemoveTask(item)}>Удалить❌</button>
      </div>
    ))
    return Alltask
  }
  return(
    <div>
      <button onClick={() => AddText([])}>Удалить всё</button>
      <h1>Todo приложение</h1>

      <input type="text" 
        value={text}
        onChange={(event)=> Settext(event.target.value)}
        placeholder="Введите задачу"
      />
      <input type="text" 
        value={description}
        onChange={(event)=> Setdes(event.target.value)}
        placeholder="Введите описание"
      />
      <button onClick={() => {
        if (text.trim() == '') return
        if (description.trim() == '') return
        AddText([...alltext,{text,description}])
        Settext('')
        Setdes('')
        }}>Создать запись
      </button>

       <div>{AddTask()}</div>
       <div>
        {text == "Котик" && (<h1>❤️❤️❤️</h1>) }
       </div>
    </div>
  )
}

export default App;
