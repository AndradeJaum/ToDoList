import { Content } from "@radix-ui/react-popover";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [addTask, setAddTask] = useState("");
  const createdTask = tasks.length;

  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);
  const completedTask = checkedTasks.length;

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, addTask]);
    setAddTask("");
    console.log("cliquei");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setAddTask(event.target.value);
  }

  const isTaskEmpty = addTask.length === 0;

  return (
    <main className="bg-gray600 h-screen">
      <Header />

      <form
        className="flex w-1/2 -mt-7 mx-auto	items-center justify-center gap-2"
        onSubmit={handleSubmitForm}
      >
        <Input
          name="task"
          type="text"
          value={addTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
        />
        <Button type="submit" disabled={isTaskEmpty} />
      </form>

      <div className="flex w-1/2 mx-auto justify-between mt-12 pb-6">
        <div className="flex gap-2">
          <strong className="text-blue text-sm">Tarefas Criadas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            {tasks.length}
          </p>
        </div>

        <div className="flex gap-2">
          <strong className="text-purple text-sm">Concluídas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            {tasks.length} de ...
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TaskBoard />
      ) : (
        tasks.map((task) => {
          return (
            <Task
              content={task}
              onCheckedTask={checkedTasks}
              isChecked={checkedTasks.some(
                (checkedTask) => checkedTask === task
              )}
            />
          );
        })
      )}
    </main>
  );
}

export default App;
