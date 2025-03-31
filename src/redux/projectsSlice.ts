// redux/projectsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface ProjectsState {
  expandedProject: number | null;
  projects: Project[];
}

const initialState: ProjectsState = {
  expandedProject: null,
  projects: [
    {
      id: 1,
      title: "FocusForge",
      description:
        "It is a productivity web application that aids users in concentrating on their work and accomplishing their objectives.  By turning on Pomodoro clocks, calendars, habit trackers, Todo task lists, and more.  Additionally, soothing music and stunning wallpapers featuring the current time and inspirational sayings.",
      link: "https://www.notion.so/vedantbhamare/Trip-and-Itinerary-Planner-b4ae2dc976954d66a101caa341847e67",
    },
    {
      id: 2,
      title: "WordSense AI",
      description:
        "WordSense, an AI extension for Chrome, enables users find the meaning of words while they're on the go and filter out the areas they wish to study.  Additionally, cross-language meanings are included.",
      link: "https://www.notion.so/vedantbhamare/Trip-and-Itinerary-Planner-b4ae2dc976954d66a101caa341847e67",
    },
    {
      id: 3,
      title: "AI Trip Planner",
      description:
        "AI Trip Planner helps users create customized travel itineraries based on trip duration, destination, and style. Leveraging Geoapify's Places API, it provides a detailed daily plan, suggests popular places, and offers hotel booking options. Features include an interactive UI, PDF export, and hotel booking integration.",
      link: "https://www.notion.so/vedantbhamare/Trip-and-Itinerary-Planner-b4ae2dc976954d66a101caa341847e67",
    },
    {
      id: 4,
      title: "Machine Learning for Road Assets and Defects",
      description:
        "Implemented object detection for road asset monitoring and defect detection on Indian roads, following NHAI guidelines. Enhanced road safety by automatically identifying and classifying assets while detecting defects like potholes and cracks.",
      link: "https://vedantbhamare.notion.site/Machine-Learning-for-Road-Assets-and-Defects-ca2028b6f5254101be9129ea9b048028?pvs=4",
    },
    {
      id: 5,
      title: "Arogya: Diet and Yoga Scheduler",
      description:
        "This is the web-based Diet and Yoga Scheduler which uses a machine learning model to generate diet and yoga plans using users BMI and BMR for accurate plans.",
      link: "https://vedantbhamare.notion.site/Arogya-Diet-and-Yoga-Scheduler-f095df04dbd14a4e8d7b634d58ea1e98",
    },
    {
      id: 6,
      title: "Spi Game",
      description:
        "Spi is a multiplayer life simulation game where players navigate life processes to proliferate their species online. The game ends when a player exhausts energy or available space, promoting fair play with equal control for all.",
      link: "https://vedantbhamare.notion.site/Spi-Game-b06a125eacd94bd29e41ce7ef6b61e99",
    },
    {
      id: 7,
      title: "AI Virtual Mouse Using Hand Gesture and Voice Assistant",
      description:
        "Explore the future of human-computer interaction with the AI Virtual Mouse. Effortlessly navigate your device using hand gestures and voice commands, revolutionizing productivity, accessibility, and security in a seamless integration across devices.",
      link: "https://vedantbhamare.notion.site/AI-Virtual-Mouse-Using-Hand-Gesture-and-Voice-Assistant-6e6218fb0cd94bfda5a2a1fa4f7e3f63",
    },
    {
      id: 8,
      title: "Effective Graph Library",
      description:
        "It is an open-source graph library which includes different types of graph algorithms. This library was implemented in the C++ language.",
      link: "https://vedantbhamare.notion.site/Effective-Graph-Library-1526b811095d49a7854863aef3b25075",
    },
    
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    toggleProjectDescription(state, action: PayloadAction<number>) {
      if (state.expandedProject === action.payload) {
        state.expandedProject = null; // Collapse the project if it's already expanded
      } else {
        state.expandedProject = action.payload; // Expand the clicked project
      }
    },
  },
});

export const { toggleProjectDescription } = projectsSlice.actions;
export default projectsSlice.reducer;
