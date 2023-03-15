export default function Input() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="w-full p-4 rounded-lg bg-gray500 text-gray100 placeholder:text-gray300 text-sm"
      />
    </div>
  );
}
