// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import skillsReducer from './skillsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
