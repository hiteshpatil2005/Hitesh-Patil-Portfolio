import { Briefcase, Code, User, Github, Linkedin, Twitter, Facebook} from 'lucide-react';
import HeroImage from "./HeroImage";
import myPhoto from "../assets/myphoto2.jpeg";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container max-w-9xl py-12 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Hello, I'm <span className='text-primary'>Hitesh Patil</span></h2>
                    
                    <p className="text-muted-foreground text-xl">
                        I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
                    </p>
                    <p className="text-muted-foreground text-xl">
                        My work spans web development, cloud computing, DevOps, and cybersecurity, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
                    </p>
                    <div className="gradient-border px-6 py-4 card-hover border-l-4 border-l-primary">
                        <div className='text-left'>
                            <p className='text-muted-foreground italic text-xl'>
                                Every day, I push myself to learn more, build better, and go beyond what I already know—turning complex ideas into elegant solutions
                            </p>
                        </div>
                </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                    <div className="pt-8">
                            <div className="flex space-x-4 justify-center ">
                                <a href="" target="_blank" className='p-3 rounded-full bg-primary/20 hover:bg-primary/60 transition-colors duration-300'>
                                    <Github />
                                </a>
                                <a href="" target="_blank" className='p-3 rounded-full bg-primary/20 hover:bg-primary/60 transition-colors duration-300'>
                                    <Linkedin />
                                </a>
                                <a href="" target="_blank" className='p-3 rounded-full bg-primary/20 hover:bg-primary/60 transition-colors duration-300'>
                                    <Twitter />
                                </a>
                                <a href="" target="_blank" className='p-3 rounded-full bg-primary/20 hover:bg-primary/60 transition-colors duration-300'>
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
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-4 gap-8">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className='h-6 w-6 text-primary' />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-bold text-primary text-xl'>Web Development</h4>
                            <p className='text-muted-foreground'>
                                Creating responsive websites and web applications with modern frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className='h-6 w-6 text-primary' />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                            <p className='text-muted-foreground'>
                                Designing intuitive user interfaces and seamless user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className='h-6 w-6 text-primary' />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Project Management</h4>
                            <p className='text-muted-foreground'>
                                Leading projects from conception to compeletion with agile methodologies.
                            </p>
                        </div>
                    </div>
                </div>
                 <div className="gradient-border p-6 card-hover">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className='h-6 w-6 text-primary' />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Project Management</h4>
                            <p className='text-muted-foreground'>
                                Leading projects from conception to compeletion with agile methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}