import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetch_cart = createAsyncThunk(
  "fetch_cart",
  async (cart, { rejectWithValue }) => {
    console.log("data", cart);
    const response = await fetch(
      'https://react-http-6b4a6.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );   

    try {
      const result = await response.json();
      return result.items;
    } 
    catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },

  extraReducers: {
    [fetch_cart.pending]: (state) => {
      state.loading = true;
    },
    [fetch_cart.fulfilled]: (state, action) => {
      state.loading = false;
      state.items=action.payload;
    },
    [fetch_cart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
}});






export const cartActions = cartSlice.actions;

export default cartSlice;
