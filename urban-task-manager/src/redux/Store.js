import { configureStore } from '@reduxjs/toolkit';
import tugasReducer from './TaskSlice';

const store = configureStore({
reducer: {
tugas: tugasReducer,
},
})

export default store;