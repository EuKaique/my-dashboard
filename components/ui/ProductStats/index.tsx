import type { ReactNode } from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { FiArrowDownRight, FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  direction: "up" | "down";
  icon: ReactNode;
};

export const StatCard = ({ title, value, change, direction, icon }: StatCardProps) => {
  const isUp = direction === "up";

  return (
    <article className="min-w-0 rounded-lg bg-[#0b1739] px-[22px] py-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="flex min-w-0 items-center gap-3 text-sm font-medium text-[#aeb9d9]">
          <span className="shrink-0 text-[#cb3cff]" aria-hidden="true">{icon}</span>
          {title}
        </h3>
        <FiMoreHorizontal className="shrink-0 text-[#c2cbea]" aria-hidden="true" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-[28px] font-semibold leading-none text-white">{value}</span>
        <span className={`flex items-center gap-1 rounded-sm px-1.5 py-1 text-xs ${isUp ? "bg-[#003c40] text-[#00d69b]" : "bg-[#4b2940] text-[#ff5266]"}`}>
          {change}
          {isUp ? <FiArrowUpRight aria-label="increase" /> : <FiArrowDownRight aria-label="decrease" />}
        </span>
      </div>
    </article>
  );
};

const ProductStats = () => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard title="Save Products" value="50.8K" change="28.4%" direction="up" icon={<FaHeart />} />
    <StatCard title="Stock Products" value="23.6K" change="12.6%" direction="down" icon={<FaShoppingBag />} />
    <StatCard title="Sale Products" value="756" change="3.1%" direction="up" icon={<HiShoppingBag />} />
    <StatCard title="Average Revenue" value="2.3K" change="11.3%" direction="up" icon={<FiDollarSign />} />
  </div>
);

export default ProductStats;
