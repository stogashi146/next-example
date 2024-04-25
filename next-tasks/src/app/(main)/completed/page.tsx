import TaskCard from "@/app/components/TaskCard/TaskCard";
import React from "react";

const CompletedTaskPage = () => {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          Completed Tasks
        </h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
};

export default CompletedTaskPage;