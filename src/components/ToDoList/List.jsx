import { useState } from 'react'

import { Item } from './Item'

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'active', label: 'В работе' },
  { id: 'done', label: 'Готово' },
]

export const List = ({ data, onEditItem, onRemoveItem, onClearAll }) => {
  const [filter, setFilter] = useState('all')
  const completedCount = data.filter((task) => task.completed).length
  const visible = data.filter((task) =>
    filter === 'all' || (filter === 'done' ? task.completed : !task.completed),
  )

  return (
    <div className='task-list'>
      <div className='task-list__header'>
        <div>
          <h2>Мои задачи</h2>
          <p>{data.length - completedCount} в работе · {completedCount} выполнено</p>
        </div>
        <button className='button-quiet button-danger' disabled={!data.length} onClick={onClearAll} type='button'>Очистить список</button>
      </div>
      <div aria-label='Фильтр задач' className='task-filters' role='group'>
        {filters.map(({ id, label }) => (
          <button aria-pressed={filter === id} className={filter === id ? 'is-active' : ''} key={id} onClick={() => setFilter(id)} type='button'>
            {label}
          </button>
        ))}
      </div>
      {visible.length ? (
        <ul className='task-items'>
          {visible.map((task) => (
            <Item key={task.id} onEditItem={onEditItem} onRemoveItem={onRemoveItem} {...task} />
          ))}
        </ul>
      ) : (
        <p className='task-empty'>
          {data.length ? 'В этой категории пока нет задач.' : 'Пока нет задач. Добавьте первую выше.'}
        </p>
      )}
    </div>
  )
}
