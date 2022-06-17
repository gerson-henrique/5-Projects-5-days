import { type } from '@testing-library/user-event/dist/type'
import { useState, KeyboardEvent } from 'react'
import * as E from './styles'

type Props = {
  onEnter:(task:string) => void
}

export const AddArea = ({onEnter}: Props) => {
  const [inputText, setInputText] = useState('')
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'enter' && inputText !== '') {
      onEnter(inputText)
    }
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