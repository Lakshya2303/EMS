import React, { useState } from 'react'

const CreateTask = ({onAddTask}) => {
  const [taskData, setTaskData] = useState({
    title: '',
    assignedTo: '',
    date: '',
    priority: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: Math.floor(Math.random() * 1000), //hardcoded
      ...taskData,
      status: 'New',
    };

    console.log(newTask);
    onAddTask(newTask);

    setTaskData({
      title: '',
      assignedTo: '',
      date: '',
      priority: '',
      description: ''
    });
    }

  return (
    <div className='px-5 py-3 mt-8 rounded bg-[#1C1C1C]'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <label className='text-sm text-gray-300'>Task Title:</label><br />
                    <input
                     required 
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 my-3' type="text" 
                     placeholder='Make a UI Design'
                     name="title"
                     value={taskData.title}
                     onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-sm text-gray-300'>Assign To:</label><br />
                    <input
                     required 
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 my-3' type="text" 
                     placeholder='Employee Name'
                     name="assignedTo"
                     value={taskData.assignedTo}
                     onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-sm text-gray-300'>Date:</label><br />
                    <input
                     required 
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 my-3' type="date"
                     name="date"
                     value={taskData.date}
                     onChange={handleInputChange} />
                </div>
                <div>
                    <label className='text-sm text-gray-300'>Priority</label><br />
                    <select 
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 my-3' name="priority"
                     value={taskData.priority} 
                     onChange={handleInputChange}>
                        <option className="text-gray-700 bg-gray-100" value="High">High</option>
                        <option className="text-gray-700 bg-gray-100" value="Medium">Medium</option>
                        <option className="text-gray-700 bg-gray-100" value="Low">Low</option>
                    </select>
                </div>
            </div>

            <div className='w-2/5 flex flex-col items-start'>
                <label className='text-sm text-gray-300'>Task Description</label>
                <textarea
                 required 
                 className='w-full h-44 text-sm my-4 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' 
                 name="description"
                 value={taskData.description}
                 onChange={handleInputChange}
                 cols={30} rows={10}></textarea>
                <button 
                 className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg mt-4 w-full'
                 type="submit">Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask
