import { useState } from "react";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";

import {
    Html5Original,
    Css3Original,
    JavascriptOriginal,
    ReactOriginal,
    TailwindcssOriginal,
    NodejsOriginal,
    ExpressOriginal,
    MongodbOriginal,
    FirebaseOriginal,
    PythonOriginal,
    GitOriginal,
    GithubOriginal,
    JiraOriginal,
    VscodeOriginal,
    AndroidstudioOriginal,
    MysqlOriginal,
    PhpOriginal,
    MarkdownOriginal,
    COriginal,
    JavaOriginal,
    KotlinOriginal,
    XmlOriginal,
    IntellijOriginal,
    KalilinuxOriginal
} from "devicons-react";

// Skill data same...
const skills = [
    { name: "C", level: 80, category: "programming Languages", icon: <COriginal size={40} /> },
    { name: "Java", level: 85, category: "programming Languages", icon: <JavaOriginal size={40} /> },
    { name: "Kotlin", level: 60, category: "programming Languages", icon: <KotlinOriginal size={40} /> },

    { name: "HTML", level: 95, category: "frontend", icon: <Html5Original size={40} /> },
    { name: "CSS", level: 90, category: "frontend", icon: <Css3Original size={40} /> },
    { name: "Javascript", level: 60, category: "frontend", icon: <JavascriptOriginal size={40} /> },
    { name: "ReactJS", level: 60, category: "frontend", icon: <ReactOriginal size={40} /> },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: <TailwindcssOriginal size={40} /> },
    { name: "XML", level: 70, category: "frontend", icon: <XmlOriginal size={40} /> },

    { name: "Node.js", level: 55, category: "backend", icon: <NodejsOriginal size={40} /> },
    { name: "Express.js", level: 40, category: "backend",
      icon: <ExpressOriginal size={40}
      style={{ filter: "brightness(0) saturate(100%) invert(57%) sepia(89%) saturate(5000%) hue-rotate(240deg)" }} /> },
    { name: "PHP", level: 65, category: "backend", icon: <PhpOriginal size={40} /> },
    { name: "MongoDB", level: 65, category: "backend", icon: <MongodbOriginal size={40} /> },
    { name: "Firebase", level: 75, category: "backend", icon: <FirebaseOriginal size={40} /> },
    { name: "SQL", level: 85, category: "backend", icon: <MysqlOriginal size={40} /> },
    { name: "Python", level: 75, category: "programming Languages", icon: <PythonOriginal size={40} /> },

    { name: "Git", level: 70, category: "tools", icon: <GitOriginal size={40} /> },
    { name: "Github", level: 95, category: "tools",
      icon: <GithubOriginal size={40}
      style={{ filter: "brightness(0) saturate(100%) invert(57%) sepia(89%) saturate(5000%) hue-rotate(240deg)" }} /> },
    { name: "Jira", level: 65, category: "tools", icon: <JiraOriginal size={40} /> },
    { name: "VS Code", level: 95, category: "tools", icon: <VscodeOriginal size={40} /> },
    { name: "Android Studio", level: 85, category: "tools", icon: <AndroidstudioOriginal size={40} /> },
    { name: "IntelliJ IDEA", level: 80, category: "tools", icon: <IntellijOriginal size={40} /> },
    { name: "Markdown", level: 75, category: "all", icon: <MarkdownOriginal size={40} /> },
    { name: "Kali Linux", level: 60, category: "tools", icon: <KalilinuxOriginal size={40} /> },
];

const categories = ["all","programming Languages","frontend","backend","tools"];

// Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-9xl">

                {/* Title Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    My Skills & <span className="text-primary">Expertise</span>
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Scroll-Triggered Animated Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {filteredSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="glow-card bg-card p-6 rounded-lg shadow-xs relative"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="glow-effect absolute inset-0 pointer-events-none"></div>

                            <div className="flex items-center gap-3 mb-4">
                                {skill.icon}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
