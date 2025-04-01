// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import skillsReducer from './skillsSlice';
import timelineReducer from "./timelineSlice";
import photographyReducer from './photographySlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    skills: skillsReducer,
    timeline: timelineReducer,
    photography: photographyReducer, // Add photography reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
