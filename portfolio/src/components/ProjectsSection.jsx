import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Pariwar Agro Android App",
        description: "An Android application for managing agricultural activities, providing users with tools for crop planning, weather forecasting, and market prices.",
        image: "/projects/Project-1.png",
        tags: ["Android", "Kotlin", "Firebase"],
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Edumarks - Result Publishing Portal",
        description: "A web portal for educational institutions to publish student results securely and efficiently, featuring role-based access and data analytics.",
        image: "/projects/Project-2.png",
        tags: ["PHP", "HTML", "CSS", "JavaScript", " MySQL"],
        githubUrl: "#",
    },
    {
        id: 1,
        title: "Smart Shopping Assistant",
        description: "An AI-powered shopping assistant that helps users find products, compare prices, and get personalized recommendations based on their preferences and shopping history.",
        image: "/projects/Project-3.png",
        tags: ["ReactJS", "FastAPI", "MongoDB"],
        githubUrl: "https://github.com/hiteshpatil2005/Smart-Shopping-Assistant",
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. Click on the GitHub icon to view the source code.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium border bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/hiteshpatil2005" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};