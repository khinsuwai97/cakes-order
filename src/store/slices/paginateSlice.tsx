import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MenuItem } from '../../types/types';

interface PaginateState {
  page: number;
}

const initialState: PaginateState = {
  page: 0,
};

const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    handleNextPage(state, action: PayloadAction<MenuItem[][]>) {
      if (state.page === action.payload.length - 1) {
        state.page = 0;
      } else {
        state.page++;
      }
    },

    hanldePrevPage(state, action: PayloadAction<MenuItem[][]>) {
      if (state.page === 0) {
        state.page = action.payload.length - 1;
      } else {
        state.page--;
      }
    },
    handlePaginatepage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { handleNextPage, hanldePrevPage, handlePaginatepage } =
  paginateSlice.actions;

export const paginateReducer = paginateSlice.reducer;
