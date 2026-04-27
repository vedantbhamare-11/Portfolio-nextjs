import { createSlice } from "@reduxjs/toolkit";

export interface Skill {
  name: string;
  color: string;
}

interface SkillsState {
  skillsList: Skill[];
}

const initialState: SkillsState = {
  skillsList: [
    { name: "Web Technologies", color: "from-slate-400 to-gray-400" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-400" },
    { name: "React JS", color: "from-cyan-400 to-blue-400" },
    { name: "Next JS", color: "from-slate-200 to-gray-300" },
    { name: "React Native", color: "from-purple-400 to-pink-400" },
    { name: "Node JS", color: "from-green-400 to-emerald-500" },
    { name: "MongoDB", color: "from-green-500 to-emerald-600" },
    { name: "SQL", color: "from-orange-400 to-amber-500" },
    { name: "Redux", color: "from-red-400 to-orange-400" },
    { name: "Python", color: "from-yellow-400 to-orange-400" },
    { name: "Gen AI", color: "from-fuchsia-500 to-pink-500" },
    { name: "LLMs", color: "from-violet-500 to-purple-600" },
    { name: "AI", color: "from-indigo-500 to-purple-500" },
    { name: "Machine Learning", color: "from-pink-400 to-rose-500" },
    { name: "Deep Learning", color: "from-rose-500 to-red-500" },
    { name: "Computer Vision", color: "from-teal-400 to-cyan-500" },
    { name: "Prompt Engineering", color: "from-amber-400 to-yellow-500" },
    { name: "OpenAI", color: "from-emerald-400 to-teal-500" },
    { name: "Hugging Face", color: "from-yellow-500 to-amber-600" },
    { name: "GitHub", color: "from-slate-300 to-slate-500" },
    { name: "Bootstrap", color: "from-purple-500 to-violet-600" },
    { name: "Data Structures", color: "from-blue-300 to-cyan-400" },
    { name: "Algorithms", color: "from-cyan-300 to-blue-400" },
  ],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skillsList.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skillsList = state.skillsList.filter(
        (skill) => skill.name !== action.payload
      );
    },
  },
});

export const selectSkills = (state: { skills: SkillsState }) =>
  state.skills.skillsList;

export const { addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;