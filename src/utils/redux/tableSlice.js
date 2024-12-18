// src/redux/tableSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { ROW_DATA } from "../../components/table/constants";

const initialState = {
  rows: ROW_DATA
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    // Set the entire table data
    addRow: (state, action) => {
        state.rows.push(action.payload);  // Append the new row
      },

    // Generic reducer to update a row's field
    updateRow: (state, action) => {
      const { serialNumber, field, value } = action.payload;

      // Find the row by serialNumber and update the field
      const row = state.rows.find((r) => r.serialNumber === serialNumber);
      if (row) {
        row[field] = value;
      }
    },
  },
});

// Actions and Reducer export
export const { addRow, updateRow } = tableSlice.actions;
export default tableSlice.reducer;
