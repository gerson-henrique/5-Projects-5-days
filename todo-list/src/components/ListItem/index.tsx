import { useState } from "react"
import { Item } from "../../types/item"
import * as E from "./styles"

type Props = {
  key: number,
item: Item,
onSelected: (id:number)=> void,
}
export const ListItem = ({item,onSelected,key}: Props,) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
    <E.Container done={isChecked}> 
      <input 
        type='checkbox'
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked)
          onSelected(key)}}/>
      <label> {item.name} </label>
    </E.Container> 
  )
}