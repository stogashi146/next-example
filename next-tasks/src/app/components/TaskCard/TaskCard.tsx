import React from "react";

import TaskEditButton from "./TaskEditButton/TaskEditButton";
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import { TaskDocument } from "@/models/task";

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">タスクの説明</div>
      </header>
      <div className="text-sm">{task.dueDate}</div>
      <div className="flex justify-between items-center">
        <div
          className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
            task.isCompleted ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {true ? "Completed" : "Incomplete"}
        </div>
        <div className="flex gap-4">
          <TaskEditButton id={task.id} />
          <TaskDeleteButton id={task.id} />
          <div>削除</div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
