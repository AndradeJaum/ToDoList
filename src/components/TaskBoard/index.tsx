import Clipboard from "../../images/Clipboard.svg";
import React from "react";

export function TaskBoard() {
  return (
    <>
      <div className="flex w-1/2 mx-auto text-center">
        <div className="flex w-full flex-col justify-center itens-center text-gray300 pt-16 pb-8 border-t border-gray400">
          <img src={Clipboard} className="w-14 m-auto mb-4" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  );
}
