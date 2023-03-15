import { Icon } from "@iconify/react";

export default function Button() {
  return (
    <div>
      <button className="flex gap-2 justify-center items-center  p-4 rounded-lg text-sm bg-blue_dark text-gray100 hover:bg-blue duration-200 ease-in-out">
        Criar <Icon icon="ic:baseline-add-circle-outline" className="text-base" />
      </button>
    </div>
  );
}

// display: flex;
// justify-content: center;
// align-items: center;
// background-color: var(--blue-dark);
// text-decoration: none;
// color: var(--gray-100);
// padding: 1rem;
// font-size: 0.875rem;
// border-radius: 8px;
// gap:0.5rem;
// transition: 0.2s ease-in-out;
// border: none;


// {size.width <= 500 ? (
//     <button type={type} disabled={disabled}>
//       <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
//     </button>
//   ) : (
//     <button type={type} disabled={disabled}>
//       Criar <IoIosAddCircleOutline style={{ fontSize: "1rem" }} />
//     </button>
//   )}
