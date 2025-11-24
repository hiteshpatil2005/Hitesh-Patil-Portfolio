import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "NPTEL", "Certifications", "Hackathons", "Achievements"];

  const data = [
    {
       id: "1",
      title: "Programming in Java",
      organization: "NPTEL • IIT Kharagpur",
      issueDate: "October 2024",
      description:
        "Achieved Elite level Certification with a score of 71% in the Java programming course.Developed a strong foundation in object-oriented programming, exception handling, multithreading, etc",
      category: "NPTEL",
      certificateUrl: "/certificates/NPTEL-Java.pdf",
    },
    {
      id: "2",
      title: "Joy of Computing using Python",
      organization: "NPTEL • IIT Madras",
      issueDate: "April 2024",
      description:
        "Achieved Elite level Certification with a score of 63% in the Joy of Computing Using Python. Learn the basics of Python programming and problem-solving techniques.",
      category: "NPTEL",
      certificateUrl: "/certificates/NPTEL-Python.pdf",
    },
    {
      id: "3",
      title: "E - Business",
      organization: "NPTEL • IIT Madras",
      issueDate: "October 2025",
      description:
        "Completed the E-Business course with a focus on digital business models, e-commerce strategies, and online marketing techniques.",
      category: "NPTEL",
      certificateUrl: "/certificates/NPTEL-eBusiness.pdf",
    },
    {
      id: "4",
      title: "NASA Space App Hackathon",
      organization: "NASA • Space Apps",
      issueDate: "5th October 2024",
      description:
        "Participated in the NASA Space App Hackathon by developing an innovative solution that utilized satellite data to address environmental challenges.",
      category: "Hackathons",
      certificateUrl: "https://drive.google.com/file/d/1YIPQi1R4AZ__3dK9Z6QwLq6gFJtJxggc/view?usp=sharing",
    },
    {
      id: "5",
      title: "Network Fundamentals",
      organization: "Infosys",
      issueDate: "November 2025",
      description:
        "Completed the Network Fundamentals course by Infosys, covering essential networking concepts, protocols, and technologies.",
      category: "Certifications",
      certificateUrl: "/certificates/Network Fundamentals.pdf",
    },
    {
      id: "6",
      title: "Pre Security",
      organization: "Try Hack Me",
      issueDate: "November 2025",
      description:
        "Completed the Pre Security learning path on Try Hack Me, gaining foundational knowledge in cybersecurity principles and practices. ",
      category: "Achievements",
      certificateUrl: "/certificates/Pre Security.pdf",
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.organization.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || item.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div id="achievements" className="w-full min-h-screen px-6 py-30 md:px-16 lg:px-24 bg-black text-white">

      {/* 🔙 Back + Search Bar */}
      <div className="flex gap-4 items-center justify-center mb-6">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-linear-to-br from-purple-400 to-purple-600 px-4 py-2 rounded-xl border-2 border-purple-800 hover:bg-white/20 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search certifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-2xl border transition-all duration-300 ${
              filter === item
                ? "bg-purple-600 border-purple-400"
                : "bg-white/10 border-white/20 hover:bg-white/20"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredData.map((cert) => (
          <div
            key={cert.id}
            className="p-0.5 rounded-xl bg-linear-to-r from-purple-400 to-purple-900"
          >
            <div className="p-5 bg-black/50 rounded-xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                <p className="text-sm text-purple-300">{cert.organization}</p>
                <p className="text-xs opacity-70 mt-1">Issued: {cert.issueDate}</p>

                <p className="mt-3 text-sm opacity-90 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <a
                href={cert.certificateUrl}
                className="mt-4 inline-block bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
