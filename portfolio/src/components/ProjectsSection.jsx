import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { GithubOriginal } from "devicons-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Pariwar Agro Android Online Ordering App",
        description:
            "An Android application for managing agricultural activities, providing users with tools for crop planning, weather forecasting, and market prices.",
        image: "/projects/Project-1.png",
        tags: ["Android", "Kotlin", "Firebase"],
        githubUrl: "https://github.com/hiteshpatil2005/Pariwar-Agro",
        externalUrl:
            "https://play.google.com/store/apps/details?id=com.pariwar.pariwaragro&pcampaignid=web_share",
    },
    {
        id: 2,
        title: "Edumarks - Result Publishing Portal",
        description:
            "A web portal for educational institutions to publish student results securely and efficiently, featuring role-based access and data analytics.",
        image: "/projects/Project-2.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript", " MySQL"],
        githubUrl: "https://github.com/hiteshpatil2005/EDUMARKS",
        externalUrl:
            "https://www.linkedin.com/posts/hiteshpatil2005_edumarks-php-mysql-activity-7331337947012624386-l8fw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYpP8cBEx3HTi18qHpS3g8Dafn6tZkMBhs",
    },
    {
        id: 3,
        title: "AI based Smart Shopping Assistant",
        description:
            "AI-powered shopping assistant helps users find products, compare prices, and get personalized recommendations based on their preferences and shopping history.",
        image: "/projects/Project-3.png",
        tags: ["ReactJS", "FastAPI", "MongoDB"],
        githubUrl:
            "https://github.com/hiteshpatil2005/Smart-Shopping-Assistant",
        externalUrl: "https://youtu.be/DS-zF_qomWY?si=2a8HTHULKvPIW1O4",
    },
];

// Scroll Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const ProjectsSection = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-9xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Featured <span className="text-primary"> Projects </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    Here are some of the projects I've worked on recently. Click on the GitHub icon to view the source code.
                </motion.p>

                {/* Scroll Animated Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="glow-card group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
                            onMouseMove={handleMouseMove}
                        >
                            {/* Glow layer */}
                            <div
                                className="glow-effect"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    pointerEvents: "none",
                                }}
                            ></div>

                            <div className="h-48 p-4">
                                <div className="w-full h-full overflow-hidden rounded-xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1 py-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-purple-100 border-purple-400 bg-purple-300/15 border px-4 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 p-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <GithubOriginal
                                                size={30}
                                                style={{
                                                    filter:
                                                        "brightness(0) saturate(100%) invert(57%) sepia(89%) saturate(5000%) hue-rotate(240deg)",
                                                }}
                                            />
                                        </a>
                                    </div>

                                    <div className="flex space-x-3 p-3">
                                        <a
                                            href={project.externalUrl}
                                            target="_blank"
                                            className="bg-linear-to-bl from-purple-400 to-purple-600 rounded-xl px-3 py-2 flex items-center gap-2"
                                        >
                                            View Project
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/hiteshpatil2005"
                        target="_blank"
                        className="bg-linear-to-br from-purple-400 to-purple-900 text-primary-foreground p-3 rounded-3xl w-fit flex items-center mx-auto gap-2 hover:bg-primary/90 transition"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
