import React, { useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({username}) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design a Homepage",
      description: "Create a responsive homepage design.",
      assignedTo: "Employee A",
      deadline: "2024-02-20",
      priority: "High",
      status: "New",
    },
    {
      id: 2,
      title: "Database Setup",
      description: "Set up a database for the project.",
      assignedTo: "Employee B",
      deadline: "2024-02-25",
      priority: "Medium",
      status: "New",
    },
  ]);

  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className='w-full px-10 pt-8 pb-3'>
        <Header username={username}/>
        <CreateTask onAddTask={addTaskHandler}/>
        <AllTask tasks={tasks}/>
    </div>
  )
}

export default AdminDashboard
