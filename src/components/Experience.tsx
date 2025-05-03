import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Research & Development Engineer - ML, Fullstack",
    company: "IIT Bhilai",
    duration: "Jan 2025 - Present",
    details: [
      "Developed an end-to-end AI-powered alert system integrated with Grafana to assist mill operators in detecting and preventing pre-failure conditions in the BSP rolling mill.",
      "Built custom tools for time-series and video-based analysis of alerts, enabling root cause identification and operational optimization.",
      "Analyzed historical alert data to observe trends and patterns, and wrote custom mill-specific logic to enable predictive maintenance strategies.",
      "Developed an interactive dashboard using Streamlit and Python for alert analysis, featuring region-wise and signal-wise insights, hourly distribution charts, and highlighting the most unstable regions.",
      "Implemented object detection using OpenCV to track critical components like flappers and divertors within mill video feeds.",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "PARSL",
    duration: "",
    details: [
      "Contributed to a Parallel Scripting Library Parsl project under the University of Chicago",
      "As a contributor, I have fixed handlers that work differently in the latest version of Python, and it is not safe to use Python 3.12.",
      "See my merged Pull request ",
      <a href="https://github.com/Parsl/parsl/pull/3296">here</a>,
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-white"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Briefcase className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
