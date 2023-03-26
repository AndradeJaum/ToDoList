import { Icon } from "@iconify/react";
import React from "react";

interface ButtonProps {
  type: "submit";
  disabled: boolean;
}

export default function Button({ type, disabled }: ButtonProps) {
  return (
    <div>
      <button
        className="flex gap-2 justify-center items-center p-4 rounded-lg text-sm bg-blue_dark text-gray100 hover:bg-blue duration-200 ease-in-out"
        type={type}
        disabled={disabled}
      >
        Criar{" "}
        <Icon icon="ic:baseline-add-circle-outline" className="text-base" />
      </button>
    </div>
  );
}
