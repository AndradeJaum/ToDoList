import CheckboxTask from "../Checkbox";
import { Icon } from "@iconify/react";

interface TaskProps {
  content: string;
  checked: boolean;
  onCheckedTask: (id: string, checked: boolean) => void;
  onDelete: (id: string) => void;
  id: string;
}

export default function Task({ id,content, onDelete, onCheckedTask, checked }: TaskProps) {

  function handleCheckedTask() {
    const newCheckedValue = !checked;
    onCheckedTask(id, newCheckedValue);
  }

  function handleDeleteTask() {
    onDelete(id);
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
