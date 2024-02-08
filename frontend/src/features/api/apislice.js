import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
        prepareHeaders: (headers, { getState }) => {
            headers.set("Cache-Control", "no-cache");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchLatestData: builder.query({
            query: () => "/",
        }),
        fetchAddress: builder.query({
            query: (address) => `/address/${address}`,
        }),
        fetchTx: builder.query({
            query: (tx) => `/tx/${tx}`,
        }),
        fetchBlock: builder.query({
            query: (block) => `/block/${block}`,
        }),
        fetchTxs: builder.query({
            query: (block) => `/txs/${block}`
        })
    }),
});

export const { useFetchLatestDataQuery, useFetchAddressQuery, useFetchTxQuery, useFetchBlockQuery, useFetchTxsQuery } = api;
export default api;

