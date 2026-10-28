"use client"

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DateMonthAndYearDropdown } from "@/components/ui/DateMonthAndYearDropdown";
import { AiFillEye } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { FaStar, FaUser } from "react-icons/fa";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";

const initialCards = [
  {
    icon: <AiFillEye />,
    title: "Pageviews",
    number: "50.8K",
    percent: "28.4%",
    isPositive: true,
  },
  {
    icon: <FaUser />,
    title: "Monthly users",
    number: "23.6K",
    percent: "12.6%",
    isPositive: false,
  },
  {
    icon: <IoMdAddCircle />,
    title: "New sign ups",
    number: "756",
    percent: "3.1%",
    isPositive: true,
  },
  {
    icon: <FaStar />,
    title: "Subscriptions",
    number: "2.3K",
    percent: "11.3%",
    isPositive: true,
  },
];

export default function AllPages() {
  return (
    <div>
      <nav className="flex justify-between mb-12">
        <div>
          <h2 className="text-xl">Welcome back, John</h2>
          <p className="text-sm text-[var(--neutral-400)]">
            Measure yout advertising ROI and report website traffic.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            backgroundColor="transparent"
            icon={<BsArrowDown size={18} />}
          >
            Export data
          </Button>
          <Button backgroundColor="primary">Create report</Button>
        </div>
      </nav>
      <section id="cards" className="flex gap-6">
        {initialCards.map((item, index) => {
          const customColor = () => {
            if (item.isPositive) {
              return "text-green-400 border border-green-400 bg-green-400/15 w-[80px] rounded-md";
            }
            return "text-red-400 border border-red-400 bg-red-400/15 w-[80px] rounded-md";
          };

          return (
            <Card key={index}>
              <div className="flex justify-between">
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-sm text-[var(--neutral-400)]">
                    {item.icon}
                  </span>
                  <span className="text-sm text-[var(--neutral-400)]">
                    {item.title}
                  </span>
                </div>
                <div>
                  <Button
                    backgroundColor="transparent"
                    icon={<HiDotsHorizontal />}
                    color="neutral"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-semibold">{item.number}</span>
                <div
                  className={`flex gap-2 items-center justify-center pl-2 py-2 text-sm mt-4 ${customColor()}`}
                >
                  {item.percent}
                  {item.isPositive ? (
                    <FiArrowUpRight size={18} />
                  ) : (
                    <FiArrowDownLeft size={18} />
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </section>
      <section className="mt-8">
        <Card>
          <div className="flex w-full justify-between">
            <div className="flex">
              <div className="flex">
                <div>
                  <h3 className="text-[var(--neutral-400)]">Total revenue</h3>
                  <div className="flex">
                    <div className="flex gap-2 py-2">
                      <h2 className="text-2xl">$240.8K</h2>
                      <span className="text-green-400 bg-green-400/10 text-sm p-1 rounded-md">
                        24.6%
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <span className="bg-[var(--primary)] w-[10px] h-[10px] rounded-xl"></span>
                <p className="text-xs">Revenue</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-blue-400 w-[10px] h-[10px] rounded-xl"></span>
                <p className="text-xs">Expenses</p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <DateMonthAndYearDropdown />
                </span>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
