// redux/photographySlice.ts

import { createSlice } from '@reduxjs/toolkit';

// Define the shape of the state
interface PhotographyState {
  images: Array<{ src: string, orientation: 'landscape' | 'portrait' }>;
}

// Initial state for the photography slice
const initialState: PhotographyState = {
  images: [
    { src: "/photography/1.jpg", orientation: 'landscape' },
    { src: "/photography/2.jpg", orientation: 'landscape' },
    { src: "/photography/3.jpg", orientation: 'landscape' },
    { src: "/photography/4.jpg", orientation: 'landscape' },
    { src: "/photography/5.jpg", orientation: 'portrait' },
    { src: "/photography/6.jpg", orientation: 'portrait' },
    { src: "/photography/7.jpg", orientation: 'portrait' },
    { src: "/photography/8.jpg", orientation: 'portrait' },
    { src: "/photography/9.jpg", orientation: 'portrait' },
    { src: "/photography/10.jpg", orientation: 'portrait' },
    { src: "/photography/11.jpg", orientation: 'portrait' },
    { src: "/photography/13.jpg", orientation: 'landscape' },
    { src: "/photography/14.jpg", orientation: 'portrait' },
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
