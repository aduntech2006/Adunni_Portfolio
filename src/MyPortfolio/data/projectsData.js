import adunni_pre from "../images/adunnfix_preview.png";
import dried from "../images/micron.png";
import student_result from "../images/student_result_management.png";
import testing from "../images/qa.png";

export const projectsData = [
  {
    id: "adunnfix",
    title: "Adunnfix E-Commerce Store",
    category: "fullstack",
    categoryLabel: "Full-Stack E-Commerce",
    badge: "Featured E-Commerce",
    type: "Production Web App",
    image: adunni_pre,
    summary: "Multi-page dynamic e-commerce client interface featuring category filtering, reactive cart state management, and optimized checkout validation flows.",
    description: "Adunnfix is a responsive full-stack e-commerce web application engineered with modern React, JavaScript ES6, and Bootstrap 5. It incorporates a persistent shopping cart state, dynamic product filtering across categories, interactive item quantity calculation, and a multi-step checkout form with front-end validation.",
    features: [
      "Dynamic cart state management with real-time total and badge counters",
      "Multi-page catalog routing and instantaneous category filtering",
      "Fully responsive mobile and desktop grid layout with custom micro-interactions",
      "Structured checkout form validation and order confirmation feedback"
    ],
    techStack: ["React", "Vite", "JavaScript ES6+", "Bootstrap 5", "CSS3"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://demo-adunnfix.vercel.app",
    githubUrl: "https://github.com/adunni/adunnfix-store"
  },
  {
    id: "micron-dried",
    title: "Micron Dried Store",
    category: "fullstack",
    categoryLabel: "Retail & E-Commerce",
    badge: "Web Storefront",
    type: "Storefront UI/UX",
    image: dried,
    summary: "Specialized storefront tailored for organic dried goods, built with smooth product cards, interactive scaling, and clean dark-theme aesthetics.",
    description: "An elegant, performance-oriented retail web application designed for browsing specialty goods. Built with lightweight components, adaptive responsive grids, image scaling effects, and clear call-to-actions that drive user conversion across mobile and desktop devices.",
    features: [
      "Custom product cards with fluid hover transformations and image zoom",
      "Clean dark-mode color scheme with high contrast readability",
      "Optimized mobile navigation menu with seamless drawer toggle",
      "Fast rendering with zero layout shift on mobile screens"
    ],
    techStack: ["React", "Bootstrap 5", "CSS3", "JavaScript", "Responsive UI"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://micron-store-demo.vercel.app",
    githubUrl: "https://github.com/adunni/micron-dried-store"
  },
  {
    id: "student-results",
    title: "Student Result Management System",
    category: "backend",
    categoryLabel: "Academic Systems",
    badge: "Full-Stack Portal",
    type: "Academic Utility",
    image: student_result,
    summary: "Academic performance platform designed to calculate weighted grades, GPA averages, pass/fail thresholds, and statistical class distributions.",
    description: "An administrative web application built to streamline academic score evaluation and student grading records. It automates score computations, standardizes weighted GPA thresholds, generates pass/fail performance badges, and provides teachers with aggregated class statistics.",
    features: [
      "Automated grade ranking and GPA weighted average calculation algorithms",
      "Dynamic tabular display with color-coded pass, warning, and distinction badges",
      "Real-time class summary metrics (highest score, average, failure rate)",
      "Tested and validated against edge cases with documented QA test logs"
    ],
    techStack: ["JavaScript", "PHP", "MySQL", "Bootstrap 5", "QA Test Logs"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://student-results-system.example.com",
    githubUrl: "https://github.com/adunni/student-results-management"
  },
  {
    id: "qa-audit",
    title: "QA Testing & Bug Log Suite",
    category: "qa",
    categoryLabel: "Software Quality Assurance",
    badge: "QA Engineering",
    type: "Test Suite & Audit",
    image: testing,
    summary: "Comprehensive software quality assurance documentation featuring structured test cases, bug tracking reports, and HTTP network error audits.",
    description: "A production-grade QA engineering test documentation suite covering system, functional, and regression testing. Includes detailed spreadsheets of manual test runs, HTTP status code audits (handling 400, 401, 404, 500 errors), validation matrices, and reproduction steps for resolved bugs.",
    features: [
      "Manual test execution logs with pass/fail criteria and severity matrices",
      "HTTP network error code inspection (REST API endpoint response analysis)",
      "Form input boundary and edge-case validation testing",
      "Cross-browser and multi-viewport responsiveness verification"
    ],
    techStack: ["Manual QA", "Postman", "Excel Test Logs", "HTTP Status Audits", "Chrome DevTools"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://qa-test-suite.example.com",
    githubUrl: "https://github.com/adunni/qa-testing-audit-suite"
  },
  {
    id: "mobilemate",
    title: "MobileMate Phone Accessories",
    category: "fullstack",
    categoryLabel: "Retail & Accessories",
    badge: "E-Commerce App",
    type: "Mobile First Web Store",
    image: adunni_pre,
    summary: "Responsive retail platform for mobile device accessories with product specification grids, stock status indicators, and interactive carting.",
    description: "A mobile-first web storefront crafted for retail electronic accessories. It features structured product catalog cards, modal previews, live item availability badges, and interactive carting with persistent localStorage support.",
    features: [
      "Mobile-first responsive grid system optimized for handheld touchscreens",
      "Interactive product quick-view modal with specification tables",
      "Shopping cart counter with instant item addition feedback",
      "Clean CSS transitions and lightweight bundle size"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript ES6", "Bootstrap 5", "AJAX"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://mobilemate-store.example.com",
    githubUrl: "https://github.com/adunni/mobilemate-accessories"
  },
  {
    id: "backend-pdo-api",
    title: "PHP/MySQL Secure PDO API & Auth Engine",
    category: "backend",
    categoryLabel: "Backend & Security",
    badge: "Backend Architecture",
    type: "Secure Server-Side API",
    image: student_result,
    summary: "Server-side RESTful API architecture engineered with secure PHP PDO connections, prepared SQL queries, bcrypt password hashing, and clean JSON endpoints.",
    description: "A secure backend foundation designed for data-driven web applications. Includes defensive database operations with prepared statements to prevent SQL injections, password hashing with bcrypt, input sanitization, and structured JSON responses for seamless frontend consumption.",
    features: [
      "Defensive PHP PDO database layer with strict prepared statements",
      "Secure user authentication flow with password hashing and session safety",
      "Structured RESTful JSON response schemas with HTTP status codes",
      "Postman test collections for API endpoint verification"
    ],
    techStack: ["PHP 8", "MySQL", "PDO Security", "REST API", "JSON", "Postman"],
    // DUMMY LINKS - Can be easily updated by the user later:
    demoUrl: "https://php-api-demo.example.com",
    githubUrl: "https://github.com/adunni/php-pdo-secure-api"
  }
];
