
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';
const initialState = createAsyncThunk(
async () => {
const q = query(collection(db, 'tracks'));
onSnapshot(q, (querySnapshot) => {
const Tracks = [];
querySnapshot.forEach((doc) => {
  Tracks.push({ ...doc.data(), id: doc.id });
});
return Tracks ; 
})
  }
)

export const TrackSlice = createSlice({
    name:'track',
    initialState,
    reducers:{/*
      getTracks: (state) => {
       state.value.push(getTracksfirebase())
      console.log('holaa')
      console.log(state.value)
      }
    */},/*
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(getTracksfirebase,(state, action) => {
        // Add user to the state array
        state.value.push(action.payload)
      })
    },*/
  });

//export const {getTracks} = TrackSlice.actions
export default TrackSlice.reducer