
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const TrackSlice = createSlice({
    name:'track',
    initialState,
    reducers:{
        getTracks: (state) => {
            console.log(state)
        }
    }
})

export const {getTracks} = TrackSlice.actions
export default TrackSlice.reducer