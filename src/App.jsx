import { useEffect, useState } from 'react'

import { AddItem } from './components/AddItem/AddItem'
import { List } from './components/ToDoList'
import { Title } from './components/Title/Title'

import './App.css'

const STORAGE_KEY = 'todo-app:tasks'
const starterTasks = [
  { id: 'demo-1', title: 'Спланировать задачи на неделю', completed: true },
  { id: 'demo-2', title: 'Подготовить макеты проекта', completed: false },
  { id: 'demo-3', title: 'Проверить мобильную версию', completed: false },
  { id: 'demo-4', title: 'Отправить обновления команде', completed: false },
]

const isTask = (task) =>
  task && (typeof task.id === 'string' || typeof task.id === 'number') &&
  typeof task.title === 'string' &&
  typeof task.completed === 'boolean'

const readTasks = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem('state')
    if (!stored) return starterTasks
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed.filter(isTask) : starterTasks
  } catch {
    return starterTasks
  }
}

const App = () => {
  const [tasks, setTasks] = useState(readTasks)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title) => {
    setTasks((current) => [...current, { id: crypto.randomUUID(), title, completed: false }])
  }

  const updateTask = (id, changes) => {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, ...changes } : task))
  }

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <main className='app-shell'>
      <Title />
      <section aria-label='Список задач' className='task-card'>
        <AddItem onAdd={addTask} />
        <List
          data={tasks}
          onClearAll={() => setTasks([])}
          onEditItem={updateTask}
          onRemoveItem={removeTask}
        />
      </section>
    </main>
  )
}

export default App
