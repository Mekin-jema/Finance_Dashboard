import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import {
  Area,
  AreaChart,
  CartesianGrid,
  LineChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Line,
  BarChart,
} from "recharts";
import { useTheme } from "@mui/material";
import { useMemo } from "react";

import BoxHeader from "@/components/BoxHeader";

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
  const revenueProfit = useMemo(() => {
    if (data) {
      return (
        data &&
        data[0].monthlyData.map(({ month, revenue, expenses }) => ({
          name: month.substring(0, 3),
          revenue,
          profit: (revenue - expenses).toFixed(2),
        }))
      );
    }
    return [];
  }, [data]);
  const revenue = useMemo(() => {
    if (data) {
      return (
        data &&
        data[0].monthlyData.map(({ month, revenue }) => ({
          name: month.substring(0, 3),
          revenue: revenue,
        }))
      );
    }
    return [];
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expensed"
          subtitle="top line respresent revenue ,bottom line represents expens "
          sideText="+4%"
        />
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
            <Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />

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
      <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line respresent revenue ,bottom line represents expens "
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={730}
            height={250}
            data={revenueProfit}
            margin={{ top: 20, right: 0, left: -10, bottom: 55 }}
          >
            {/* <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
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
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs> */}
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={{ stroke: "0" }}
              // domain={[8000, 23000]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
              // domain={[8000, 23000]}
            />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="profit"
              stroke={palette.secondary.main}
              // fillOpacity={1}
              // fill="url(#colorRevenue)"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              yAxisId="right"
              stroke={palette.primary.main}
              // fillOpacity={1}
              // fill="url(#colorExpenses)"
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="top line respresent revenue ,bottom line represents expens "
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{ top: 17, right: 15, left: -5, bottom: 58 }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
              // domain={[8000, 23000]}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: "0 0 10px 0" }} />
            <Bar
              type="monotone"
              dataKey="revenue"
              stroke={palette.secondary.main}
              // fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
