import CheckboxTask from "../Checkbox";
import { Icon } from "@iconify/react";

interface TaskProps {
  checked?: boolean;
  content: string;
  onCheckedTask: (task: string, checked: boolean) => void;
  isChecked: boolean;
}

export default function Task({
  content,
  onCheckedTask,
  checked,
  isChecked,
}: TaskProps) {
  function handleCheckedTask(checked: boolean) {
    onCheckedTask(content, checked);
  }

  return (
    <div
      className="w-1/2 flex justify-between items-start bg-gray400 text-gray100 text-sm p-4 my-4 mx-auto rounded-lg gap-3"
      onChange={() => onCheckedTask}
    >
      <div className="flex flex-row gap-3 items-center">
        <CheckboxTask onChange={handleCheckedTask} />

        <p>{content}</p>
      </div>

      <button className="flex items-center justify-center">
        <Icon
          icon="tabler:trash"
          className="text-2xl text-gray300 hover:text-danger"
        />
      </button>
    </div>
  );
}
