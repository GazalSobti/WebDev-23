import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const notifyActions = notifySlice.actions;

export default notifySlice;
