import { useState } from 'react'
import Header from './components/header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
        id: 1,
        text: 'react assignment deadline',
        day: 'monday 13 november 2021',
        reminder: false,
    },
    {
        id: 2,
        text: 'learn for exam',
        day: 'teusday 14 november 2021',
        reminder: false,        
    },
    {
        id: 3,
        text: 'exam',
        day: 'wednesday 15 november 2021',
        reminder: true,        
    },    
    
]
)
//toggle add button 
const toggleAdd=()=>{
    setShowAddTask(!showAddTask) 
}
//add task
const addTask=(task,showAddTask) =>{
  const id= Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])

}

//delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !==id))
}
//toggle reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id === id ? 
  {...task, reminder: !task.reminder} : task
  )
  )
  // console.log(id)
}
  return (
    <div className='container'>
      <Header tile='rishabh' onClickButton={toggleAdd}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/> : 'no task'}
    </div>
  );
}

export default App;
