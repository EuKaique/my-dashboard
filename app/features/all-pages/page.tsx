"use client";

import { Button } from "@/components/ui/Button";
import ProductStats from "@/components/ui/ProductStats";
import RevenueByCustomerType from "@/components/ui/RevenueByCustomerType";
import WebsiteVisitors from "@/components/ui/WebsiteVisitors";
import { months } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function AllPages() {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(() => new Date().getFullYear());

  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <main>
      <nav className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl">Features</h2>
        <div ref={containerRef} className="relative inline-block">
          <Button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-haspopup="dialog"
            className="flex gap-2"
          >
            <span>{months[month].slice(0, 3)}</span>
            <span>{year}</span>
            <span><IoIosArrowDown /></span>
          </Button>
          {open && (
            <div
              role="dialog"
              aria-label="Select date"
              className="flex justify-between gap-2 absolute right-0 z-20 mt-2 w-50 rounded-lg border border-[#343b5b] bg-[#0b1533] p-4 shadow-lg"
            >
              <div>
                <select
                  className="cursor-pointer border rounded-md p-2"
                  value={month}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    setMonth(next);
                  }}
                >
                  {months.map((name, index) => (
                    <option className="bg-[var(--menu-surface)] text-[var(--neutral-400)]" key={name} value={index}>
                      {name.slice(0, 3)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="cursor-pointer border rounded-md p-2"
                  value={year}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    setYear(next);
                  }}
                >
                  {Array.from(
                    { length: 201 },
                    (_, index) => currentYear - 100 + index,
                  ).map((value) => (
                    <option className="bg-[var(--menu-surface)] text-[var(--neutral-400)]" key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ProductStats />
      <div className="mt-8 flex gap-5 w-full">
        <div className="w-full">
          <WebsiteVisitors />
        </div>
        <div className="w-full">
          <RevenueByCustomerType />
        </div>
      </div>
    </main>
  );
}
