import { createSlice } from "@reduxjs/toolkit";
import { notifyActions } from "./notifySlice";
//import { createAsyncThunk } from "@reduxjs/toolkit"

//export const fetch_cart = createAsyncThunk(
//  "fetch_cart",
//  async (cart, { rejectWithValue }) => {
//    console.log("data", cart);
//    const response = await fetch(
//      "https://redux-cart-88c8a-default-rtdb.firebaseio.com/cart.json",
//      {
//        method: "PUT",
//        body: JSON.stringify(cart),
//      }
//    );
//
//    try {
//      const result = await response.json();
//      return result.items;
//    } catch (error) {
//      return rejectWithValue(error);
//    }
//  }
//);
//
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

// extraReducers: {
//    [fetch_cart.pending]: (state) => {
//      state.loading = true;
//    },
//    [fetch_cart.fulfilled]: (state, action) => {
//      state.loading = false;
//      state.items = action.payload;
//    },
//    [fetch_cart.rejected]: (state, action) => {
//      state.loading = false;
//      state.error = action.payload.message;
//    },
//  },



});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notifyActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://redux-cart-88c8a-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        notifyActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        notifyActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
