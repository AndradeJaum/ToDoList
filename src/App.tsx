import { useState } from "react";
import Button from "./components/Button";
import CheckboxTask from "./components/Checkbox";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState([0]);

  return (
    <main className="bg-gray600 h-screen">
      <Header />

      <form className="flex w-1/2 -mt-7 mx-auto	items-center justify-center gap-2">
        <Input />
        <Button />
      </form>

      <div className="flex w-1/2 mx-auto justify-between mt-12 pb-6">
        <div className="flex gap-2">
          <strong className="text-blue text-sm">Tarefas Criadas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            2
          </p>
        </div>

        <div className="flex gap-2">
          <strong className="text-purple text-sm">Concluídas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            1 de 2
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TaskBoard />
      ) : (
        tasks.map((tasks) => {
          return <Task />;
        })
      )}
    </main>
  );
}

export default App;
