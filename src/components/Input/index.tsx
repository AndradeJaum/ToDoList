interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="w-full">
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-4 rounded-lg bg-gray500 text-gray100 placeholder:text-gray300 text-sm outline-0"
      />
    </div>
  );
}
