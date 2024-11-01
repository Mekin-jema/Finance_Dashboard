import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "@/state/types";
import { GetProductResponse } from "@/state/types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["kpis", "products"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["kpis"],
    }),
    getProducts: build.query<Array<GetProductResponse>, void>({
      query: () => "product/products",
      providesTags: ["products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
