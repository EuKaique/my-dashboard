"use client";

import { months } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

type CustomSelectDateProps = {
  onChange?: (date: Date) => void;
};

export const CustomSelectDate = ({ onChange }: CustomSelectDateProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(() => new Date().getFullYear());
  const containerRef = useRef<HTMLDivElement>(null);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selectClass =
    "min-w-0 rounded-md border border-[#343b5b] bg-[#0b1533] px-2 py-2 text-sm text-white outline-none focus:border-[#cb3cff]";

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-3 rounded-md border border-[#343b5b] bg-[#0b1533] px-4 py-2 text-sm text-[#aeb9e1]"
      >
        <FaCalendar size={14} aria-hidden="true" />
        <span>
          {selected ? selected.toLocaleDateString("pt-BR") : "Select date"}
        </span>
        <IoIosArrowDown aria-hidden="true" />
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Select date"
          className="absolute left-0 z-20 mt-2 w-80 rounded-lg border border-[#343b5b] bg-[#0b1533] p-4 shadow-lg"
        >
          <div className="grid grid-cols-[4rem_1fr_5rem] gap-2">
            <label className="flex flex-col gap-1 text-xs text-[#aeb9e1]">
              Dia
              <select
                className={selectClass}
                value={day}
                onChange={(event) => setDay(Number(event.target.value))}
              >
                {Array.from({ length: daysInMonth }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs text-[#aeb9e1]">
              Mês
              <select
                className={selectClass}
                value={month}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  setMonth(next);
                  setDay((value) =>
                    Math.min(value, new Date(year, next + 1, 0).getDate()),
                  );
                }}
              >
                {months.map((name, index) => (
                  <option key={name} value={index}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs text-[#aeb9e1]">
              Ano
              <select
                className={selectClass}
                value={year}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  setYear(next);
                  setDay((value) =>
                    Math.min(value, new Date(next, month + 1, 0).getDate()),
                  );
                }}
              >
                {Array.from(
                  { length: 201 },
                  (_, index) => currentYear - 100 + index,
                ).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-md bg-[#cb3cff] px-3 py-2 text-sm font-medium text-white"
            onClick={() => {
              const date = new Date(year, month, day);
              setSelected(date);
              onChange?.(date);
              setOpen(false);
            }}
          >
            Select
          </button>
        </div>
      )}
    </div>
  );
};
