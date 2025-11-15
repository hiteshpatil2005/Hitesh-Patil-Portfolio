import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-6xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Passionate Web Developer Cyber Security Enthusiast</h3>
                    <p className="text-muted-foreground">
                        I am a Software Engineering student passionate about building impactful solutions. I specialize in developing software that bridges technology and real-world challenges, ensuring efficiency, usability, and meaningful impact.
                    </p>
                    <p className="text-muted-foreground">
                        My work spans web development, cloud computing, DevOps, and cybersecurity, driven by a belief that technology should solve problems, not create them. I am dedicated to crafting scalable, effective, and user-centric solutions while fostering a culture of collaboration, knowledge-sharing, and continuous improvement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Web Development</h4>
                                <p className='text-muted-foreground'>
                                    Creating responsive websites and web applications with modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
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
                        <div className="flex items-start gap-4">
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
        </div>
    </section>;
}