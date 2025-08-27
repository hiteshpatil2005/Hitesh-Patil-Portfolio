import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ThemeToggle } from "../components/ThemeToggle";
import {StartBackground} from "@/components/StartBackground"
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StartBackground />

            {/* Navbar */}

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
            </main>

            {/* Footer */}
        </div>
    );
}