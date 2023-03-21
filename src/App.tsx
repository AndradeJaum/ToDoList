import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { TaskBoard } from "./components/TaskBoard";

function App() {

  const [tasks, setTasks] = useState([{}]);
  const [inputTask, setInputTask] = useState("");
  const tasksAmmount = tasks.length;

  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);
  const completedTask = checkedTasks.length;

  const newTask = tasks

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, inputTask]);
    setInputTask("");

0  }

  // localStorage.setItem("tasks", JSON.stringify(tasks));

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setInputTask(event.target.value);
  }

  const isTaskEmpty = inputTask.length === 0;

  function checkTasks(task: string, checked: boolean) {
    if (checked) {
      setCheckedTasks((value) => [...value, task]);
    } else {
      const filterTasks = checkedTasks.filter((value) => {
        return value !== task;
      });
      setCheckedTasks(filterTasks);
    }
  }

  function deleteTasks(delTask: string) {
    const tasksToDelete = tasks.filter((task) => {
      return task !== delTask;
    });
    setTasks(tasksToDelete);
  }

  return (
    <main className="bg-gray600 h-full min-h-screen ">
      <Header />

      <form
        className="flex w-1/2 -mt-7 mx-auto	items-center justify-center gap-2"
        onSubmit={handleSubmitForm}
      >
        <Input
          name="task"
          type="text"
          value={inputTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
        />
        <Button type="submit" disabled={isTaskEmpty} />
      </form>

      <div className="flex w-1/2 mx-auto justify-between mt-12 pb-6">
        <div className="flex gap-2">
          <strong className="text-blue text-sm">Tarefas Criadas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            {tasksAmmount}
          </p>
        </div>

        <div className="flex gap-2">
          <strong className="text-purple text-sm">Concluídas</strong>
          <p className="text-gray100 text-xs font-bold bg-gray400 py-0.5 px-2 rounded-full">
            {completedTask} de {tasksAmmount}
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TaskBoard />
      ) : (
        tasks.map((task) => {
          return (
            <Task
              content={inputTask}
              onCheckedTask={checkTasks}
              onDeleteTask={deleteTasks}
              checked={checkedTasks.some(
                (checkedTasks) => checkedTasks === task
              )}
            />
          );
        })
      )}
    </main>
  );
}

export default App;
