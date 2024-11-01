import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material";
import { useMemo } from "react";

const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  console.log("🚀 ~ Row1 ~ data:", data);
  const revenueExpenses = useMemo(() => {
    if (data) {
      return (
        data &&
        data[0].monthlyData.map(({ month, revenue, expenses }) => ({
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        }))
      );
    }
    return [];
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={revenueExpenses}
            margin={{ top: 15, right: 25, left: -10, bottom: 60 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={{ stroke: "0" }}
              domain={[8000, 23000]}
            />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={palette.secondary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
    </>
  );
};

export default Row1;
