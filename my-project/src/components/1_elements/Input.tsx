import React, { useState } from "react";

interface InputProps {
  type: string;
  icon: string;
  placeholder?: string;
  eye?: string;
  required?: boolean;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  validation?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  isFocus?: boolean;
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
  validation,
  onBlur,
  onFocus,
  isFocus,
}: InputProps) {
  // const [isFocus, setIsFocus] = useState(false);

  // function handleBlur() {
  //   setIsFocus(false);
  //   onBlur()

  // }
  return (
    <div className="w-full relative">
      {label && (
        <label className="text-[15px] text-zinc-800 font-medium mt-6 mb-3 block">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`placeholder-zinc-300 border text-zinc-500 ${
          !validation ? "border-zinc-300" : "border-[#f42619]"
        } w-full py-3 pl-11 pr-3 text-sm rounded-lg`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {/* <img src="" alt="" /> */}
      <div
        className={`absolute left-4 ${
          isFocus
            ? "text-zinc-500"
            : validation
            ? "text-[#f42619]"
            : "text-zinc-300"
        } text-lg ${label && label.length > 0 ? "top-[67px]" : "top-2"}`}
      >
        {icon}
      </div>
      <div className="absolute top-2 right-4 text-zinc-400 text-lg">{eye}</div>
      {validation && (
        <div className="relative w-full">
          <p className="absolute top-2 right-0 text-right text-[#f42619] text-sm">
            {validation}
          </p>
        </div>
      )}
    </div>
  );
}

export default Input;
