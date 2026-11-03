export const courses = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Technology",
    level: "Beginner",
    duration: "12 weeks",
    icon: "🌐",
    description:
      "Learn to build responsive websites and full-stack web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    roadmap: [
      { title: "HTML Fundamentals", duration: "Week 1–2", description: "Learn page structure, elements, forms, and semantic HTML.", project: "Personal portfolio page" },
      { title: "CSS and Responsive Design", duration: "Week 3–4", description: "Learn styling, Flexbox, Grid, and responsive layouts.", project: "Responsive landing page" },
      { title: "JavaScript Basics", duration: "Week 5–6", description: "Learn variables, functions, arrays, objects, and DOM.", project: "Interactive calculator" },
      { title: "JavaScript Projects", duration: "Week 7–8", description: "Practice events, APIs, and asynchronous JavaScript.", project: "Weather or to-do application" },
      { title: "React Fundamentals", duration: "Week 9–10", description: "Learn components, props, state, and hooks.", project: "React course website" },
      { title: "Backend and Deployment", duration: "Week 11–12", description: "Explore Node.js, Express, databases, and deployment.", project: "Deploy a full-stack application" }
    ],
    books: [
      { title: "HTML and CSS: Design and Build Websites", author: "Jon Duckett" },
      { title: "Eloquent JavaScript", author: "Marijn Haverbeke" }
    ],
    youtube: [
      { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp" },
      { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia" }
    ]
  },
  {
    id: "python",
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    duration: "8 weeks",
    icon: "🐍",
    description: "Learn Python programming from fundamentals to practical projects.",
    skills: ["Python", "Functions", "OOP", "Automation"],
    roadmap: [
      { title: "Python Setup and Basics", duration: "Week 1", description: "Install Python and learn variables, data types, and input.", project: "Simple calculator" },
      { title: "Conditions and Loops", duration: "Week 2", description: "Learn if statements, loops, and logical operations.", project: "Number guessing game" },
      { title: "Functions and Collections", duration: "Week 3–4", description: "Learn functions, lists, dictionaries, and tuples.", project: "Student marks manager" },
      { title: "Files and Modules", duration: "Week 5", description: "Work with files, modules, and exceptions.", project: "File-based contact book" },
      { title: "Object-Oriented Programming", duration: "Week 6", description: "Understand classes, objects, and inheritance.", project: "Library management system" },
      { title: "Final Project", duration: "Week 7–8", description: "Combine your skills into a complete application.", project: "Personal expense tracker" }
    ],
    books: [
      { title: "Python Crash Course", author: "Eric Matthes" },
      { title: "Automate the Boring Stuff with Python", author: "Al Sweigart" }
    ],
    youtube: [
      { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh" },
      { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp" }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "Data & Analytics",
    level: "Intermediate",
    duration: "16 weeks",
    icon: "📊",
    description: "Learn to analyze data, discover patterns, and communicate insights.",
    skills: ["Python", "Statistics", "Pandas", "Visualization", "SQL"],
    roadmap: [
      { title: "Python Foundations", duration: "Week 1–3", description: "Learn Python and basic programming.", project: "Data cleaning script" },
      { title: "Statistics and Mathematics", duration: "Week 4–5", description: "Understand averages, probability, and distributions.", project: "Statistical analysis" },
      { title: "Data Analysis with Pandas", duration: "Week 6–8", description: "Clean, organize, and analyze datasets.", project: "Student performance analysis" },
      { title: "Data Visualization", duration: "Week 9–10", description: "Create charts and communicate findings.", project: "Data dashboard" },
      { title: "SQL and Databases", duration: "Week 11–12", description: "Query and organize structured data.", project: "Sales database analysis" },
      { title: "Final Data Project", duration: "Week 13–16", description: "Complete an end-to-end data science project.", project: "Real-world dataset analysis" }
    ],
    books: [
      { title: "Python for Data Analysis", author: "Wes McKinney" },
      { title: "Practical Statistics for Data Scientists", author: "Peter Bruce and others" }
    ],
    youtube: [
      { name: "Alex The Analyst", url: "https://www.youtube.com/@AlexTheAnalyst" },
      { name: "StatQuest", url: "https://www.youtube.com/@statquest" }
    ]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Technology",
    level: "Intermediate",
    duration: "16 weeks",
    icon: "🤖",
    description: "Explore AI, machine learning, and intelligent applications.",
    skills: ["Python", "Math", "Machine Learning", "AI Concepts"],
    roadmap: [
      { title: "Python Fundamentals", duration: "Week 1–3", description: "Build programming skills using Python.", project: "Python mini-projects" },
      { title: "Mathematics for AI", duration: "Week 4–5", description: "Explore algebra, probability, and basic statistics.", project: "Simple data analysis" },
      { title: "AI and Machine Learning Basics", duration: "Week 6–8", description: "Understand AI concepts and machine learning workflows.", project: "Simple prediction model" },
      { title: "Data Preparation", duration: "Week 9–10", description: "Prepare datasets for machine learning.", project: "Dataset preparation pipeline" },
      { title: "Machine Learning Models", duration: "Week 11–13", description: "Explore classification and regression.", project: "House price prediction" },
      { title: "AI Project", duration: "Week 14–16", description: "Build and present a beginner AI application.", project: "AI-based prediction application" }
    ],
    books: [
      { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell and Peter Norvig" },
      { title: "Hands-On Machine Learning", author: "Aurélien Géron" }
    ],
    youtube: [
      { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown" },
      { name: "StatQuest", url: "https://www.youtube.com/@statquest" }
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Creative",
    level: "Beginner",
    duration: "8 weeks",
    icon: "🎨",
    description: "Learn visual design, typography, color, and creative communication.",
    skills: ["Design Principles", "Typography", "Color", "Canva", "Figma"],
    roadmap: [
      { title: "Design Fundamentals", duration: "Week 1", description: "Learn composition, contrast, and visual hierarchy.", project: "Design inspiration board" },
      { title: "Color and Typography", duration: "Week 2–3", description: "Understand color theory and typography.", project: "Poster design" },
      { title: "Design Tools", duration: "Week 4–5", description: "Practice using Canva or Figma.", project: "Social media graphics" },
      { title: "Branding", duration: "Week 6", description: "Learn logos, brand identity, and consistency.", project: "Brand identity kit" },
      { title: "Portfolio Project", duration: "Week 7–8", description: "Create a collection of original designs.", project: "Graphic design portfolio" }
    ],
    books: [
      { title: "The Non-Designer's Design Book", author: "Robin Williams" },
      { title: "Thinking with Type", author: "Ellen Lupton" }
    ],
    youtube: [
      { name: "The Futur", url: "https://www.youtube.com/@thefutur" },
      { name: "Satori Graphics", url: "https://www.youtube.com/@SatoriGraphics" }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Business",
    level: "Beginner",
    duration: "8 weeks",
    icon: "📱",
    description: "Learn how to promote products and services using digital channels.",
    skills: ["SEO", "Social Media", "Content", "Analytics", "Advertising"],
    roadmap: [
      { title: "Marketing Fundamentals", duration: "Week 1", description: "Understand audiences, branding, and marketing goals.", project: "Marketing strategy outline" },
      { title: "Content Marketing", duration: "Week 2–3", description: "Learn content planning and storytelling.", project: "Content calendar" },
      { title: "Social Media Marketing", duration: "Week 4", description: "Understand social platforms and engagement.", project: "Social media campaign" },
      { title: "SEO Fundamentals", duration: "Week 5–6", description: "Learn keywords and search optimization.", project: "SEO website audit" },
      { title: "Analytics and Campaigns", duration: "Week 7–8", description: "Understand campaign performance and metrics.", project: "Digital marketing portfolio" }
    ],
    books: [
      { title: "This Is Marketing", author: "Seth Godin" },
      { title: "Digital Marketing for Dummies", author: "Ryan Deiss and Russ Henneberry" }
    ],
    youtube: [
      { name: "Google Ads", url: "https://www.youtube.com/@GoogleAds" },
      { name: "Ahrefs", url: "https://www.youtube.com/@AhrefsCom" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    category: "Technology",
    level: "Beginner",
    duration: "12 weeks",
    icon: "🔐",
    description: "Understand security fundamentals and learn how to protect systems.",
    skills: ["Networking", "Linux", "Security Basics", "Risk Awareness"],
    roadmap: [
      { title: "Computer and Network Basics", duration: "Week 1–2", description: "Learn operating systems and networking fundamentals.", project: "Network diagram" },
      { title: "Linux Fundamentals", duration: "Week 3–4", description: "Learn Linux commands and file permissions.", project: "Linux practice lab" },
      { title: "Security Fundamentals", duration: "Week 5–6", description: "Understand threats, vulnerabilities, and security principles.", project: "Security awareness checklist" },
      { title: "Network Security", duration: "Week 7–8", description: "Explore firewalls and defensive security.", project: "Secure lab configuration" },
      { title: "Ethical Security Practice", duration: "Week 9–10", description: "Practice only in authorized training environments.", project: "Beginner security lab" },
      { title: "Final Project", duration: "Week 11–12", description: "Create a defensive security assessment.", project: "Security improvement report" }
    ],
    books: [
      { title: "Cybersecurity for Beginners", author: "Raef Meeuwisse" },
      { title: "The Linux Command Line", author: "William Shotts" }
    ],
    youtube: [
      { name: "Professor Messer", url: "https://www.youtube.com/@professormesser" },
      { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck" }
    ]
  },
  {
    id: "excel-analytics",
    title: "Excel & Business Analytics",
    category: "Business",
    level: "Beginner",
    duration: "6 weeks",
    icon: "📈",
    description: "Learn spreadsheets, data analysis, reporting, and business insights.",
    skills: ["Excel", "Formulas", "Pivot Tables", "Charts", "Analytics"],
    roadmap: [
      { title: "Excel Fundamentals", duration: "Week 1", description: "Learn spreadsheets, formatting, and basic formulas.", project: "Personal budget sheet" },
      { title: "Formulas and Functions", duration: "Week 2", description: "Use IF, SUMIF, lookup, and other useful functions.", project: "Student marks calculator" },
      { title: "Data Cleaning", duration: "Week 3", description: "Organize and clean spreadsheet data.", project: "Clean a sample dataset" },
      { title: "Pivot Tables and Charts", duration: "Week 4–5", description: "Summarize information and create reports.", project: "Sales dashboard" },
      { title: "Final Analytics Project", duration: "Week 6", description: "Use Excel to answer a business question.", project: "Business insights report" }
    ],
    books: [
      { title: "Excel 365 Bible", author: "Michael Alexander and others" },
      { title: "Storytelling with Data", author: "Cole Nussbaumer Knaflic" }
    ],
    youtube: [
      { name: "Leila Gharani", url: "https://www.youtube.com/@LeilaGharani" },
      { name: "ExcelIsFun", url: "https://www.youtube.com/@excelisfun" }
    ]
  }
];
