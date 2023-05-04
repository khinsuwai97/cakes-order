import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Cakes {
  difficulty: string;
  id: string;
  image: string;
  title: string;
}

const productsApi = createApi({
  reducerPath: 'cakes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-birthday-cake-db.p.rapidapi.com/',
    prepareHeaders(headers) {
      headers.set(
        'X-RapidAPI-Key',
        '97717bf118mshe00787ee5f3e504p1b071fjsn688f9f005c65'
      );
      headers.set('X-RapidAPI-Host', 'the-birthday-cake-db.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<Cakes[], void>({
        query: () => {
          return {
            url: '',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchProductsQuery } = productsApi;

export { productsApi };
