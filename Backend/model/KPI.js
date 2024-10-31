import mongoose, { mongo, Schema } from "mongoose";

import { loadType } from "mongoose-currency";

const daySchema = new mongoose.Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new mongoose.Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    nonOperatinalExpenses: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new mongoose.Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    totalExpense: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        Currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    daylySchema: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
