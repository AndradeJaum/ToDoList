import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import Task from "./components/Task";
import { TaskBoard } from "./components/TaskBoard";
import { v4 as uuidv4 } from "uuid";

interface Task {
  name: string;
  id: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputTask, setInputTask] = useState("");
  const tasksAmmount = tasks.length;

  useEffect(() => {
    // recuperar tarefas do Local Storage
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      name: inputTask,
      id: uuidv4(),
      checked: false,
    };

    // Verifica se a task já está salva no Local Storage
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const savedTask = savedTasks.find((task: Task) => task.id === newTask.id);

    if (savedTask) {
      // Se a task já estiver salva, mantém a informação de checked
      newTask.checked = savedTask.checked;
    }

    setTasks([...tasks, newTask]);
    setInputTask("");
  }

  const completedTasksAmount = tasks.reduce((acc, task) => {
    if (task.checked) {
      acc++;
    }
    return acc;
  }, 0);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setInputTask(event.target.value);
  }

  const isTaskEmpty = inputTask.length === 0;

  function handleDeleteTask(id: string) {
    // const updatedTasks = tasks.filter((task) => task.id !== id);
    const updatedTasks = tasks.filter((task: Task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  function handleCheckTask(id: string, checked: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: checked };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <main className="bg-gray600 h-full min-h-screen ">
      <Header />

      <form
        className="flex w-1/2 -mt-7 mx-auto	items-center justify-center gap-2"
        onSubmit={handleSubmitForm}
        autoComplete="off"
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
            {`${completedTasksAmount} de ${tasksAmmount}`}
          </p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TaskBoard />
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              content={task.name}
              checked={task.checked}
              id={task.id}
              // setTasks={setTasks}
              onCheckedTask={() => handleCheckTask(task.id, !task.checked)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          );
        })
      )}
    </main>
  );
}

export default App;
