import { CustomDate } from "../CustomDate";

const series = [
  { key: "current", label: "Current clients", color: "#cb3cff" },
  { key: "subscribers", label: "Subscribers", color: "#164dff" },
  { key: "newCustomers", label: "New customers", color: "#00c2ff" },
] as const;

// Illustrative values, in thousands of dollars.
const data = [
  { month: "Jan", current: 14, subscribers: 11, newCustomers: 12 },
  { month: "Feb", current: 31, subscribers: 8, newCustomers: 18 },
  { month: "Mar", current: 38, subscribers: 18, newCustomers: 13 },
  { month: "Apr", current: 37, subscribers: 6, newCustomers: 12 },
  { month: "May", current: 15, subscribers: 10, newCustomers: 6 },
  { month: "Jun", current: 26, subscribers: 20, newCustomers: 7 },
  { month: "Jul", current: 11, subscribers: 7, newCustomers: 0 },
  { month: "Aug", current: 40, subscribers: 4, newCustomers: 26 },
  { month: "Sep", current: 14, subscribers: 11, newCustomers: 13 },
  { month: "Oct", current: 6, subscribers: 17, newCustomers: 25 },
  { month: "Nov", current: 16, subscribers: 16, newCustomers: 11 },
  { month: "Dec", current: 26, subscribers: 5, newCustomers: 22 },
];

export default function RevenueByCustomerType() {
  return (
    <section
      aria-labelledby="revenue-customer-title"
      className="w-full rounded-2xl bg-[#0b1739] p-6 text-white sm:p-8"
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <h2
            id="revenue-customer-title"
            className="text-base font-medium text-[#aeb9e1]"
          >
            Revenue by customer type
          </h2>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-[28px] font-semibold leading-none">
              $240.8K
            </span>
            <span className="rounded bg-[#004d4a] px-1.5 py-1 text-xs text-[#00d99b]">
              14.8% ↗
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {series.map((item) => (
              <li
                key={item.key}
                className="flex items-center gap-1.5 text-xs text-[#aeb9e1]"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-2 rounded bg-[#07112e] px-3 py-2 text-xs text-[#aeb9e1]">
            <CustomDate.Root>
              <CustomDate.DropDown />
            </CustomDate.Root>
          </span>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <svg
          viewBox="0 0 700 360"
          className="block min-w-[560px] w-full"
          role="img"
          aria-label="Illustrative monthly revenue by customer type, January through December 2024, in thousands of dollars"
        >
          {[0, 20, 40, 60, 80, 100].map((tick) => (
            <text
              key={tick}
              x="40"
              y={320 - tick * 2.8}
              textAnchor="end"
              dominantBaseline="middle"
              fill="#aeb9e1"
              fontSize="11"
            >
              {tick}K
            </text>
          ))}
          {data.map((item, index) => {
            const x = 68 + index * 54;
            let bottom = 320;
            return (
              <g key={item.month}>
                {series.map((entry) => {
                  const height = item[entry.key] * 2.8;
                  bottom -= height;
                  return (
                    <rect
                      key={entry.key}
                      x={x}
                      y={bottom}
                      width="8"
                      height={height}
                      fill={entry.color}
                    />
                  );
                })}
                <text
                  x={x + 4}
                  y="350"
                  textAnchor="middle"
                  fill="#aeb9e1"
                  fontSize="11"
                >
                  {item.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
