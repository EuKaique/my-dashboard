"use client"

import { useState } from "react"
import { FaCalendar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const DateMonthAndYearDropdown = () => {
    const [open, setOpen] = useState(false);

    const [initialMonth, setInitialMonth] = useState(new Date().getMonth());
    const [initialYear, setInitialYear] = useState(new Date().getFullYear());
    const [endMonth, setEndMonth] = useState(new Date().getMonth());
    const [endYear, setEndYear] = useState(new Date().getFullYear());

    const dropdown = () => {
        if (open){
            return "block absolute bg-[var(--menu-hover)] left-[0px] h-[150px] border border-[var(--neutral-400)] w-full z-10"
        }
        return "hidden"
    }

    return (
        <div className="flex text-[var(--neutral-400)] text-xs gap-4 bg-[var(--menu-hover)] w-[150px] rounded-md">
            <div className="flex gap-2 p-2">
                <FaCalendar size={14}/>
                <span>{initialMonth}{initialYear}</span>
                <span>{endMonth}{endYear}</span>
            </div>
            <div className="flex items-center">
                <button onClick={() => setOpen(!open)} className="cursor-pointer">
                    <IoIosArrowDown />
                </button>
                <div className="relative w-[140px] ml-[-120px] mt-8">
                    <div className={dropdown()}>
                        <div>Mês de inicio</div>
                        <div>Ano de inicio</div>
                        <div>Mês final</div>
                        <div>Ano final</div>
                    </div>
                </div>
            </div>
        </div>
    )
}