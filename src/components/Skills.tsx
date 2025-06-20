import { motion } from "framer-motion";
import {
  Code2,
  PenTool as Tool,
  Users,
  Brain,
  Server,
  Book,
} from "lucide-react";

const skills = {
  "Programming & Scripting": {
    icon: Code2,
    skills: ["Python", "Java", "JavaScript"],
  },
  "Frontend Development": {
  icon: Code2, // replace with your preferred icon
  skills: [
    "ReactJS",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
    "Next.js",
    "Framer Motion",
    "Material UI",
  ],
},


  "Backend & Cloud": {
    icon: Server,
    skills: [
      "RestAPi",
      "FastAPI",
      "Grafana",
      "Flask",
      "Redis",
      "AWS",
      "MongoDB",
      "MySql",
      "InfluxDB",

      "Postman",
    ],
  },
    "Machine Learning & AI": {
    icon: Brain,
    skills: [
      "ML",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LangChain",

      "Hugging Face",
    ],
  },
  "Tools & Libraries": {
    icon: Tool,
    skills: [
      "Git",
      "TimeSeries",
      "PCA",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "LaTeX",
    ],
  },
  "Concepts & Areas of Expertise": {
    icon: Book,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Backend",
      "Tranning",
    ],
  },
  "Soft Skills": {
    icon: Users,
    skills: [
      "Leadership",
      "Event Management",
      "Teamwork",
      "Presentation Skills",
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Skills() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">My Skills</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(
            ([category, { icon: Icon, skills: skillList }], index) => (
              <motion.div
                key={category}
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-100">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category}
                    </h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                  >
                    {skillList.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#3b82f6",
                          color: "#ffffff",
                        }}
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-sm
                        hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
