import { Icon } from "@iconify/react";

export default function Button() {
  return (
    <div>
      <button className="flex gap-2 justify-center items-center p-4 rounded-lg text-sm bg-blue_dark text-gray100 hover:bg-blue duration-200 ease-in-out">
        Criar <Icon icon="ic:baseline-add-circle-outline" className="text-base" />
      </button>
    </div>
  );
}


// {size.width <= 500 ? (
//     <button type={type} disabled={disabled}>
//       <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
//     </button>
//   ) : (
//     <button type={type} disabled={disabled}>
//       Criar <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
//     </button>
//   )}
