import { useState } from 'react'
import * as E from './App.styles'
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import { Item } from './types/item';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Estilizar esse desafio",
      done: false,
    },
    {
      id: 2,
      name: "Postar esse projeto",
      done: true,
    }
  ]);

  const handleAddTask = (task:string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: task,
      done: false,
    });
    setList(newList)
  }

  const handleDone = (id: number) => {
    const [doneElement] = list.filter((e)=> e.id === id)
    let newList = [...list]
    newList[id] = {
      id: doneElement.id,
      name: doneElement.name,
      done: !doneElement.done,


    } 
    setList(newList)
  }
return (
  <E.Container>
    <E.WorkArea>
      <E.Header>Lista de Tarefas</E.Header>
      <AddArea onEnter={handleAddTask}/>
      {list.map((item,idx) => (<ListItem item={item} key={idx} onSelected={handleDone} />))}
    </E.WorkArea>
  </E.Container>
)
}

export default App