import React from 'react'

const AllTask = ({tasks}) => {
  return (
    <div className="bg-[#1C1C1C] px-5 py-5 mt-8 mb-3 rounded h-[15rem]">
      <div className="overflow-y-auto h-full hideScrollbar">
        <div className="space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex justify-between rounded py-2 px-4 bg-blue-400">
              <h2>{task.assignedTo}</h2>
              <h3>{task.title}</h3>
              <h5>{task.status}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default AllTask
