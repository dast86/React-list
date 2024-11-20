import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users } from "../../interface";
const url = "https://jsonplaceholder.typicode.com/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getUser: builder.query<Users[], void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
