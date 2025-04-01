// redux/photographySlice.ts

import { createSlice } from '@reduxjs/toolkit';

// Define the shape of the state
interface PhotographyState {
  images: Array<{ src: string, orientation: 'landscape' | 'portrait' }>;
}

// Initial state for the photography slice
const initialState: PhotographyState = {
  images: [
    { src: "Photography/1.jpg", orientation: 'landscape' },
    { src: "Photography/2.jpg", orientation: 'landscape' },
    { src: "Photography/3.jpg", orientation: 'landscape' },
    { src: "Photography/4.jpg", orientation: 'landscape' },
    { src: "Photography/5.jpg", orientation: 'portrait' },
    { src: "Photography/6.jpg", orientation: 'portrait' },
    { src: "Photography/7.jpg", orientation: 'portrait' },
    { src: "Photography/8.jpg", orientation: 'portrait' },
    { src: "Photography/9.jpg", orientation: 'portrait' },
    { src: "Photography/10.jpg", orientation: 'portrait' },
    { src: "Photography/11.jpg", orientation: 'portrait' },
    { src: "Photography/13.jpg", orientation: 'landscape' },
    { src: "Photography/14.jpg", orientation: 'portrait' },
  ],
};

// Create the slice
const photographySlice = createSlice({
  name: 'photography',
  initialState,
  reducers: {
    // Here we can add actions if we want to update the state in the future
  },
});

export const {} = photographySlice.actions;

export default photographySlice.reducer;
