import { useState } from "react";
import { cn } from "@/lib/utils";

// Updated skills array with new categories and skills
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Data Analysis
  { name: "Python", level: 85, category: "data" },
  { name: "Pandas", level: 80, category: "data" },
  { name: "NumPy", level: 80, category: "data" },
  { name: "SQL (MySQL/PostgreSQL)", level: 85, category: "data" },
  { name: "Power BI", level: 80, category: "data" },
  { name: "Tableau", level: 75, category: "data" },
  { name: "Excel (Advanced)", level: 90, category: "data" },

  // WordPress
  { name: "WordPress Plugin Dev", level: 90, category: "wordpress" },
  { name: "WordPress Theme Dev", level: 85, category: "wordpress" },
  { name: "PHP", level: 88, category: "wordpress" },
  { name: "WooCommerce", level: 80, category: "wordpress" },
  { name: "Custom Post Types", level: 80, category: "wordpress" },
  { name: "WP REST API", level: 75, category: "wordpress" },
];

// Updated categories
const categories = [
  "all",
  "frontend",
  "backend",
  "data",
  "wordpress",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {
                {
                  all: "All",
                  frontend: "Frontend",
                  backend: "Backend",
                  data: "Data Analysis",
                  wordpress: "WordPress",
                  tools: "Tools",
                }[category] || category
              }
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
