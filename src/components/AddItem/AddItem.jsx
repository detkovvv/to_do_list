import { useState } from 'react'

import './AddItem.css'

export const AddItem = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = value.trim()
    if (!title) return
    onAdd(title)
    setValue('')
  }

  return (
    <form className='add-task' onSubmit={handleSubmit}>
      <label htmlFor='new-task'>Новая задача</label>
      <div className='add-task__controls'>
        <input
          autoComplete='off'
          id='new-task'
          maxLength={160}
          onChange={(event) => setValue(event.target.value)}
          placeholder='Например, проверить дизайн на телефоне'
          required
          value={value}
        />
        <button type='submit'>Добавить</button>
      </div>
    </form>
  )
}
