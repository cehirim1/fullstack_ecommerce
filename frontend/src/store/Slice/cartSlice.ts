import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICart {
  id: Number;
  quantity: Number;
  title: string;
  price: Number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: Number;
    count: Number;
  };
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<Pick<ICart, "id">>) => {
      const id = action.payload.id;
      return state.filter((item) => item.id !== id);
    },
    updateQuantity: (
      state,
      action: PayloadAction<Pick<ICart, "id" | "quantity">>
    ) => {
      const { id, quantity } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
    },
    resetCart: () => initialState,
  },
});
