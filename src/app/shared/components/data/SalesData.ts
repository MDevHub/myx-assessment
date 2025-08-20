export interface GroupedSalesData {
  month: string;
  blue: number;
  green: number;
  red: number;
}

export const groupedSalesData: GroupedSalesData[] = [
  { month: "Jan", blue: 30, green: 15, red: 8 },
  { month: "Feb", blue: 22, green: 25, red: 14 },
  { month: "Mar", blue: 48, green: 21, red: 16 },
  { month: "Apr", blue: 12, green: 6, red: 19 },
  { month: "May", blue: 38, green: 35, red: 14 },
  { month: "Jun", blue: 30, green: 40, red: 18 },
  { month: "Jul", blue: 34, green: 42, red: 11 },
  { month: "Aug", blue: 38, green: 44, red: 13 },
  { month: "Sep", blue: 40, green: 46, red: 15 },
];
