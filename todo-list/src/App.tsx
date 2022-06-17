import { useState } from 'react'
import * as E from './App.styles'
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
return (
  <E.Container>
    <E.WorkArea>
      <E.Header>Lista de Tarefas</E.Header>
      {list.map((item,idx) => (<ListItem item={item} key={idx} />))}
    </E.WorkArea>
  </E.Container>
)
}

export default App