import { useState } from "react"
import { Item } from "../../types/item"
import * as E from "./styles"

type Props = {
item: Item
}
export const ListItem = ({item}: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
    <E.Container done={isChecked}> 
      <input 
        type='checkbox'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}/>
      <label> {item.name} </label>
    </E.Container> 
  )
}