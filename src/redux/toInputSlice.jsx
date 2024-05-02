import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ""
}


export const toInputSlice = createSlice({

  name: 'toInput',
  initialState,
  reducers: {
    setToInputValue: (state, action) => {
      state.value = action.payload
    }
  }


})


export const { setToInputValue } = toInputSlice.actions
export default toInputSlice.reducer