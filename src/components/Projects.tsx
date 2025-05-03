import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
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
    image: "../src/assets/alert.png",
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
