// src/store/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skillsList: [
    'Web Technologies',
    'TypeScript',
    'Node JS',
    'React JS',
    'Next JS',
    'React Native',
    'MongoDB',
    'SQL',
    'Hugging Face',
    'Redux',
    'Python',
    'GitHub',
    'Bootstrap',
    'Data Structures',
    'Algorithms',
    'Gen AI',
    'LLMs',
    'Prompt Engineering',
    'OpenAI',
    'AI',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    "  ",
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skillsList.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skillsList = state.skillsList.filter(skill => skill !== action.payload);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
