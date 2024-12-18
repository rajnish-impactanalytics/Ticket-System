// src/features/modal/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state: the modal is initially closed
const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Action to toggle the modal state (open/close)
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export the toggleModal action
export const { toggleModal } = modalSlice.actions;

// Export the reducer
export default modalSlice.reducer;
