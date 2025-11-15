import { AboutSection } from "../components/AboutSection";
import { StartBackground } from "@/components/StartBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

// add other sections as you build them

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StartBackground />
      <main>
        <AboutSection />
        {/* Add more sections */}
        {/* <ProjectsSection /> */}
      </main>
    </div>
  );
};

