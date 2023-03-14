import React, { useEffect } from 'react';
import Player from "@madzadev/audio-player";
import { useSelector, useDispatch } from 'react-redux'
//import {getTracksfirebase} from '../features/TrackSlice';
//mport { getTracks } from '../features/TrackSlice';
export const Player1 = () => {
    /*const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTracks())
    },[])*/
 const tracks = useSelector((state) => state.track)
console.log(tracks, 'soy track')
  return (
   <h1>probando</h1>
    )
}
