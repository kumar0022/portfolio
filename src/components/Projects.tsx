import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
  title: "Activity-Based Learning Platform",
  description:
    "Designed and developed a full-stack educational web platform to help students in grades 6–8 learn complex STEM concepts through simple, interactive activities using React, JavaScript, and TypeScript.",
  details: [
    "Created engaging, activity-driven modules to simplify abstract academic topics and improve conceptual understanding for middle school students.",
    "Implemented a modular frontend using React and TypeScript for smooth user interaction and responsive content delivery.",
    "Built a scalable backend to manage learning content, quizzes, and progress tracking, enhancing student-teacher interaction.",
    "Integrated dynamic lesson flows and real-time feedback mechanisms to personalize the learning experience.",
    "Tools & Technologies: ReactJS, TypeScript, JavaScript, HTML/CSS, Git, REST APIs.",
  ],
  Live_Link : "https://activity-based-learning.vercel.app/",
  github: "https://github.com/kumar0022/Activity_Based_Learning", 
  image: "../assets/Screenshot 2025-01-06 141726.png",
}

  ,{
    title: "AI-Powered Alert System",
    description:
      "Designed and implemented a full-stack alert monitoring platform using ReactJS, Flask, and Grafana, integrated with AI models for real-time cobble and failure detection in India's largest steel plant.",
    details: [
      
      "Connected Grafana for real-time sensor data visualization, enabling proactive monitoring and rapid fault detection on the production line..",
      "Built scalable APIs and alert logic in Flask (Python) to serve AI predictions and anomaly signals from time-series data..",
      "Enhanced operational decision-making by bridging AI model outputs with real-time plant signals and human feedback..",
      "Tools & Technologies: ReactJS, Flask, Grafana, Python, Pandas, NumPy, REST APIs, Git.",
    ],
    github: "https://github.com/kumar0022/Ai-Powered-_Alert",
    image: "../assets/image.png",
  },
  
  
  ,{
    title: "AI-Powered Alert Analysis Dashboard for Rolling Mills",
    description:
      "A Streamlit-based dashboard built in Python to automate alert analysis, identify root causes, and highlight correlated alarm patterns in rolling mill operations.",
    details: [
      "Developed an interactive dashboard for real-time alert analysis with region-wise, signal-wise, and hourly distribution insights.",
      "Automated 95% of manual alert review by correlating alarms and highlighting unstable regions for faster diagnosis.",
      "Enabled root cause analysis by integrating historical data trends and visual correlation across multiple alert signals.",
      "Designed an intuitive UI using Streamlit, allowing operators to filter, explore, and investigate alerts with ease.",
      "Enhanced operational safety and efficiency by supporting early failure detection through data-driven visualization.",
    ],
    github: "https://github.com/kumar0022/analysis_dashboard",
    image: "../assets/alert.png",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
