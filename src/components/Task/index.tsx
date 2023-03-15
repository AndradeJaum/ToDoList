import CheckboxTask from "../Checkbox";
import { Icon } from "@iconify/react";

export default function Task() {
  return (
    <div className="w-1/2 flex justify-between items-start bg-gray400 text-gray100 text-sm p-4 my-4 mx-auto rounded-lg	 gap-3">
      <div className="flex flex-row gap-3 items-center">
        <CheckboxTask />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      {/* <div className="flex flex-row gap-3 items-center line-through	text-gray300">
        <CheckboxTask />
        <p>Lorem ipsum dolor sit ame.</p>
      </div> */}
      <button className="flex items-center justify-center">
        <Icon
          icon="tabler:trash"
          className="text-2xl text-gray300 hover:text-danger"
        />
      </button>
    </div>
  );
}

//   .trash:hover {
//     color: var(--danger);
//   }
