const Line2 = () => (
  <div className="w-full min-w-0 bg-[#0b1533]">
    <svg
      viewBox="0 0 787 292"
      className="block h-auto w-full"
      role="img"
      aria-label="Gráfico de linha ilustrativo ao longo do dia, de 12 AM a 11 PM."
    >
      <g fill="#aeb9e1" fontFamily="Arial, sans-serif" fontSize="18">
        <text x="58" y="59" textAnchor="end">500</text>
        <text x="58" y="117" textAnchor="end">250</text>
        <text x="58" y="174" textAnchor="end">100</text>
        <text x="58" y="231" textAnchor="end">0</text>
        <text x="120" y="260" textAnchor="middle">12 AM</text>
        <text x="316" y="260" textAnchor="middle">8 AM</text>
        <text x="508" y="260" textAnchor="middle">4 PM</text>
        <text x="701" y="260" textAnchor="middle">11 PM</text>
      </g>
      <polyline
        points="79,217 123,203 151,165 195,197 227,151 270,180 341,197 400,155 444,79 514,203 592,203 646,151 684,197 729,217"
        fill="none"
        stroke="#cb3cff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default Line2;
