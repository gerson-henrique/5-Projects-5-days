import { useState, KeyboardEvent } from 'react'
import * as E from './styles'

export const AddArea = () => {
  const [inputText, setInputText] = useState('')
  const handleKeyUp = (e: KeyboardEvent) => {

  }
  return (
    <E.Container>
      <div className='image'>➕</div>
      <input 
        type='text'
        placeholder='Adicione uma tarefa!'
        value={inputText}
        onChange={(e)=> setInputText(e.target.value) }
        onKeyUp={handleKeyUp}/>

    </E.Container>
  )
  
}