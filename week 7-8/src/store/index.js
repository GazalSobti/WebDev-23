import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import notifySlice from './notifySlice';

const store = configureStore({
  reducer: {  cart: cartSlice.reducer, notify : notifySlice.reducer },
});

export default store;