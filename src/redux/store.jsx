import { configureStore } from '@reduxjs/toolkit'
import fromInputSlice from './fromInputSlice'
import toInputSlice from './toInputSlice'
import fromSelectSlice from './fromSelectSlice'
import toSelectSlice from './toSelectSlice'

export const store = configureStore({
  reducer: {
    fromInput: fromInputSlice,
    toInput: toInputSlice,
    fromSelect: fromSelectSlice,
    toSelect: toSelectSlice
  },
})