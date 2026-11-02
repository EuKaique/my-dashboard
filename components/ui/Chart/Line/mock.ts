const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const customData = [
  { id: "Revenue", data: [0, 10, 35, 85, 100, 125.2, 125, 140, 165, 195, 220, 230].map((y, index) => ({ x: months[index], y })) },
  { id: "Expenses", data: [55, 65, 30, 40, 95, 100, 90, 180, 170, 105, 85, 110].map((y, index) => ({ x: months[index], y })) },
];
