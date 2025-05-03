import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: 'Paper Accepted: "What My Packet Capture Says"',
    organization: 'CODS-COMAD International Conference',
    period: '09/2024',
    link:'https://drive.google.com/file/d/1-snG2w0uaFDN6py-Qd0MXGFQw-IaHsch/view?usp=drivesdk'
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: 'Qualified GATE (Computer Science)',
    organization: 'GATE 2024',
    period: '2/2024'
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: 'Solved 600+ Problems',
    organization: 'LeetCode',
    period: 'Present',
    link:'https://leetcode.com/u/DebugDrifter/'
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: 'Top 1% in Advance',
    organization: 'JEE Advance',
    period: '7/2019'
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: 'Qualified JEE Mains',
    organization: 'JEE Mains',
    period: '3/2019'
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[url('https://source.unsplash.com/1600x900/?technology,abstract')] bg-cover bg-center"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl font-extrabold text-center text-white mb-16 tracking-tight"
        >
          Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white bg-opacity-90 rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition-all text-gray-900"
            >
              <div className="flex items-center justify-center mb-6">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              {achievement.organization && (
                <p className="text-purple-600 font-semibold">{achievement.organization}</p>
              )}
              {achievement.period && (
                <p className="text-sm text-gray-500 mt-1">{achievement.period}</p>
              )}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 mt-2 inline-block hover:text-purple-800"
                >
                  Click to Visit 
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
