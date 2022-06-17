import { useState } from 'react'
import * as E from './App.styles'
import { Item } from './types/item';


const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "estilizar esse desafio",
      done: false,
    },
    {
      id: 2,
      name: "postar projeto",
      done: true,
    }
  ]);
return (
  <E.Container>
    <E.WorkArea>
      <E.Header>Lista de Tarefas</E.Header>
      {list.map((item,ix) => (<>...</>))}
    </E.WorkArea>
  </E.Container>
)
}

export default App