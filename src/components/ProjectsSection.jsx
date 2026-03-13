import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "React Dog Studio Website",
    description:
      "A modern animated website built with React and Tailwind CSS featuring smooth animations and interactive UI elements inspired by award-winning web design.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "GSAP", "Three.js", "JavaScript"],
    demoUrl: "https://react-dog-studio.netlify.app",
    githubUrl: "https://github.com/ashif323/react-dog-studio",
  },
  {
    id: 2,
    title: "Classic Snake Game",
    description:
      "A browser-based classic Snake Game built using HTML, CSS, and JavaScript featuring real-time keyboard controls, collision detection, score tracking, and smooth gameplay.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Game Development"],
    demoUrl: "https://classic-snake-game-1.netlify.app",
    githubUrl: "https://github.com/ashif323/snake-game",
  },
  {
    id: 3,
    title: "Kanban Board",
    description:
      "A task management Kanban board application that allows users to create, edit, delete, and organize tasks across columns like To-Do, In Progress, and Done with an interactive drag-and-drop interface.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Drag & Drop", "Task Management", "Vite"],
    demoUrl: "https://kanban-board-routine.netlify.app/",
    githubUrl: "https://github.com/ashif323/kanban-board",
  },
  {
    id: 4,
    title: "React WordPress App",
    description:
      "A React frontend seamlessly integrated with WordPress backend via REST API and JWT Auth. Manage posts with rich editing using CKEditor 5, image uploads, and TailwindCSS styling.",
    image: "/projects/project4.png",
    tags: ["React", "WordPress", "REST API", "JWT Auth", "CKEditor 5", "Vite"],
    demoUrl: "https://github.com/ashif323/react-wordpress-app",
    githubUrl: "https://github.com/ashif323/react-wordpress-app",
  },
  {
  id: 5,
  title: "Image Editor",
  description: "A web-based image editor that allows users to upload images and apply filters, adjust brightness/contrast, rotate, and export edited images directly in the browser.",
  image: "/projects/project5.png",
  tags: ["JavaScript", "HTML", "CSS", "Canvas API", "Image Processing"],
  demoUrl: "https://pic-editor-app.netlify.app/",
  githubUrl: "https://github.com/ashif323/image-editor"
},
  {
    id: 6,
    title: "Blog Expense Tracker Plugin",
    description:
      "Easily track, categorize, and manage blogging expenses. Features quick entry, search, charts, and CSV import/export from your WordPress dashboard.",
    image: "/projects/project6.png",
    tags: ["WordPress", "PHP", "CSV", "Charts", "REST API"],
    demoUrl: "https://github.com/ashif323/blog-expense-tracker-plugin",
    githubUrl: "https://github.com/ashif323/blog-expense-tracker-plugin.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ashif323"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
