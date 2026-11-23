const devices = [
  { label: "Desktop users", value: "15,624", color: "#cb3cff" },
  { label: "Phone app users", value: "5,546", color: "#a18cff" },
  { label: "Laptop users", value: "2,478", color: "#00c2ff" },
];

const UsersByDevice = () => (
  <section aria-label="Users by device" className="w-full rounded-2xl bg-[#0b1533] px-6 pb-8 pt-12 sm:px-10">
    <div className="relative mx-auto h-[190px] w-full max-w-[280px]">
      <svg viewBox="0 0 280 150" className="block w-full" aria-hidden="true">
        <path d="M 7 140 A 133 133 0 0 1 175 12" fill="none" stroke="#cb3cff" strokeWidth="14" />
        <path d="M 175 12 A 133 133 0 0 1 255 76" fill="none" stroke="#0038ff" strokeWidth="14" />
        <path d="M 255 76 A 133 133 0 0 1 270 115" fill="none" stroke="#00c2ff" strokeWidth="14" />
      </svg>
      <div className="absolute inset-x-0 top-[88px] text-center">
        <p className="text-[40px] leading-tight font-medium text-white">23,648</p>
        <p className="mt-1 text-base text-[#8f9bc4]">Users by device</p>
      </div>
    </div>
    <ul className="mt-8 space-y-6">
      {devices.map((device) => (
        <li key={device.label} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-base text-[#9ba7ce]">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: device.color }} aria-hidden="true" />
            {device.label}
          </span>
          <span className="text-lg text-[#dce4ff]">{device.value}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default UsersByDevice;
