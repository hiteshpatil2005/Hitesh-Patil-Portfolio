import { useState } from "react";
import { Briefcase, GraduationCap, Trophy, Phone } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const journeyData = {
  experience: [
    {
      title: "Pariwar Agro Android Application",
      period: "2025",
      role: "Freelancing",
      description:
        "Developed a production-ready Android app for Pariwar Agro, handling product ordering, stock management, and customer features while working directly with the client to deliver a smooth, deployment-ready solution.",
      achievements: [
        "Gained Experience of Realtime working with CLient",
        "Explore the App Deployment process on Play Store",
        "Gained Experience in Android Development",
      ],
      link: "https://play.google.com/store/apps/details?id=com.pariwar.pariwaragro&pcampaignid=web_share",
      icon: "phone",
    },
    {
      title: "Leadership Role",
      period: "2025",
      role: "Leader",
      description:
        "Led a team as a Vice Cadet Captain, managing discipline, and coordinating events to foster teamwork and leadership skills among peers.",
      achievements: [
        "Gained Experience as a Leader",
        "Learned Team Management Skills",
        "Manage Situations Successfully",
      ],
      icon: "phone",
    },
  ],

  education: [
    {
      title: "Sanjivani College of Engineering, Kopargaon",
      period: "2023 - Present",
      role: "Bachelor of Technology in Information Technology",
      description:
        "Pursuing Degree of Bachelor of Technology in Information Technology with the Honors in Cyber Security, Actively focusing on building real-world projects and gaining practical experience.",
      achievements: [
        "Completed Second year by securing 8.91 CGPA",
        "NPTEL Certified in Java Programming with Elite",
      ],
      link: "https://sanjivanicoe.org.in/",
      icon: "education",
    },
    {
      title: "Defence Career Academy, Chhatrapati Sambhaji Nagar",
      period: "2021 - 2023",
      role: "HSC in Science Stream",
      description:
        "Focused on PCMB with strong foundation in analytical thinking and problem-solving.",
      achievements: [
        "District Level Hockey Player",
        "Completed Education with Military Training",
        "Serve as a Vice Cadet Captain",
      ],
      link: "https://dcaedu.in/",
      icon: "education",
    },
    {
      title: "Shri Saibab English Medium School, Shirdi",
      period: "2010 - 2021",
      role: "Senior Secondary Education",
      description:
        "Successful completion of primary and secondary education with a focus on foundational knowledge and skills.",
      achievements: [
        "Completed SSC with 84%",
        "Secured 94% in Mathematics in SSC Exam",
      ],
      link: "https://ssems.org/",
      icon: "education",
    },
  ],

  activities: [
    {
      title: "Ranking Top 10% on Try HackMe",
      period: "2025",
      role: "Cyber Security Enthusiast",
      description:
        "Completed multiple hands-on cybersecurity challenges on TryHackMe, ranking in the top 10% of participants and demonstrating strong practical skills in penetration testing, network security, and ethical hacking.",
      achievements: [
        "Ranked in the top 10% globally on TryHackMe for consistent performance",
        "Completed over 50 hands-on cybersecurity labs and challenges.",
        "Gained practical expertise in penetration testing, network security, and ethical hacking techniques.",
      ],
      link: "https://tryhackme.com/p/hiteshpatil0205",
      icon: "trophy",
    },
    {
      title: "Nasa Space App Hackathon",
      period: "2024",
      role: "Team Lead",
      description:
        "Participated in the NASA Space App Hackathon to develop an innovative solution utilizing satellite data to address environmental challenges, showcasing skills in teamwork, problem-solving, and technical implementation.",
      achievements: [
        "Developed innovative solution using satellite data",
        "Enhanced teamwork and problem-solving skills",
      ],
      link: "https://drive.google.com/file/d/1YIPQi1R4AZ__3dK9Z6QwLq6gFJtJxggc/view?usp=sharing",
      icon: "trophy",
    },
  ],
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div id="experience" className="w-full px-4 py-10 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Experience and <span className="text-primary"> Qualification </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Explore my professional journey, educational background, and extracurricular activities that have shaped my career path.
                </p>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-16">
          <TabButton
            active={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
            icon={<Briefcase className="w-5 h-5" />}
            label="Experience"
          />
          <TabButton
            active={activeTab === "education"}
            onClick={() => setActiveTab("education")}
            icon={<GraduationCap className="w-5 h-5" />}
            label="Education"
          />
          <TabButton
            active={activeTab === "activities"}
            onClick={() => setActiveTab("activities")}
            icon={<Trophy className="w-5 h-5" />}
            label="Activities"
          />
        </div>

        <Timeline items={journeyData[activeTab]} />
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        active
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
          : "bg-card text-slate-400 hover:purple-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-linear-to-b from-purple-400 via-purple-500 to-purple-700" />

      <div className="space-y-12 py-8">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  const delayMs = index * 150;

  const getIcon = () => {
    switch (item.icon) {
      case "briefcase":
        return <Briefcase className="w-6 h-6" />;
      case "education":
        return <GraduationCap className="w-6 h-6" />;
      case "trophy":
        return <Trophy className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative flex items-start">
      <div
        className={`w-1/2 ${isLeft ? "pr-12 text-left" : "pl-12 text-left"} ${
          isLeft ? "order-1" : "order-3"
        }`}
      >
        <AnimatedContent
          key={`${item.title}-${index}-${item.role}`}
          distance={80}
          direction="horizontal"
          reverse={!isLeft}
          config={{ tension: 100, friction: 30 }}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
          delay={delayMs}
        >
          <div className="relative">
            <div className="bg-card glow-card backdrop-blur-sm border-2 border-purple-400 rounded-2xl p-6 hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/40">
              <div
                className={`flex items-start gap-4 ${
                  isLeft ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-linear-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30">
                  {getIcon()}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-400 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-m font-semibold text-purple-200 mb-1">
                    {item.period} | {item.role}
                  </div>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-m font-bold italic text-slate-200">
                      Key Achievements :
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-purple-400 shrink-0">
                            •
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-m font-bold italic text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`absolute top-6 ${
                isLeft ? "-right-6" : "-left-6"
              } w-12 h-0.5 bg-gradient-to-${
                isLeft ? "r" : "l"
              } from-slate-700/50 to-transparent`}
            />
          </div>
        </AnimatedContent>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 order-2">
        <AnimatedContent
          distance={20}
          direction="vertical"
          config={{ tension: 120, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
          delay={delayMs + 100}
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full border-8 border-purple-600 bg-purple-300  shadow-lg shadow-purple-500/50 animate-pulse" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-purple-500/20 animate-ping opacity-75" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-purple-400 blur-md" />
          </div>
        </AnimatedContent>
      </div>

      <div className={`w-1/2 ${isLeft ? "order-3" : "order-1"}`} />
    </div>
  );
}
