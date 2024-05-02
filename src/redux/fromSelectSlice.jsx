import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Turkish"
}

export const fromInputSlice = createSlice({

  name: 'fromSelect',
  initialState,
  reducers: {
    setSelectInputValue: (state, action) => {
      state.value = action.payload
    }
  }


})

export const { setSelectInputValue } = fromInputSlice.actions
export default fromInputSlice.reducer