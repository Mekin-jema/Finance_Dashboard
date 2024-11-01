export interface ExpensesCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface MonthlyData {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperatingExpenses: number;
  operatingExpenses: number;
}
export interface DailyData {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  totalexpense: ExpensesCategory;
  monthlyData: Array<MonthlyData>;
  dailyData: Array<DailyData>;
}
