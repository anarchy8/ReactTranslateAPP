import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "de"
}

export const toSelectSlice = createSlice({
  name: 'toSelect',
  initialState,

  reducers: {
    setToSelectValue: (state, action) => {
      state.value = action.payload
    }

  }
})

export const { setToSelectValue } = toSelectSlice.actions
export default toSelectSlice.reducer