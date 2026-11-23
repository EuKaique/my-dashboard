"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Bar, Line, Line2 } from "@/components/ui/Chart";
import { CustomDate } from "@/components/ui/CustomDate";
import { AiFillEye } from "react-icons/ai";
import { BsArrowDown, BsClockFill } from "react-icons/bs";
import { FaStar, FaUser } from "react-icons/fa";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";

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
    <main>
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
          <div className="flex gap-2 justify-end mb-12">
            <div className="flex gap-2 items-center">
                <span className="bg-[var(--primary)] w-[10px] h-[10px] rounded-xl"></span>
                <p className="text-xs">Revenue</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-[#00c2ff] w-[10px] h-[10px] rounded-xl"></span>
                <p className="text-xs">Expenses</p>
              </div>
                <div>
                  <span>
                    <CustomDate.Root>
                      <CustomDate.DropDown />
                    </CustomDate.Root>
                  </span>
                </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full min-w-0">
              <div className="flex items-start w-full flex-wrap justify-between gap-4">
                <div className="mt-[-5rem] border-r h-full border-[var(--neutral-400)]">
                  <h3 className="text-[var(--neutral-400)]">Total revenue</h3>
                  <div className="flex">
                    <div className="flex items-center gap-2 py-2">
                      <h2 className="text-3xl font-semibold">$240.8K</h2>
                      <span className="text-green-400 bg-green-400/10 text-sm p-1 rounded-md">
                        24.6%
                      </span>
                    </div>
                  </div>
                  <Line />
                </div>
                <div>
                  <div className="flex justify-end gap-6">
                    <div className="flex gap-2 items-center">
                      <div className="w-full">
                        <div className="md:w-[30rem] lg:w-[50rem]">
                          <div className="w-full">
                            <p className="mt-[-30px] flex items-center gap-2 mb-2 text-[var(--neutral-400)]">
                              <TfiStatsUp /> Total profit
                            </p>
                            <div className="flex items-center gap-4">
                              <span className="text-3xl font-semibold">
                                $144.6K
                              </span>
                              <span className="flex gap-2 bg-green-400/15 text-sm text-green-400 border border-green-400 rounded-md p-2">
                                28.5% <FiArrowUpRight size={18} />
                              </span>
                            </div>
                            <Bar />
                            <div className="flex justify-between mt-12">
                              <span className="text-[var(--neutral-400)]">
                                Last 12 months
                              </span>
                              <span className="text-[var(--primary)]">
                                View report
                              </span>
                            </div>
                          </div>
                          <div className="w-full mt-[5rem] border-t border-[var(--neutral-400)]">
                            <div className="mt-16">
                              <p className="mt-[-30px] flex items-center gap-2 mb-2 text-[var(--neutral-400)]">
                                <BsClockFill />
                                Total sessions
                              </p>
                              <div className="flex items-center gap-4">
                                <span className="text-3xl font-semibold">
                                  400
                                </span>
                                <span className="flex gap-2 bg-green-400/15 text-sm text-green-400 border border-green-400 rounded-md p-2">
                                  16.8% <FiArrowUpRight size={18} />
                                </span>
                              </div>
                              <Line2 />
                              <div className="flex justify-between mt-12">
                                <div className="flex gap-2 items-center mt-[-1rem]">
                                  <span className="flex gap-2 bg-green-400/15 text-sm text-green-400 border border-green-400 rounded-md p-2 items-center">
                                    <span className="text-2xl mt-[-0.55rem]">
                                      .
                                    </span>{" "}
                                    <span>Live</span>
                                  </span>
                                  <span className="text-[var(--neutral-400)]">
                                    10k visitors
                                  </span>
                                </div>
                                <span className="text-[var(--primary)]">
                                  View report
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
