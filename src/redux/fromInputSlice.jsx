import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: ""
}

export const fromInputSlice = createSlice({

  name: 'fromInput',
  initialState,
  reducers: {
    setFromInputValue: (state, action) => {
      state.value = action.payload;
    }
  }

})

export const { setFromInputValue } = fromInputSlice.actions
export default fromInputSlice.reducer