import { configureStore } from '@reduxjs/toolkit'
import trackReducer from '../features/TrackSlice'
export const store = configureStore({
  reducer: {
    track:trackReducer,
  },
})