import {
  Briefcase,
  Code,
  User,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  GlobeLock
} from "lucide-react";
import HeroImage from "./HeroImage";
import myPhoto from "../assets/myphoto2.jpeg";
import { useEffect } from "react";
import { motion } from "framer-motion";

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

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerCards = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="about" className="pt-24 px-4 relative">
      <div className="container max-w-9xl py-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12 ">
          {/* LEFT TEXT SECTION */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold mb-12"
            >
              Hello, I'm <span className="text-primary">Hitesh Patil</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-xl text-left"
            >
              I am a Software Engineering student driven by a passion for
              creating digital solutions that genuinely make a difference. I love
              turning ideas into clean, functional, and user-friendly experiences
              that solve real problems and make technology feel effortless.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-xl text-left"
            >
              My work spans across Web Development, Android Development, AI-ML,
              and Cyber Security, where I focus on building scalable, reliable,
              and thoughtfully designed systems. I believe great software is a
              balance of creativity, logic, and impact - and I’m constantly
              exploring, experimenting, and improving to bring the best version
              of every project to life.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="gradient-border px-6 py-4 card-hover border-l-4 border-l-primary"
            >
              <p className="text-muted-foreground italic text-lg font-semibold text-blue-200">
                Every day, I push myself to learn more, build better, and go
                beyond what I already know turning complex ideas into elegant
                solutions
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-5 justify-center"
            >
              <a
                href="#contact"
                className="bg-linear-to-r from-purple-400 to-purple-600 rounded-3xl px-6 py-2 transition-transform duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get in Touch
              </a>

              <a
                href="/Hitesh Patil-Resume.pdf"
                className="px-6 py-2 font-bold rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-6">
              <div className="flex space-x-4 justify-center ">
                <a
                  href="mailto:hiteshpatil0205@gmail.com"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300"
                >
                  <Mail />
                </a>
                <a
                  href="https://github.com/hiteshpatil2005"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/hiteshpatil2005/"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/hiteshpatil2005"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/hiteshpatil2005"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300"
                >
                  <Facebook />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center py-10"
          >
            <HeroImage src={myPhoto} alt="Hitesh Patil" />
          </motion.div>
        </div>

        {/* JOURNEY TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          The Journey <span className="text-primary"> So Far </span>
        </motion.h2>

        {/* CARDS WITH STAGGER */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardAnim}
            className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-purple-400 to-purple-600">
                <Code className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-xl text-primary">Web Developer</h4>
              <p className="text-muted-foreground">
                Building modern, responsive applications using React, Tailwind,
                Firebase, and FastAPI.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardAnim}
            className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-purple-400 to-purple-600">
                <User className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-xl text-primary">
                Android Developer
              </h4>
              <p className="text-muted-foreground">
                Creator of Pariwar Agro Store—fully functional e-commerce Android
                app live on Play Store.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardAnim}
            className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-purple-400 to-purple-600">
                <GlobeLock className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-xl text-primary">
                Cybersecurity Learner
              </h4>
              <p className="text-muted-foreground">
                Learning cybersecurity with practical, hands-on simulations and
                real-world scenarios.
              </p>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={cardAnim}
            className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group"
          >
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-purple-400 to-purple-600">
                <Briefcase className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-xl text-primary">
                Collaborative Builder
              </h4>
              <p className="text-muted-foreground">
                Skilled in Git workflows, team collaboration, and shipping clean,
                maintainable code.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
