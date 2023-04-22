import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { useFetchProductsQuery, productsApi } from './api/productsApi';
import { useOrderCartItemsMutation, sendOrderApi } from './api/sendOrderApi';
import {
  paginateReducer,
  handleNextPage,
  hanldePrevPage,
  handlePaginatepage,
} from './slices/paginateSlice';
import {
  addItemToCart,
  removeItemFromCart,
  deletItem,
  clearCart,
  cartReducer,
  getTotalQuanity,
  getTotalAmount,
} from './slices/cartSlice';

import {
  openForm,
  closeForm,
  getName,
  getCity,
  getPostalCode,
  getStreet,
  formReducer,
  clearFormData,
} from './slices/formSlice';

const store = configureStore({
  reducer: {
    paginate: paginateReducer,
    cart: cartReducer,
    form: formReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [sendOrderApi.reducerPath]: sendOrderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(sendOrderApi.middleware);
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { useFetchProductsQuery, useOrderCartItemsMutation };
export {
  store,
  handleNextPage,
  hanldePrevPage,
  handlePaginatepage,
  addItemToCart,
  removeItemFromCart,
  clearCart,
  deletItem,
  openForm,
  closeForm,
  getName,
  getCity,
  getPostalCode,
  getStreet,
  clearFormData,
  getTotalQuanity,
  getTotalAmount,
};
