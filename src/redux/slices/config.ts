import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CofigState = {
  isListView: boolean;
}

const initialState = {
  isListView: true,
} as CofigState;

export const ConfigSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<{
      isListView: boolean
    }>) => ({
      ...state,
      isListView: action.payload.isListView
    })
  }
});

export const {
  setView
} = ConfigSlice.actions;