// src/redux/timelineSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a timeline card
interface TimelineCard {
  date: string;
  title: string;
  description: string;
  svgIcon?: string;
  logoUrl?: string;
}

// Define the initial state for the timeline slice
interface TimelineState {
  timelineData: TimelineCard[];
}

const initialState: TimelineState = {
  timelineData: [
    {
        date: "Year 2017",
        title: "My First Line of Code",
        description:
          "In my tenth grade year, I started to get interested in the topic of web development. The introduction of HTML, CSS, and JS increased my interest in coding. After that, I experimented with JavaScript, which provided the framework for my technological journey.",
        svgIcon:
          "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5", // Example path for this step
      },
      {
        date: "Year 2019 - 2023",
        title: "Making of a Computer Engineer",
        description:
          "Began my journey to become a computer engineer! Developed proficiency in Python, JavaScript, and Java. Explored the area of web development and produced notable pieces.",
        svgIcon:
          "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5", // Example path for this step
      },
      {
        date: "June 2023 - August 2023",
        title: "Introduced to Machine Learning at IBC Cube",
        description:
          "Worked as an ML intern at IBC Cube! Worked on Asset/Defect Detection on Roads using Machine Learning with an incredible team. Practical experience in data preprocessing, model training, and assessment. Using ML and Python libraries to create creative solutions.",
        logoUrl: "ibc.png", // Example logo URL
      },
      {
        date: "August 2023 - September 2023",
        title: "Bootcamp at Procedure - Product Development 101",
        description:
          "Built 2 web applications using HTML, CSS, TypeScript, ReactJS, and various frameworks. Collaborated on team projects, accelerating issue resolution by 60% and enhancing teamwork. Engaged with 10+ developers, fostering knowledge sharing, and implemented 4 new design patterns for improved code quality.",
        logoUrl: "procedure.png", // Example logo URL
      },
      {
        date: "Feb 2024 - May 2024",
        title: "Freelance Project - WOFO and Mentorship",
        description:
          "Designed system architecture with detailed data flow diagrams, ensuring faster onboarding for new team members. Developed user-friendly front-end interfaces using Next.js, TypeScript, and Figma, resulting in higher user engagement. Mentored interns, leading to an improvement in their ReactJS and Next.js development skills.",
        svgIcon:
          "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z", // Example path for this step
      },
      {
        date: "Sept 2024 - Present",
        title: "Developer and AI/ML Engineer at TMCC",
        description:
          "Worked as a Developer and AI/ML Engineer at TMCC, contributing to multiple projects involving React Native, Next.js, and RAG applications. Focused on fine-tuning models and working with large language models (LLMs) to enhance application performance and capabilities.",
        logoUrl: "tmcc.png", // Example logo URL
      },
  ],
};

// Create the timeline slice
const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setTimelineData(state, action: PayloadAction<TimelineCard[]>) {
      state.timelineData = action.payload;
    },
  },
});

export const { setTimelineData } = timelineSlice.actions;

export default timelineSlice.reducer;
