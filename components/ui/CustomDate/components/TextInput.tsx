import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}


export const TextInput = ({label, ...rest}: InputProps) => {
  return (
    <>
      <span>{label}</span>      
      <input
        className="border ml-1 rounded-md text-center w-[55px]"
        type="text"
        maxLength={4}
        {...rest}
      />
    </>
  );
};
