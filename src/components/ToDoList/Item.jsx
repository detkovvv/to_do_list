import { useState } from 'react'

import './item.css'

export const Item = ({ id, title, completed, onEditItem, onRemoveItem }) => {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(title)

  const save = () => {
    const nextTitle = draft.trim()
    if (!nextTitle) return
    onEditItem(id, { title: nextTitle })
    setEditing(false)
  }

  const cancel = () => {
    setDraft(title)
    setEditing(false)
  }

  return (
    <li className={`task-item${completed ? ' task-item--done' : ''}`}>
      <input
        aria-label={`Завершить: ${title}`}
        checked={completed}
        className='task-item__checkbox'
        onChange={() => onEditItem(id, { completed: !completed })}
        type='checkbox'
      />
      {editing ? (
        <form className='task-item__edit' onSubmit={(event) => { event.preventDefault(); save() }}>
          <input
            aria-label='Название задачи'
            autoFocus
            maxLength={160}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Escape') cancel() }}
            required
            value={draft}
          />
          <button className='button-quiet' type='submit'>Сохранить</button>
          <button className='button-quiet' onClick={cancel} type='button'>Отмена</button>
        </form>
      ) : (
        <>
          <span className='task-item__title'>{title}</span>
          <div className='task-item__actions'>
            <button aria-label={`Изменить: ${title}`} className='button-quiet' onClick={() => { setDraft(title); setEditing(true) }} type='button'>Изменить</button>
            <button aria-label={`Удалить: ${title}`} className='button-quiet button-danger' onClick={() => onRemoveItem(id)} type='button'>Удалить</button>
          </div>
        </>
      )}
    </li>
  )
}
