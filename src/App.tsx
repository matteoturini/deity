import { useState } from 'react'
import Nav from './components/Nav'
import TaskInput from './components/TaskInput'
import { nanoid } from 'nanoid';
import createPersistedState from 'use-persisted-state';

export const useTasks = createPersistedState('tasks');

function App() {
  const [tasks, setTasks] = useTasks<{ task: string, id: string }[]>([]);

  return (
    <div>
      <Nav />
      {tasks.map(t => (
        <div className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md m-4 pl-4 flex items-center" key={t.id}>
          <span>{t.task}</span>
          <div className="flex-grow" />
          <button onClick={() => setTasks([...tasks.filter(tt => tt.id !== t.id ? t : null)])} className="w-12 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors p-2 rounded-br-md rounded-tr-md">&#215;</button>
        </div>
      ))}
      {tasks.length === 0 && <span className="text-gray-500 italic fixed" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Create a new task!</span>}
      <TaskInput onTaskCreate={t => setTasks([...tasks, { task: t, id: nanoid() }])} />
    </div>
  )
}

export default App
