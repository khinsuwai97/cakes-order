import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MenuItem } from '../../types/types';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
interface CartState {
  cart: MenuItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  cart: getLocalStorage<MenuItem[]>('cartItems', []),
  totalQuantity: getLocalStorage<number>('TQ', 0),
  totalAmount: getLocalStorage<number>('TA', 0),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<MenuItem>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.cart.push(action.payload);
      } else {
        existingItem.quantity++;
      }
      setLocalStorage('cartItems', state.cart);
    },

    removeItemFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem?.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
      }
      setLocalStorage('cartItems', state.cart);
    },

    deletItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      const removeItem = state.cart.filter((item) => item.id !== id);
      state.cart = removeItem;
      localStorage.removeItem('cartItems');
    },

    clearCart(state) {
      state.cart = [];
      localStorage.clear();
    },

    getTotalQuanity(state) {
      state.totalQuantity = state.cart.reduce((cartTotal, item): number => {
        return cartTotal + item.quantity;
      }, 0);
    },

    getTotalAmount(state) {
      state.totalAmount = state.cart.reduce((cartTotal, item): number => {
        const { quantity, price } = item;
        const total = quantity * price;
        cartTotal += total;
        return cartTotal;
      }, 0);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  deletItem,
  getTotalQuanity,
  getTotalAmount,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
