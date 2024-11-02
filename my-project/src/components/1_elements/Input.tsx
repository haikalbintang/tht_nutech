import React from "react";

interface InputProps {
  type: string;
  icon: string;
  placeholder?: string;
  eye?: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function Input({
  type,
  icon,
  placeholder,
  eye,
  required,
  value,
  onChange,
  label,
}: InputProps) {
  return (
    <div className="w-full relative">
      <label className="text-[15px] text-zinc-800 font-medium mt-6 mb-3 block">
        {label}
      </label>
      <input
        type={type}
        className={`placeholder-zinc-300 border text-zinc-500 border-zinc-300 w-full py-3 pl-11 pr-3 text-sm rounded-lg`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      {/* <img src="" alt="" /> */}
      <div
        className={`absolute left-4 text-zinc-300 text-lg ${
          label && label.length > 0 ? "top-[67px]" : "top-2"
        }`}
      >
        {icon}
      </div>
      <div className="absolute top-2 right-4 text-zinc-400 text-lg">{eye}</div>
    </div>
  );
}

export default Input;
