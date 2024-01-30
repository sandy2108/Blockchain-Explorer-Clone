import { configureStore } from "@reduxjs/toolkit";
import api from "../features/latestdata/latestdata-api-slice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
