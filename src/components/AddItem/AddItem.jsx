import { useState } from 'react'
import { getId } from '../../utils'

import './AddItem.css'

export const AddItem = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChangeInput = (e) => setInputValue(e.target.value)

  const handleAdd = () => {
    // если инпут пуст
    if (!inputValue) return

    // если значение уже существует
    // TODO

    onAdd({ title: inputValue, completed: false, id: getId() })
    setInputValue('')
  }

  return (
    <div className='addItem__wrap'>
      <input className='addItem__input' value={inputValue} onChange={handleChangeInput} />
      <button className='addItem__btn' onClick={handleAdd}>
        add
      </button>
    </div>
  )
}
