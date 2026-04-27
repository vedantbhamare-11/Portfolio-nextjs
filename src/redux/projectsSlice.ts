// redux/projectsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProjectCategory = "professional" | "personal";

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string; // notion page (fallback)
  liveUrl?: string; // actual live demo
  category: ProjectCategory;
  githubUrl?: string;
  tags?: string[];
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
      title: "SPI Game",
      description:
        "Multiplayer life simulation game with interactive gameplay, resulting in 30+ downloads and 40% surge in player engagement within the first month.",
      link: "https://vedantbhamare.notion.site/Spi-Game-b06a125eacd94bd29e41ce7ef6b61e99",
      category: "personal",
      tags: ["Game Dev", "Multiplayer"],
      liveUrl:
        "https://drive.google.com/file/d/1E50ZcTTCGdU-7QJAog6ffIHoD4XDnsJg/view?usp=sharing",
    },
    {
      id: 2,
      title: "WordSense",
      description:
        "Chrome extension providing instant word definitions and pronunciations powered by dictionary APIs.",
      link: "https://vedantbhamare.notion.site/WordSense-AI-Meanings-are-your-Fingertips-1cc67c5bdc6780888203f8e91c08fb2e?pvs=74",
      category: "personal",
      githubUrl: "https://github.com/vedantbhamare-11/WordSense",
      tags: ["Chrome Extension", "API"],
      liveUrl:
        "https://chromewebstore.google.com/detail/wordsense/mnbcfmjkkeojdmhjcbelnijejfipehdj?hl=en&authuser=0",
    },
    {
      id: 3,
      title: "Road Assets ML",
      description:
        "ML models for road asset/defect detection following NHAI standards, achieving 80% accuracy and 30% maintenance cost reduction.",
      link: "https://vedantbhamare.notion.site/Machine-Learning-for-Road-Assets-and-Defects-ca2028b6f5254101be9129ea9b048028?pvs=4",
      category: "professional",
      tags: ["Machine Learning", "Python", "NHAI"],
    },
    {
      id: 4,
      title: "Jupiter",
      description:
        "AI-powered content creation platform generating dynamic social media posts across platforms using Gen AI/LLMs. Achieved 90% client approval on first drafts.",
      link: "https://vedantbhamare.notion.site/Jupiter-AI-Powered-Social-Media-Content-Creation-Platform-34f67c5bdc6780b891dfe2ada42f5b7c?pvs=74",
      category: "professional",
      tags: ["LLMs", "Gen AI", "Social Media"],
    },
    {
      id: 5,
      title: "Cashflow",
      description:
        "Full-stack contract management system with e-signatures, automated invoicing, payment gateways (Razorpay), and cash flow analytics. Reduced payment delays by 25%.",
      link: "https://vedantbhamare.notion.site/Cashflow-Comprehensive-Contract-Payment-Management-System-34f67c5bdc678036b063f7790e31cfe3",
      category: "professional",
      tags: ["Razorpay", "Node.js", "Analytics"],
    },
    {
      id: 6,
      title: "TeambO",
      description:
        "Hierarchical task tracking system (CEO to interns) with drag-and-drop boards, AI insights, time tracking, and productivity analytics. Cut task resolution time by 25%.",
      link: "https://vedantbhamare.notion.site/TeambO-Intelligent-Hierarchical-Task-Tracking-System-34f67c5bdc6780f6be4dc692e9e45147",
      category: "professional",
      tags: ["AI", "Drag & Drop", "Analytics"],
    },
    {
      id: 7,
      title: "Interconnect",
      description:
        "In-house LinkedIn-style platform for client research sharing with profiles, content feeds, advanced search, and analytics.",
      link: "https://vedantbhamare.notion.site/Interconnect-Client-Research-Networking-Platform-34f67c5bdc6780b9b969df1470e86b3c",
      category: "professional",
      tags: ["React Native", "WebSockets", "MongoDB"],
      liveUrl: "https://interconnect.blockchainforimpact.in/landing",
    },

    {
      id: 8,
      title: "FocusForge",
      description:
        "All-in-one productivity dashboard with Pomodoro timer, habit tracker, task list, calendar, focus audio, gamified points system, and motivational quotes — built for deep work and consistency.",
      link: "https://vedantbhamare.notion.site/FocusForge-Build-Habits-Boost-Productivity-1cc67c5bdc6780aab52ef09d443f789b",
      category: "personal",
      githubUrl:
        "https://github.com/vedantbhamare-11/FocusForge-Productivity-Tracker",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      id: 9,
      title: "Whizz & Whizz Rider",
      description:
        "Hyper-local food delivery app for Chennai + rider tracking app with GPS navigation, order management, and full-stack development. Optimized delivery by 20%.",
      link: "https://vedantbhamare.notion.site/Rider-Tracker-App-Real-Time-Location-Battery-Monitoring-1cd67c5bdc6780ccaf85fe48525a3666",
      category: "professional",
      tags: ["React Native", "Node.js", "MongoDB"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.whizzrider&pcampaignid=web_share",
    },
    {
      id: 10,
      title: "SWINS",
      description:
        "Social media-style platform for companies to appreciate peer work with points system, leaderboards, and real-time notifications.",
      link: "https://vedantbhamare.notion.site/SWINS-Social-Peer-Appreciation-Recognition-Platform-34f67c5bdc6780e5bf17d65b9819dc0f?pvs=74",
      category: "professional",
      tags: ["React Native", "Redux", "WebSockets"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.tmcc.smallwins&pcampaignid=web_share",
    },
    {
      id: 11,
      title: "WordSense AI",
      description:
        "5-star Chrome extension providing instant word definitions, pronunciations, cross-language support, and dark mode compatibility. AI-driven.",
      link: "https://vedantbhamare.notion.site/WordSense-AI-Meanings-are-your-Fingertips-1cc67c5bdc6780888203f8e91c08fb2e?pvs=74",
      category: "personal",
      githubUrl: "https://github.com/vedantbhamare-11/WordSense-Gemini",
      tags: ["Chrome Extension", "AI", "GPT"],
      liveUrl:
        "https://chromewebstore.google.com/detail/wordsense/mnbcfmjkkeojdmhjcbelnijejfipehdj?hl=en&authuser=0",
    },
    {
      id: 12,
      title: "CurryCue",
      description:
        "AI-powered cooking assistant that generates personalized recipes based on ingredients you already have at home. Features cuisine/meal/difficulty filters, dietary preferences, and GPT-4o integration.",
      link: "https://www.notion.so/vedantbhamare/CurryCue-Your-AI-Powered-Kitchen-Assistant-21567c5bdc6780fe8296e48231ee9b47",
      category: "personal",
      githubUrl: "https://github.com/vedantbhamare-11/CurryCue",
      tags: ["GPT-4o", "Next.js", "AI"],
      liveUrl: "https://curry-cue.vercel.app",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    toggleProjectDescription(state, action: PayloadAction<number>) {
      state.expandedProject =
        state.expandedProject === action.payload ? null : action.payload;
    },
    collapseAll(state) {
      state.expandedProject = null;
    },
  },
});

export const selectAllProjects = (state: { projects: ProjectsState }) =>
  state.projects.projects;

export const selectExpandedProject = (state: { projects: ProjectsState }) =>
  state.projects.expandedProject;

export const selectProjectsByCategory =
  (category: ProjectCategory) => (state: { projects: ProjectsState }) =>
    state.projects.projects.filter((p) => p.category === category);

export const { toggleProjectDescription, collapseAll } = projectsSlice.actions;
export default projectsSlice.reducer;
