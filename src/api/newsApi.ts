import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INewsRequest, IObjRequest } from '../types/interfase';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env['VITE_BASE_URL'],
  }),
  endpoints: (builder) => ({
    getNews: builder.query<INewsRequest, IObjRequest>({
      query: (filter) => ({
        url: ``,
        params: filter,
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
