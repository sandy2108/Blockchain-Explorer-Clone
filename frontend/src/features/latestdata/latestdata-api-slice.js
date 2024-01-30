// latestdata-api-slice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// latestdata-api-slice.js

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/",
        prepareHeaders: (headers, { getState }) => {
            // Append a random parameter to avoid caching
            headers.set("Cache-Control", "no-cache");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchLatestData: builder.query({
            query: () => "",
        }),
    }),
});


export const { useFetchLatestDataQuery } = api;
export default api;
