import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import {
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  CartesianGrid,
  Scatter,
  ZAxis,
} from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

import BoxHeader from "@/components/BoxHeader";
import FlexBetween from "@/components/FlexBetween";

const pieData = [
  {
    name: "Group A",
    value: 600,
  },
  { name: "Group B", value: 400 },
];
const Row2 = () => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  // console.log("🚀 ~ Row2 ~ data:", data);
  const operationalExpenses = useMemo(() => {
    if (operationalData) {
      return (
        operationalData &&
        operationalData[0].monthlyData.map(
          ({ month, operationalExpenses, nonOperationalExpenses }) => ({
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          })
        )
      );
    }
    return [];
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    if (productData) {
      return (
        productData &&
        productData.map(({ _id, expense, price }) => ({
          id: _id,
          price,
          expense,
        }))
      );
    }
    return [];
  }, [productData]);

  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={730}
            height={250}
            data={operationalExpenses}
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
              orientation="left"
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
              dataKey="Non Operational Expenses"
              stroke={palette.secondary.main}
              // fillOpacity={1}
              // fill="url(#colorRevenue)"
            />
            <Line
              type="monotone"
              dataKey="Operational Expenses"
              yAxisId="right"
              stroke={palette.primary.main}
              // fillOpacity={1}
              // fill="url(#colorExpenses)"
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns  and Targets   sideText " sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{ top: 0, right: -10, left: 10, bottom: 0 }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem " flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales </Typography>
            <Typography variant="h3" m="0.3rem 0" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue </Typography>
            <Typography variant="h6">Lossess are down 25% </Typography>
            <Typography variant="h5" mt="0.4rem">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last Month
            </Typography>
          </Box>
        </FlexBetween>
        <Legend />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Product Pricess Vs Expenses " sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 25, bottom: 40, left: 0 }}>
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />

            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name=" Product Expense Ratio "
              data={productExpenseData}
              fill={palette.primary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
