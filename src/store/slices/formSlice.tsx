import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Form {
  name: string;
  street: string;
  postalCode: number;
  city: string;
  showForm: boolean;
}

const initalState: Form = {
  name: '',
  street: '',
  postalCode: 0,
  city: '',
  showForm: false,
};

const formSlice = createSlice({
  name: 'checkoutForm',
  initialState: initalState,
  reducers: {
    openForm(state) {
      state.showForm = true;
    },
    closeForm(state) {
      state.showForm = false;
    },

    getName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    getStreet(state, action: PayloadAction<string>) {
      state.street = action.payload;
    },
    getPostalCode(state, action: PayloadAction<number>) {
      state.postalCode = action.payload;
    },
    getCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },

    clearFormData(state) {
      state.name = '';
      state.city = '';
      state.street = '';
      state.postalCode = 0;
    },
  },
});

export const {
  openForm,
  closeForm,
  getName,
  getCity,
  getPostalCode,
  getStreet,
  clearFormData,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
