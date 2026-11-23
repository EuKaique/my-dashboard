"use client";

import { useRef, useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";

export type RecentOrder = {
  id: string;
  date: string;
  status: "Paid" | "Pending";
  total: number;
};

const sampleOrders: RecentOrder[] = [
  { id: "1532", date: "2023-12-30T10:06:00", status: "Paid", total: 329.4 },
  { id: "1531", date: "2023-12-29T02:59:00", status: "Pending", total: 117.24 },
  { id: "1530", date: "2023-12-29T00:54:00", status: "Pending", total: 52.16 },
  { id: "1529", date: "2023-12-28T14:32:00", status: "Paid", total: 350.52 },
  { id: "1528", date: "2023-12-27T14:20:00", status: "Pending", total: 246.78 },
  { id: "1527", date: "2023-12-26T09:48:00", status: "Paid", total: 64 },
];

export const RecentOrders = ({ orders = sampleOrders }: { orders?: RecentOrder[] }) => {
  const [month, setMonth] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const selectAllRef = useRef<HTMLInputElement>(null);
  const visible = month ? orders.filter((order) => order.date.startsWith(month)) : orders;
  const selectedCount = visible.filter((order) => selected.includes(order.id)).length;

  useEffect(() => {
    if (selectAllRef.current) selectAllRef.current.indeterminate = selectedCount > 0 && selectedCount < visible.length;
  }, [selectedCount, visible.length]);

  const checkboxClass = "h-3.5 w-3.5 cursor-pointer accent-[#cb3cff]";

  return (
    <section className="w-full overflow-hidden rounded-2xl bg-[#0b1739] text-white">
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 pb-6 pt-9">
        <h2 className="text-lg font-medium">Recent orders</h2>
        <label className="flex items-center gap-2 rounded bg-[#07112e] px-3 py-2 text-xs text-[#aeb9e1]">
          <FaCalendar aria-hidden="true" />
          <span className="sr-only">Filter by month</span>
          <input type="month" value={month} onChange={(event) => setMonth(event.target.value)} className="min-w-0 bg-transparent text-[#aeb9e1] outline-none [color-scheme:dark]" />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[530px] text-left text-xs">
          <thead>
            <tr className="h-10">
              <th scope="col" className="pl-8 font-medium"><div className="flex items-center gap-2"><input ref={selectAllRef} type="checkbox" aria-label="Select all visible orders" className={checkboxClass} checked={visible.length > 0 && selectedCount === visible.length} onChange={(event) => setSelected((previous) => event.target.checked ? [...new Set([...previous, ...visible.map((order) => order.id)])] : previous.filter((id) => !visible.some((order) => order.id === id)))} />Order</div></th>
              <th scope="col" className="font-medium">▣ Date</th>
              <th scope="col" className="font-medium">▣ Status</th>
              <th scope="col" className="pr-8 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((order, index) => (
              <tr key={order.id} className={index % 2 === 0 ? "h-[51px] bg-[#07112e]" : "h-[51px]"}>
                <td className="pl-8"><div className="flex items-center gap-2"><input type="checkbox" aria-label={`Select order #${order.id}`} className={checkboxClass} checked={selected.includes(order.id)} onChange={(event) => setSelected((previous) => event.target.checked ? [...previous, order.id] : previous.filter((id) => id !== order.id))} />#{order.id}</div></td>
                <td className="text-[#c1cbea]">{new Date(order.date).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</td>
                <td><span className={`inline-block rounded-sm px-2 py-1 ${order.status === "Paid" ? "bg-[#003b39] text-[#00e096]" : "bg-[#4a3a31] text-[#ffb600]"}`}>• {order.status}</span></td>
                <td className="pr-8 text-right text-[#dce4ff]">{order.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
              </tr>
            ))}
            {visible.length === 0 && <tr><td colSpan={4} className="px-8 py-8 text-center text-[#aeb9e1]">No orders for this month.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
};
