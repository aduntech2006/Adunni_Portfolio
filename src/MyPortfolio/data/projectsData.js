import expense_img from "../images/expense_dashboard.jpg";
import chat_img from "../images/chat_app.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Expense Management Dashboard",
    category: "fullstack",
    categoryLabel: "Full-Stack & Finance",
    badge: "Financial Dashboard",
    type: "Production Web App",
    image: expense_img,
    img: expense_img,
    summary: "Interactive financial analytics and budget tracking dashboard with dynamic category charts, real-time balance calculations, and cloud persistence.",
    desc: "A responsive expense tracking dashboard built with React, TypeScript, and Supabase. Features include CRUD operations for budgets and expenses, category-based charts using Recharts, and smooth UI interactions with Framer Motion and SweetAlert2.",
    description: "A responsive personal finance tracking dashboard built to give users complete control over budgets, cash flows, and expenditure categories. Engineered with React and TypeScript for robust type safety, Supabase for cloud data storage, Recharts for dynamic visual spending analytics, Zustand for fast state management, and Framer Motion for fluid micro-interactions.",
    features: [
      "CRUD operations for budgets and expenses with real-time balance reconciliation",
      "Dynamic category-based spending analytics and breakdown charts powered by Recharts",
      "Cloud persistence and instant data synchronization powered by Supabase",
      "Tailwind CSS responsive design with animated transitions via Framer Motion",
      "Centralized state management using Zustand and modal alerts via SweetAlert2"
    ],
    techStack: ["React", "TypeScript", "Supabase", "Recharts", "Framer Motion", "SweetAlert2", "Tailwind CSS", "Zustand"],
    languages: ["React", "TypeScript", "Supabase", "Recharts", "Framer Motion", "SweetAlert2", "Tailwind CSS", "Zustand"],
    demoUrl: "https://expenses-tracker-swart-eight.vercel.app/",
    demoLink: "https://expenses-tracker-swart-eight.vercel.app/",
    githubUrl: "https://github.com/aduntech2006/expenses-tracker",
    githubLink: "https://github.com/aduntech2006/expenses-tracker"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    category: "backend",
    categoryLabel: "Full-Stack & WebSockets",
    badge: "Real-Time Messaging",
    type: "Full-Stack WebSocket App",
    image: chat_img,
    img: chat_img,
    summary: "High-performance instant messaging platform featuring bi-directional Socket.IO communication, optimistic UI updates, voice notes, media previews, and PostgreSQL storage.",
    desc: "A lightweight and fully featured real-time chat application built with React for the frontend, Node.js + Express for the backend, and PostgreSQL for data storage. It includes features such as real-time messaging with Socket.IO (both public and private), optimistic UI updates for instant feedback, message delivery and read receipts, inline reply and message editing/deleting, emoji reactions, file and image uploads with previews and progress tracking, and voice note recording and playback.",
    description: "A lightweight and fully featured real-time chat application built with React for the frontend, Node.js + Express for the backend, and PostgreSQL for data storage. It delivers sub-millisecond bidirectional communication with Socket.IO across public channels and private chats, optimistic state updates for instant message feedback, read receipts, inline editing, audio recording for voice messages, and media file uploads with progress tracking.",
    features: [
      "Bi-directional real-time messaging with Socket.IO supporting both public rooms and private direct chats",
      "Optimistic UI updates for immediate interaction feedback, message delivery flags, and read receipts",
      "Voice note recording, playback streaming, and emoji reaction tray",
      "Media and document file uploads with client-side progress bars and image previews",
      "Relational data persistence with PostgreSQL and clean RESTful API routing via Node.js + Express"
    ],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Bootstrap", "Axios"],
    languages: ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Bootstrap", "Axios"],
    demoUrl: "https://chat-realtime-front.vercel.app/",
    demoLink: "https://chat-realtime-front.vercel.app/",
    githubUrl: "https://github.com/aduntech2006/chat-frontend",
    githubLink: "https://github.com/aduntech2006/chat-frontend"
  }
];
