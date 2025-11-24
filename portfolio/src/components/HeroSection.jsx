import { useNavigate } from "react-router-dom";
import Globe from "../components/Globe";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <Globe />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hello, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Hitesh </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Patil </span>
          </h1>

          <p className="text-lg md:text-xl font-bold text-muted-foreground max-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Empowering digital journeys through elegant code, seamless architecture, and innovative Real World Solutions !!
          </p>

          <div className="pt-4 text-xl opacity-0 animate-fade-in-delay-4">
            <button
              onClick={() => navigate("/portfolio")}
              className="bg-linear-to-br from-purple-400 to-purple-900 text-primary-foreground px-6 py-3 rounded-3xl font-semibold hover:bg-primary/90 transition"
            >
              View My Portfolio
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
