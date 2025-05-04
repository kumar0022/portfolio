import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ResumeDownload from "./Resume";
import ProfilePhoto from "../assets/IMG_4058.jpeg";
import ProfilePhoto2 from "../assets/IMG_2983.jpeg";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black relative flex items-center">
      {/* Neon Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff66] to-[#00ffff66] opacity-30 blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500 opacity-40 rounded-full mix-blend-screen blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 opacity-40 rounded-full mix-blend-screen blur-[180px]" />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ProfilePhoto}
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl h-[420px]"
            />
            <br></br>
            <img
              src={ProfilePhoto2}
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl h-[420px]"
            />
            <p className="text-white">Visisting Industry</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
                Chetan Kumar Prasad | Research & Development Engineer
              </span>
            </h1>

            <p className="text-lg mb-8 text-gray-100 font-bold">
              I am a Research and Development Engineer at IIT Bhilai,I currently
              work under the guidance of{" "}
              <a
                href="https://scholar.google.com/citations?user=3El9vwYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Dr. Gagan Raj Gupta
              </a>
              , Associate Professor in the Department of Computer Science and
              Engineering and Head of the Mechatronics program at IIT Bhilai.
              specializing in Artificial Intelligence (AI), Machine Learning
              (ML), and industrial systems engineering. I hold a B.Tech in
              Computer Science and Engineering, with a strong background in AI,
              video analysis, and backend engineering. At IIT Bhilai, I have led
              the development of an AI-powered alert system for pre-failure
              detection in rolling mills, focusing on BSP. This system
              integrates alarm segmentation, correlation, feedback integration,
              and predictive video analysis to prevent failures. My expertise
              extends to PCA-based model training, time-series analysis, anomaly
              detection, and object detection using OpenCV. I also write custom
              logic to analyze alerts, track correlations, and develop
              preventive strategies. The core tech stack includes Python, Flask,
              Grafana, InfluxDB, and various backend tools, combining real-time
              video streams and data analysis to enhance operational safety. I
              am passionate about applying AI/ML to solve real-world industrial
              challenges, particularly in predictive maintenance and intelligent
              monitoring systems. 🚀 Let’s connect and build smarter, safer
              infrastructures together!
              <span className="text-purple-400 font-extrabold block mt-4">
                🚀 I am actively open to applied Machine Learning research roles
                in industry — especially those focused on real-world problem
                solving in manufacturing, infrastructure, and intelligent
                monitoring systems.
              </span>
              {/* I am a Research and Development Engineer at IIT Bhilai, with a
              B.Tech in Computer Science and Engineering with a strong
              background in AI, NLP, backend engineering. At IIT Bhilai
              focuses on pre-failure alert generation using AI, ML, and video
              analysis in a rolling mill environment. As part of this, I
              developed an AI-powered alert UI that performs alarm segmentation,
              correlation, and feedback integration, and synchronizes correlated
              video analysis with our predictive models. The core tech stack
              includes Python, Flask, Grafana, InfluxDB, and various backend
              tools. We use PCA-based models for anomaly detection and alert
              analysis. This system supports early failure detection in
              industrial setups by combining time-series data and real-time
              video streams to enhance operational safety and efficiency. I am
              passionate about applying AI/ML to solve real-world industrial
              problems, especially in predictive maintenance and intelligent
              monitoring systems.🚀 Let's collaborate to build smarter, safer
              infrastructure! */}
              {/*               
              I am a Research and Development Engineer at IIT Bhilai, with a
              B.Tech in Computer Science and Engineering and a strong background
              in AI, NLP, and backend engineering. At IIT Bhilai, I focus on
              pre-failure alert generation using AI, ML, and video analysis in a
              rolling mill environment, specifically working with BSP. As part
              of this, I developed an AI-powered alert UI that performs alarm
              segmentation, correlation, and feedback integration, and
              synchronizes correlated video analysis with our predictive models.
              Additionally, my work includes model training using PCA,
              time-series analysis, and anomaly detection for alert systems, as
              well as object detection using OpenCV to track key components in
              the mill. I also write custom logic to analyze alerts, observe
              trends and patterns, and develop preventive measures to avoid
              failures. The core tech stack includes Python, Flask, Grafana,
              InfluxDB, and various backend tools, with PCA-based models for
              anomaly detection and alert analysis. This system supports early
              failure detection in industrial setups by combining time-series
              data and real-time video streams to enhance operational safety and
              efficiency. I am passionate about applying AI/ML to solve
              real-world industrial problems, especially in predictive
              maintenance and intelligent monitoring systems. 🚀 Let’s
              collaborate to build smarter, safer infrastructure! */}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 rounded-full font-semibold transition-all duration-300"
            >
              <ResumeDownload />
            </motion.button>

            <div className="flex gap-6 mt-8">
              <motion.a
                href="https://www.linkedin.com/in/chetan-kumar-b50b2331a"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/kumar0022"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="mailto:kumarchetan1008@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
