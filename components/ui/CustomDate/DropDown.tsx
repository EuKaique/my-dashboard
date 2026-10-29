import { IoIosArrowDown } from "react-icons/io";
import { Label } from "./components/Label";
import { useEffect, useState } from "react";
import { NumberOrString } from "@/types";
import { Select } from "./components/Select";
import { TextInput } from "./components/TextInput";
import { maxFourLength } from "@/utils";
import { Button } from "../Button";

export const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [initialMonth, setInitialMonth] = useState<NumberOrString>(
    new Date().getMonth(),
  );
  const [initialYear, setInitialYear] = useState<NumberOrString>(
    new Date().getFullYear(),
  );
  const [endMonth, setEndMonth] = useState<NumberOrString>(
    new Date().getMonth(),
  );
  const [endYear, setEndYear] = useState<NumberOrString>(
    new Date().getFullYear(),
  );

  const dropdown = () => {
    if (open) {
      return "block absolute top-full right-0 bg-[var(--menu-hover)] h-[200px] rounded-md border-x border-b border-[var(--neutral-400)] w-full z-10 p-2 leading-8";
    }
    return "hidden";
  };

  useEffect(() => {
    if (initialYear > endYear) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisabled(true);
    } else {
        setDisabled(false)
    }
  }, [initialMonth, initialYear, endMonth, endYear]);

  return (
    <>
      <Label
        endMonth={endMonth}
        endYear={endYear}
        initialMonth={initialMonth}
        initialYear={initialYear}
      />
      <div className="flex shrink-0 items-center pr-2">
        <button type="button" onClick={() => setOpen(!open)} className="cursor-pointer" aria-label="Selecionar período" aria-expanded={open}>
          <IoIosArrowDown />
        </button>
          <ul className={dropdown()}>
            <li>
              <Select
                id="initialMonth"
                label="Mês de início"
                setValue={(value) => setInitialMonth(value)}
                value={initialMonth}
              />
            </li>
            <li>
              <TextInput
                id="initialYear"
                label="Ano de inicio"
                onChange={(event) =>
                  setInitialYear(maxFourLength(String(event.target.value)))
                }
                value={initialYear}
                max={endYear}
              />
            </li>
            <li>
              <Select
                id="endMonth"
                label="Mês final"
                setValue={(value) => setEndMonth(value)}
                value={endMonth}
              />
            </li>
            <li>
              <TextInput
                id="initialYear"
                label="Ano final"
                onChange={(event) => setEndYear(maxFourLength(String(event.target.value)))}
                value={endYear}
                min={initialYear}
              />
            </li>
            <li>
              <Button onClick={() => setOpen(false)} className="mt-3" disabled={disabled}>
                Filtrar
              </Button>
            </li>
          </ul>
      </div>
    </>
  );
};
