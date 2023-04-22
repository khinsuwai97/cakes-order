import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Cart {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface UserData {
  name: string;
  street: string;
  postalCode: number;
  city: string;
}

type CartDataResponse = {
  id: number;
} & CartDataRequest;

type CartDataRequest = {
  orderItems: Cart[];
  userData: UserData;
};

const sendOrderApi = createApi({
  reducerPath: 'orderItems',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopping-cart-1ad65-default-rtdb.firebaseio.com',
  }),

  endpoints(builder) {
    return {
      orderCartItems: builder.mutation<CartDataResponse, CartDataRequest>({
        query: (data) => {
          return {
            url: '/cart.json',
            method: 'POST',
            body: {
              orderItems: data.orderItems,
              userData: data.userData,
            },
          };
        },
      }),
    };
  },
});

export const { useOrderCartItemsMutation } = sendOrderApi;
export { sendOrderApi };
