import { Linkedin, Twitter, Facebook, Github, Send, Mail, MapPin, Phone } from "lucide-react";
import {cn} from "@/libs/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for reaching out. I will get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1000);
    }

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me using the contact information below or by filling out the contact form.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:hiteshpatil0205@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">hiteshpatil0205@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-9 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+918605890513" className="text-muted-foreground hover:text-primary transition-colors">+91 8605890513 ( India )</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">Shirdi - 423109, Maharashtra</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
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

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                        <form action="" className="space-y-6">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Hitesh Patil..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="hiteshpatil@example.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Message Here..."
                                />
                            </div>

                            <button type="submit" 
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};