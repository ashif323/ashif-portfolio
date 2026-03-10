import { ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block mb-2">Hi, I'm</span>
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: ["Mohammad Ashif Iqbal"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl opacity-100">
            Crafting digital experiences that blend creativity and logic.
            Passionate about turning innovative ideas into reality with clean
            code and stunning design—let’s build the future together!
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/projects/professional-pic.jpg" // Update to your exact image path
            alt="Ashif Iqbal"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
