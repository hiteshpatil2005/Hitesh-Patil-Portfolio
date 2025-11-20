import { Briefcase, Code, User, Github, Linkedin, Twitter, Facebook, Mail, GlobeLock } from 'lucide-react';
import HeroImage from "./HeroImage";
import myPhoto from "../assets/myphoto2.jpeg";
import { useEffect } from 'react';



export const AboutSection = () => {

    useEffect(() => {
  const cards = document.querySelectorAll(".glow-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
}, []);

    
    return <section id="about" className="pt-24 px-4 relative">
        {" "}
        <div className="container max-w-9xl py-12 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 ">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold mb-12">Hello, I'm <span className='text-primary'>Hitesh Patil</span></h1>

                    <p className="text-muted-foreground text-xl">
                        I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
                    </p>
                    <p className="text-muted-foreground text-xl">
                        My work spans web development, cloud computing, DevOps, and cybersecurity, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
                    </p>
                    <div className="gradient-border px-6 py-4 card-hover border-l-4 border-l-primary">
                        <div className='text-left'>
                            <p className='text-muted-foreground italic text-xl font-semibold text-blue-200'>
                                Every day, I push myself to learn more, build better, and go beyond what I already know turning complex ideas into elegant solutions
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-5 justify-center italic">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                        <a
                            href="/Hitesh Patil-Resume.pdf"
                            className="px-6 py-2 font-bold rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                    <div className="pt-6">
                        <div className="flex space-x-4 justify-center ">
                            <a href="mailto:hiteshpatil0205@gmail.com" target="_blank" className='p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300'>
                                <Mail />
                            </a>
                            <a href="https://github.com/hiteshpatil2005" target="_blank" className='p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300'>
                                <Github />
                            </a>
                            <a href="https://www.linkedin.com/in/hiteshpatil2005/" target="_blank" className='p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300'>
                                <Linkedin />
                            </a>
                            <a href="https://x.com/hiteshpatil2005" target="_blank" className='p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300'>
                                <Twitter />
                            </a>
                            <a href="https://www.facebook.com/hiteshpatil2005" target="_blank" className='p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300'>
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-10">
                    <HeroImage src={myPhoto} alt="Hitesh Patil" />
                </div>

            </div>


            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                The Journey <span className="text-primary"> So Far </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* CARD 1 */}
                <div className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
                    <div className="absolute inset-0 glow-effect rounded-2xl" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="p-4 rounded-3xl bg-primary/90">
                            <Code className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-xl text-primary">Web Developer</h4>
                        <p className="text-muted-foreground">
                            Building modern, responsive applications using React, Tailwind, Firebase, and FastAPI.
                        </p>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
                    <div className="absolute inset-0 glow-effect rounded-2xl" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="p-4 rounded-3xl bg-primary/90">
                            <User className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-xl text-primary">Android Developer</h4>
                        <p className="text-muted-foreground">
                            Creator of Pariwar Agro Store—fully functional e-commerce Android app live on Play Store.
                        </p>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
                    <div className="absolute inset-0 glow-effect rounded-2xl" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="p-4 rounded-3xl bg-primary/90">
                            <GlobeLock className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-xl text-primary">Cybersecurity Learner</h4>
                        <p className="text-muted-foreground">
                            Learning cybersecurity with practical, hands-on simulations and real-world scenarios.
                        </p>
                    </div>
                </div>

                {/* CARD 4 */}
                <div className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
                    <div className="absolute inset-0 glow-effect rounded-2xl" />
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="p-4 rounded-3xl bg-primary/90">
                            <Briefcase className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-xl text-primary">Collaborative Builder</h4>
                        <p className="text-muted-foreground">
                            Skilled in Git workflows, team collaboration, and shipping clean, maintainable code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}