import { useEffect, useState } from "react";

function App() {

  let [text,Settext] = useState('')
  let [description,Setdes] = useState('')
  let [alltext, AddText] = useState(()=>{
    const task = localStorage.getItem('tasks')
    return task ? JSON.parse(task) : []
  })

  useEffect(()=>{
    let saved = localStorage.getItem('tasks')
    if (saved){
      AddText(JSON.parse(saved))
    }},[])

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(alltext))
  },[alltext])

  function RemoveTask(element){
    AddText(alltext.filter((t)=> t !== element))
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

      <div>
        {alltext.length === 0 ?
        <h1>Тут пока пусто </h1> :
        alltext.map(item => (
        <div>
          <h1>{item.text}</h1>
          <h3>{item.description}</h3>
          <button onClick={() => RemoveTask(item)}>Удалить❌</button>
        </div>
        ))}
      </div>
      <div>
        {text == "Котик" && (<h1>❤️❤️❤️</h1>) }
      </div>
    </div>
  )
}

export default App;
