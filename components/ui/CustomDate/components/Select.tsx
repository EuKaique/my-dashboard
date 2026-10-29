import { monthLiteral } from "@/constants";

interface SelectProps {
  id: string;
  label: string;
  value: string | number;
  setValue: (
    value: string | number,
  ) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <>
      <span>{props.label}</span>
      <select
        className="border ml-1 rounded-md"
        name={props.id}
        id={props.id}
        value={props.value}
        onChange={(event) => props.setValue(Number(event.target.value))}
      >
        {monthLiteral.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    </>
  );
};
