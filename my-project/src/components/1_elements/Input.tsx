import React from "react";

interface InputProps {
  type: string,
  icon: string;
  placeholder: string;
  eye?: string;
  required?: boolean;
  value: string;
  onChange: () => void;
}

function Input({
  type,
  icon,
  placeholder,
  eye,
  required,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="w-full relative">
      <input
        type={type}
        className={`placeholder-zinc-300 border text-zinc-500 border-zinc-300 w-full py-3 px-10 text-sm rounded-lg`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {/* <img src="" alt="" /> */}
      <div className="absolute top-2 left-4 text-zinc-300 text-lg">{icon}</div>
      <div className="absolute top-2 right-4 text-zinc-400 text-lg">{eye}</div>
    </div>
  );
}

export default Input;
