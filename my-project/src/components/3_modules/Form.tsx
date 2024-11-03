import React from "react";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center m-7 px-10 gap-8 w-full"
    >
      {children}
    </form>
  );
}

export default Form;
