import { FiDownload } from "react-icons/fi";
import { useId } from "react";

const countries = [
  { name: "United states", percent: 30, color: "#cb3cff" },
  { name: "United Kingdom", percent: 20, color: "#8290b8" },
  { name: "Canada", percent: 20, color: "#a18cff" },
  { name: "Australia", percent: 15, color: "#00c2ff" },
  { name: "Spain", percent: 15, color: "#d2dcff" },
];

const csv = "Country,Percentage\n" + countries.map((country) => `${country.name},${country.percent}%`).join("\n");

const UsersByCountry = () => {
  const patternId = useId();
  return (
  <section className="flex w-full flex-col gap-8 overflow-hidden rounded-2xl bg-[#0b1739] p-8 text-white lg:flex-row">
    <div className="w-full shrink-0 lg:w-[306px]">
      <h2 className="text-lg font-medium">Users by country</h2>
      <div className="mt-1 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[28px] font-semibold leading-none">12.4 K</span>
          <span className="rounded bg-[#004d4a] px-1.5 py-1 text-xs text-[#00d99b]">28.5% ↗</span>
        </div>
        <a href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`} download="users-by-country.csv" className="flex items-center gap-1.5 rounded bg-[#07112e] px-3 py-2 text-sm">
          Export <FiDownload aria-hidden="true" />
        </a>
      </div>
      <ul className="mt-7 space-y-5">
        {countries.map((country) => (
          <li key={country.name} className="flex items-end justify-between gap-4 text-sm text-[#aeb9d9]">
            <div className="min-w-0 flex-1">
              <span>{country.name}</span>
              <div className="mt-1.5 h-1 rounded-full" style={{ width: `${country.percent * 4}px`, backgroundColor: country.color }} />
            </div>
            <span>{country.percent}%</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative mx-auto w-full max-w-[700px] self-center">
      <svg viewBox="0 0 700 350" className="w-full" role="img" aria-label="Mapa ilustrativo com marcadores de usuários por país">
        <defs>
          <pattern id={patternId} width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#536184" /></pattern>
        </defs>
        <g fill={`url(#${patternId})`}>
          <path d="M14 91 42 82 77 84 91 57 124 44 145 25 180 19 203 5 224 9 225 27 248 10 277 10 290 23 280 45 278 70 260 81 287 89 291 107 268 104 250 93 231 106 214 89 198 75 183 78 193 96 193 121 211 144 195 158 180 175 170 195 148 198 129 185 111 170 98 148 82 143 70 127 54 134 36 131 15 139Z" />
          <path d="M164 190 188 196 205 211 226 218 246 233 241 257 224 273 214 293 200 308 192 337 181 337 176 303 169 280 159 263 155 236 148 216Z" />
          <path d="M298 112 312 100 326 104 338 84 359 75 379 79 396 63 415 66 425 47 449 42 454 26 468 20 486 30 501 41 520 47 535 65 556 65 571 57 585 63 598 75 622 74 643 90 646 110 625 119 608 110 584 116 570 130 545 127 526 139 505 135 488 148 474 171 455 164 445 185 431 183 420 169 407 176 390 166 376 176 359 166 345 157 329 160 311 145 296 141Z" />
          <path d="M316 151 344 152 363 163 385 166 404 184 399 211 386 231 375 250 370 279 354 295 339 294 331 274 315 262 306 240 291 225 294 204 302 183Z" />
          <path d="M489 231 510 234 525 246 542 242 560 251 574 265 577 284 564 303 546 299 533 287 515 294 506 283 506 265 495 255Z" />
          <path d="M600 283 608 286 607 302 596 307 589 300Z M419 18 454 18 454 28 419 28Z" />
        </g>
        {[[99, 170, "#cb3cff"], [317, 121, "#cb3cff"], [396, 78, "#cb3cff"], [324, 250, "#cb3cff"], [598, 81, "#cb3cff"], [541, 272, "#00c2ff"]].map(([x, y, color]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="20" fill={color} opacity=".2" />
            <circle cx={x} cy={y} r="12" fill={color} opacity=".4" />
            <circle cx={x} cy={y} r="5" fill={color} />
          </g>
        ))}
      </svg>
      <div className="absolute right-[7%] top-[35%] flex items-center gap-3 rounded bg-[#0b1739] px-4 py-3 shadow-lg">
        <span aria-hidden="true" className="h-9 w-3 rounded-l-full border-l-[6px] border-[#00c2ff]" />
        <div><p className="text-lg leading-tight">1.86 K</p><p className="text-xs text-[#aeb9d9]">Australia</p></div>
      </div>
    </div>
  </section>
  );
};

export default UsersByCountry;
