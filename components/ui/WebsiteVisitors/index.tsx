import { FiArrowDown } from "react-icons/fi";

const sources = [
  { name: "Organic", percent: 30, color: "#cb3cff" },
  { name: "Social", percent: 50, color: "#164dff" },
  { name: "Direct", percent: 20, color: "#00c2ff" },
];

const csv = `Source,Percentage\n${sources.map(({ name, percent }) => `${name},${percent}%`).join("\n")}`;

export default function WebsiteVisitors() {
  return (
    <section aria-labelledby="website-visitors-title" className="w-full h-full rounded-2xl bg-[#0b1739] px-8 py-8 text-white">
      <header className="flex items-center justify-between gap-4">
        <h2 id="website-visitors-title" className="text-base font-medium">Website Visitors</h2>
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`}
          download="website-visitors.csv"
          className="inline-flex items-center gap-3 rounded bg-[#07112e] px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cb3cff]"
        >
          Export <FiArrowDown aria-hidden="true" />
        </a>
      </header>

      <div className="relative mx-auto mt-6 w-full max-w-[240px]">
        <svg viewBox="0 0 240 240" className="block w-full" aria-hidden="true">
          <path d="M 8 120 A 112 112 0 1 1 64 217" fill="none" stroke="#cb3cff" strokeWidth="7" />
          <path d="M 20 120 A 100 100 0 1 1 191 191" fill="none" stroke="#164dff" strokeWidth="7" />
          <path d="M 32 120 A 88 88 0 0 1 208 120" fill="none" stroke="#00c2ff" strokeWidth="7" />
        </svg>
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[28px] font-semibold">150k<span className="sr-only"> total visitors</span></p>
      </div>

      <ul className="mt-5 space-y-7">
        {sources.map(({ name, percent, color }) => (
          <li key={name} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-[#aeb9d9]"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />{name}</span>
            <span>{percent}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
