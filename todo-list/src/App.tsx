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
      id: 123,
      name: '',
      done: false,
    })
  }
return (
  <E.Container>
    <E.WorkArea>
      <E.Header>Lista de Tarefas</E.Header>
      <AddArea/>
      {list.map((item,idx) => (<ListItem item={item} key={idx} />))}
    </E.WorkArea>
  </E.Container>
)
}

export default App