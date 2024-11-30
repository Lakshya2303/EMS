import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10 hideScrollbar'>
      {tasks.map((task) => (
        <div 
         key={task.id}
         className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{task.priority}</h3>
            <h4 className='text-sm'>{task.deadline}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold'>{task.title}</h2>
        <p className='mt-2 text-sm'>{task.description}</p>
      </div>
      ))}
    </div>
  )
}

export default TaskList
