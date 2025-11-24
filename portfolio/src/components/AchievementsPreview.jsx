import { motion, useInView } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function AchievementsPreview() {
  const navigate = useNavigate();

  // Scroll trigger
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const previewData = [
    {
      id: "1",
      title: "Programming in Java",
      organization: "NPTEL • IIT Kharagpur",
      issueDate: "October 2024",
      description:
        "Achieved Elite level Certification with a score of 71% in the Java programming course.",
      category: "Certification",
    },
    {
      id: "2",
      title: "Joy of Computing using Python",
      organization: "NPTEL • IIT Madras",
      issueDate: "April 2024",
      description:
        "Achieved Elite Certification with strong foundation in Python problem-solving.",
      category: "Certification",
    },
    {
      id: "3",
      title: "Technova Season 2 Finalist",
      organization: "ESSPL • Bhubaneswar",
      issueDate: "September 2025",
      description:
        "Reached the final round with an innovative real-world project.",
      category: "Achievement",
    },
  ];

  return (
    <div id="achievements" ref={sectionRef} className="w-full py-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Achievements &<span className="text-purple-500"> Certifications </span> 
      </motion.h2>
      <p className="text-center mb-12">Showcasing selected accomplishments and certifications.</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {previewData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-card border-4 glow-card relative p-8 rounded-2xl cursor-pointer group"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold bg-green-500 text-purple-900 px-2 py-1 rounded-xl">
                {item.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-1 pt-4 text-purple-400">
              {item.title}
            </h3>

            <p className="text-m text-purple-100 mb-3">{item.organization}</p>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {item.description}
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
              <Calendar size={14} />
              <span>
                {new Date(item.issueDate).toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button
          onClick={() => navigate("/achievements")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-xl text-lg font-medium transition"
        >
          See All Achievements & Certifications
        </button>
      </motion.div>
    </div>
  );
}
