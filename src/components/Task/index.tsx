import CheckboxTask from "../Checkbox";
import { Icon } from "@iconify/react";

interface TaskProps {
  checked?: boolean;
  content: string;
  onCheckedTask: (task: string, checked: boolean) => void;
  onDeleteTask: (task: string) => void;
}

export default function Task({
  content,
  onCheckedTask,
  onDeleteTask,
  checked,
}: TaskProps) {
  function handleCheckedTask(checked: boolean) {
    onCheckedTask(content, checked);
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div
      className={
        checked
          ? "w-1/2 flex justify-between items-start bg-gray400 text-gray300 line-through text-sm p-4 my-4 mx-auto rounded-lg gap-3"
          : "w-1/2 flex justify-between items-start bg-gray400 text-gray100 text-sm p-4 my-4 mx-auto rounded-lg gap-3"
      }
    >
      <div className="flex flex-row gap-3 items-center">
        <CheckboxTask onChange={handleCheckedTask} />

        <p>{content}</p>
      </div>

      <button
        className="flex items-center justify-center"
        onClick={handleDeleteTask}
      >
        <Icon
          icon="tabler:trash"
          className="text-2xl text-gray300 hover:text-danger"
        />
      </button>
    </div>
  );
}
