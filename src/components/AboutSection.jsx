import { useState } from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  // (optional: you can implement click-outside logic for even better UX)

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Engineer & Software Developer & WordPress Developer
            </h3>

            <p className="text-muted-foreground">
              As a multi-disciplinary technologist, I design and build modern web applications using React, PHP, Tailwind CSS, and MySQL. With hands-on experience in both frontend and backend, I create responsive interfaces, custom WordPress plugins, and automated dashboards tailored for real business needs.
            </p>

            <p className="text-muted-foreground">
              My data engineering work involves transforming raw data into actionable insights using Python and SQL, while also maintaining high standards in code quality and DevOps. Whether delivering intuitive user experiences or extracting value from complex data sets, I strive for solutions that are efficient, scalable, and user-centric.
            </p>

            {/* Buttons Section with CV Dropdown */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center relative">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Click-to-open Dropdown */}
              <div className="relative">
                <button
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  Download CV ▼
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 min-w-[200px] z-10"
                  >
                    <a
                      href="/Ashif_frontend_2025.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Frontend Developer
                    </a>
                    <a
                      href="/Ashif_frontend_2025.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Software Developer
                    </a>
                    <a
                      href="/wordpress_developer.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      WordPress Developer
                    </a>
                    <a
                      href="/Ashif_Data_Analyst_2025.pdf"
                      download
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Data Analyst
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Skills Cards Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards */}
        </div>
      </div>
    </section>
  );
};
