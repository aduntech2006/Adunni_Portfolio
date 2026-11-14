import expense_img from "../images/expense_dashboard.jpg";
import chat_img from "../images/chat_app.jpg";
import devfinder_img from "../images/devfinder.jpg";
import weather_img from "../images/weather_app.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Expenz — Financial Analytics & Budget Suite",
    category: "fullstack",
    categoryLabel: "Full-Stack & Finance",
    badge: "Financial Analytics",
    type: "Personal Finance Platform",
    image: expense_img,
    img: expense_img,
    summary: "Interactive financial intelligence dashboard featuring categorized budget tracking, visual expenditure charts, and real-time cloud persistence.",
    desc: "A responsive personal finance and budget analytics platform built with React, TypeScript, and Supabase. Features real-time transaction tracking, dynamic category charts powered by Recharts, and animated workflows with Framer Motion.",
    description: "Expenz is an end-to-end financial intelligence dashboard designed to streamline personal budgeting, cashflow tracking, and expenditure breakdowns. Built on React and TypeScript for maximum stability, backed by Supabase for real-time cloud data sync, and visualized through dynamic Recharts data modules.",
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
    githubUrl: "https://github.com/aduntech2006/Expenz",
    githubLink: "https://github.com/aduntech2006/Expenz"
  },
  {
    id: 2,
    title: "PulseChat — Live Collaboration & Messaging Hub",
    category: "backend",
    categoryLabel: "Full-Stack & WebSockets",
    badge: "Live Communication",
    type: "WebSocket Messaging Platform",
    image: chat_img,
    img: chat_img,
    summary: "High-performance instant messaging platform featuring bi-directional Socket.IO communication, optimistic UI updates, voice notes, media previews, and PostgreSQL storage.",
    desc: "A high-performance real-time messaging and team communication app powered by React, Node.js, Express, Socket.IO, and PostgreSQL. Features sub-millisecond public and private chat channels, live audio voice notes, optimistic UI synchronization, and instant media file sharing.",
    description: "PulseChat is a modern real-time communication platform engineered for seamless text, voice, and media interactions. Featuring low-latency bidirectional Socket.IO networking, instant delivery confirmations, voice note playback, inline thread actions, and robust relational data persistence with PostgreSQL.",
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
    githubUrl: "https://github.com/aduntech2006/PulseChat",
    githubLink: "https://github.com/aduntech2006/PulseChat"
  },
  {
    id: 3,
    title: "devfinder — GitHub Profile & Repository Explorer",
    category: "fullstack",
    categoryLabel: "Frontend & REST API",
    badge: "Developer Tooling",
    type: "GitHub API Explorer",
    image: devfinder_img,
    img: devfinder_img,
    summary: "Interactive GitHub developer profile and repository explorer featuring smart URL/username parsing, concurrent REST API fetching, and real-time repository metrics.",
    desc: "A responsive GitHub profile lookup application built with React 19, Vite, Bootstrap 5, and the GitHub REST API. Supports searching by username or full GitHub profile URL to inspect developer bios, follower statistics, and top updated repositories.",
    description: "devfinder is a fast, developer-focused GitHub profile and repository discovery tool built with React 19 and Bootstrap 5. It leverages concurrent Promise.all requests against the GitHub REST API to fetch user metadata and latest repositories simultaneously, complete with smart URL parsing and graceful rate-limit and 404 error handling.",
    features: [
      "Smart search bar supporting both direct GitHub usernames and full GitHub profile URLs",
      "Concurrent API requests via Promise.all for user profile metrics and latest updated repositories",
      "Comprehensive profile cards displaying avatar, join date, bio, repository count, followers, and following stats",
      "Interactive repository badges linking directly to public repositories with live stargazer counts",
      "Graceful loading spinners and descriptive HTTP 404/403 rate-limit error handling"
    ],
    techStack: ["React 19", "JavaScript (ES6+)", "GitHub REST API", "Bootstrap 5", "CSS3", "Vite"],
    languages: ["React 19", "JavaScript (ES6+)", "GitHub REST API", "Bootstrap 5", "CSS3", "Vite"],
    demoUrl: "https://devfinder-nine-psi.vercel.app/",
    demoLink: "https://devfinder-nine-psi.vercel.app/",
    githubUrl: "https://github.com/aduntech2006/devfinder",
    githubLink: "https://github.com/aduntech2006/devfinder"
  },
  {
    id: 4,
    title: "Weather Dashboard — Live Meteorological & GPS Forecast App",
    category: "fullstack",
    categoryLabel: "Frontend & REST API",
    badge: "Weather & Geolocation",
    type: "Meteorological Dashboard",
    image: weather_img,
    img: weather_img,
    summary: "Real-time weather forecasting dashboard featuring city lookup, browser HTML5 Geolocation integration, and live atmospheric metrics via the OpenWeatherMap API.",
    desc: "A responsive real-time weather dashboard built with React 19, Vite, Bootstrap 5, and the OpenWeatherMap REST API. Supports both global city queries and one-click GPS coordinate detection to display live temperatures, humidity, feels-like indices, and wind speeds.",
    description: "Weather Dashboard is a responsive meteorological lookup application built with React 19 and Bootstrap 5. Powered by the OpenWeatherMap REST API and the browser's Geolocation API, it delivers instant weather conditions, temperature readings, humidity levels, and wind speed analytics for any city worldwide or the user's current GPS coordinates.",
    features: [
      "Real-time global weather search by city name powered by the OpenWeatherMap REST API",
      "One-click 'My Location' detection using the HTML5 Geolocation API for coordinate-based weather lookup",
      "Detailed atmospheric metrics card displaying live temperature (°C), weather conditions, 'Feels Like' index, humidity percentage, and wind speed (m/s)",
      "Modular service layer separating API requests and environment key validation from UI state",
      "Responsive Bootstrap 5 interface with loading spinners and descriptive 404/permission error alerts"
    ],
    techStack: ["React 19", "JavaScript (ES6+)", "OpenWeatherMap API", "Geolocation API", "Bootstrap 5", "CSS3", "Vite"],
    languages: ["React 19", "JavaScript (ES6+)", "OpenWeatherMap API", "Geolocation API", "Bootstrap 5", "CSS3", "Vite"],
    demoUrl: "https://weather-app-cerf.vercel.app/",
    demoLink: "https://weather-app-cerf.vercel.app/",
    githubUrl: "https://github.com/aduntech2006/weather_app",
    githubLink: "https://github.com/aduntech2006/weather_app"
  }
];
