// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <motion.section 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="py-20 bg-gray-50"
//     >
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
//         <motion.p 
//           className="text-lg text-gray-600 leading-relaxed"
//           initial={{ y: 20 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Hi, I'm Deepak from 3rd-year BTech student at IIT Bhilai, specializing in Data Science and Artificial Intelligence. 
//           My passion lies in the fields of Data Science, Machine Learning, AI, and Computer Vision, where I enjoy solving 
//           problems and building innovative solutions.
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// }


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import axios from "axios";
import Together from "together-ai";
import ReactMarkdown from "react-markdown";

export default function About() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // const SYSTEM_PROMPT = `You are an AI assistant specialized in answering resume-based questions. Your responses should be professional, concise, and directly relevant to the user's career and resume-related inquiries.

  // ## Response Guidelines:
  // 1. Be Direct & Straightforward:
  //   - Provide clear and precise answers to career-related questions.
  //   - Avoid unnecessary details that do not add value.

  // 2. Keep It Professional & Informative:
  //   - Use a formal yet approachable tone.
  //   - Avoid overly casual language while keeping the response engaging.

  // 3. Expertise & Relevance:
  //   - Offer insights based on resume content, job search, and career growth.
  //   - Address user queries with expertise in resume formatting, skills assessment, and job application strategies.

  // ## Important Instruction:
  // Always give a clear, accurate, and relevant answer to resume and career-related queries.`
const SYSTEM_PROMPT = `You are Sunny Kumar. Assist others in learning about yourself using the provided resume context (df_context).

Guidelines:
- Keep responses concise, clear, and accurate.
- Always respond in a professional tone.
- Use bullet points or sections for clarity when needed.
- If asked "Hii", respond: "Hi, I am Sunny. How can I assist you? I would be happy to help you learn more about myself."

Avoid:
- Mentioning the use of a resume or dataset.
- Giving lengthy responses.
- Offering information not in the resume context.`;




  const PDF_CONTEXT = `Sunny Kumar
📞 +91-7050907820 | ✉️ sunnykumar@iitbhilai.ac.in
 | 


🌐 LinkedIn Profile: https://www.linkedin.com/in/sunny-soni-911064220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
🌐 GitHub Profile: https://github.com/sunny1561
Coding Profile: https://leetcode.com/u/DebugDrifter/
Education
Indian Institute of Technology (IIT) Bhilai, Chhattisgarh
B.Tech – Electrical Engineering and Computer Science (EECS) (2020 – 2024)

CGPA: 7.25

Saryu High School, Sitamarhi, Bihar
12th (Science) (2017 – 2019)

Percentage: 84.8%

Professional Experience
Software Engineer – GenAI | RADCOM (07/2024 – Present)
Developing AI-powered tools for analyzing PCAP files, similar to Wireshark, for telecom network troubleshooting and Root Cause Analysis.

Implementing NER (Named Entity Recognition) on 3GPP datasets to construct a Knowledge Graph (KG) covering key telecom entities like Protocols, Network Functions, Interfaces, and Technologies.

Achievements
Authored "What My Packet Capture Says", a paper on conversational AI for network troubleshooting and packet analysis, accepted at CODS-COMAD international conference.

Solved 600+ problems on LeetCode.

Technical Skills
Programming & Development:
Languages: C++, Python, Java

Concepts: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), MySQL, REST API, FastAPI, Vector DB, CUDA

Machine Learning & AI:
Frameworks: PyTorch, TensorFlow, Keras

Libraries/Tools: LangChain, LangGraph, Hugging Face, Pydantic Model, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn

Backend & Cloud:
Technologies: Spring Boot, IntelliJ IDEA, Redis, Elasticsearch, Flask, Postman, LaTeX, GitHub

Areas of Interest:
Machine Learning (ML), NLP, Backend Development, Data Structures & Algorithms

Coding Profiles:
LeetCode | GeeksforGeeks

Projects
1. Telecom Bot for RADCOM (82% QA Accuracy, 81.2% MCQ Accuracy) (08/2024 – 02/2025)
Developed an AI-powered chatbot to assist network engineers in understanding telecom concepts using 3GPP standards.

Fine-tuned LLaMA 3.2 (3B) for domain-specific responses.

Provides textual explanations, related diagrams, and DOCX files for enhanced comprehension.

Tech Stack: RAG, LangGraph, LLaMA 3.2 (3B), TypeScript, Python, Qdrant VDB, AWS S3.

2. Fine-Tuning LLM Model on Telecom Datasets (BLEU Score: 0.43) (06/2024 – 07/2024)
Fine-tuned LLaMA2-7B for enhanced query resolution in telecom.

Optimized using QLoRA (PEFT) for efficient fine-tuning with LoRA techniques to reduce parameters.

Tech Stack: Python, SFT, QLoRA, LoRA, Rouge Score.

3. Real-Time Docs-Based Chat App (RAG System) (07/2024 – 08/2024)
Developed a Streamlit-based web app for interactive document querying.

Integrated Pinecone for fast document retrieval based on user queries.

Tech Stack: Streamlit, OpenAI APIs, Meta LLaMA3-8B, Pinecone, Python.

Positions of Responsibility
Led the Registration & Help Desk Team at Meraz 2.0 (IIT Bhilai Festival, Nov 2022), boosting event awareness and driving ticket sales.

`

  const together = new Together({
    apiKey: "6241261e3ba0e424720421874778ee5a42e8247b1273ca754cbf06a513f7d3cd",
  });
// 

  // const handleAskQuery = async () => {
  //   if (!query.trim()) return;

  //   setLoading(true);
  //   try {
  //     const response = await together.chat.completions.create({
  //       model: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
  //       messages: [{"role": "system", "content": SYSTEM_PROMPT},
  //         { role: "user", content: `Question: ${query}, Context: ${PDF_CONTEXT}` },
  //       ],
  //     });

  //     setResponse(response.choices[0]?.message?.content || "No response available.");

  //     // const res = await axios.post("http://localhost:8000/ask", { query });
  //     // setResponse(res.data.response);
  //   } catch (error) {
  //     setResponse("Error fetching response. Please try again.");
  //   }
  //   setLoading(false);
  // };
  const handleAskQuery = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await together.chat.completions.create({
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Question: ${query}, Context: ${PDF_CONTEXT}` },
        ],
      });

      setResponse(response.choices[0]?.message?.content || "No response available.");
    } catch (error) {
      setResponse("Error fetching response. Please try again.");
    }
    setLoading(false);
  };
//   return (
//     <motion.section 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="py-20 bg-gray-50"
//     >
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Ask More About My self</h2>

//         <motion.p 
//           className="text-lg text-gray-600 leading-relaxed"
//           initial={{ y: 20 }}
//           whileInView={{ y: 0 }}
//           transition={{ duration: 0.7 }}
//         >Ask Me Anything
//         </motion.p>

//         {/* Query Input and Button */}
//         <div className="mt-6">
//           <input
//             type="text"
//             placeholder="Ask a question about my resume..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={handleAskQuery}
//             className="mt-3 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? "Fetching response..." : "Ask"}
//           </button>
//         </div>

//         {/* AI Response Display */}
//         {response && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="mt-6 p-4 border rounded-lg bg-white shadow"
//           >
//             <h3 className="text-lg font-semibold text-gray-800">AI Response:</h3>
//             <p className="text-gray-600 mt-2">{response}</p>
//           </motion.div>
//         )}
//       </div>
//     </motion.section>
//   );
// }

// return (
//   <motion.section
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//     className="py-20 bg-gray-50"
//   >
//     <div className="max-w-4xl mx-auto px-4">
//       <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Ask More About Myself</h2>

//       <motion.p
//         className="text-lg text-gray-600 leading-relaxed"
//         initial={{ y: 20 }}
//         whileInView={{ y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         Ask me anything related to My Experience
//       </motion.p>

//       <div className="mt-6">
//         <input
//           type="text"
//           placeholder="Ask a question about my resume..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={handleAskQuery}
//           className="mt-3 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
//           disabled={loading}
//         >
//           {loading ? "Fetching response..." : "Ask"}
//         </button>
//       </div>

//       {response && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="mt-6 p-4 border rounded-lg bg-white shadow"
//         >
//           <h3 className="text-lg font-semibold text-gray-800"></h3>
//           <div className="text-gray-600 mt-2">
//             <ReactMarkdown>{response}</ReactMarkdown>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   </motion.section>
// );
// } 
return (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="py-20 bg-gradient-to-br from-blue-100 to-blue-200"
  >
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        Ask More About Myself
      </h2>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Ask me anything related to my experience and professional background.
      </motion.p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Ask a question about my resume..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        />
        <button
          onClick={handleAskQuery}
          className="mt-3 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? "Fetching response..." : "Ask"}
        </button>
      </div>

      {response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 border rounded-lg bg-white shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800"></h3>
          <div className="text-gray-600 mt-2">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </motion.div>
      )}
    </div>
  </motion.section>
);
}
