import React, { useState } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          title: "Make a YouTube Video",
          description: "Lorem ipsum dolor sit amet consectetur.",
          deadline: "2024-02-20",
          priority: "High",
          status: "New",
        },
        {
          id: 2,
          title: "Complete the Project",
          description: "Lorem ipsum dolor sit amet consectetur.",
          deadline: "2024-03-15",
          priority: "Medium",
          status: "Accepted",
        },
        {
          id: 3,
          title: "Write a Blog Post",
          description: "Lorem ipsum dolor sit amet consectetur.",
          deadline: "2024-03-25",
          priority: "Low",
          status: "Completed",
        },  
    ]);

    const taskCounts = {
        new: tasks.filter((task) => task.status === "New").length,
        accepted: tasks.filter((task) => task.status === "Accepted").length,
        completed: tasks.filter((task) => task.status === "Completed").length,
        failed: tasks.filter((task) => task.status === "Failed").length,
    };
    
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header />
            <TaskListNumber taskCounts={taskCounts}/> 
            <TaskList tasks={tasks}/>
        </div>
    )
};

export default EmployeeDashboard