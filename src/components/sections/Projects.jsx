export const Projects = () => {
    const projects = [
      {
        name: "Online Student Assistant System",
        description:
          "The Online Student Assistant System is a web-based platform designed to streamline the admission process for students. It allows applicants to submit their requirements, track their application status, and receive updates all in one centralized system. With a user-friendly interface and automated workflows, the system simplifies enrollment while improving efficiency for both students and administrators.",
        technologies: ["HTML", "CSS", "MySQL"],
        images: [
          "/images/project1.png",
          "/images/project2.png",
          "/images/project3.png",
          "/images/project4.png",
          "/images/project5.png",
          "/images/project6.png",
        ],
      },
      {
        name: "Work-Flow Buddy App",
        description:
          "The Work-Flow Buddy App is designed to streamline task management and enhance productivity by providing a user-friendly interface for managing daily workflows. With features like task prioritization, deadline tracking, and collaborative project sharing, it helps teams stay organized and efficient. Whether for personal use or team collaboration, the app aims to simplify workflow processes, keeping everything on track with ease.",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
        images: [
          "/images/workflow.png",
          "/images/workflow2.png",
          "/images/workflow3.png",
          "/images/workflow4.png",
        ],
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-4 pt-32 pb-12 text-white space-y-24">
        {projects.map((project, index) => (
          <div key={index}>
            <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-red-500/10 text-red-400 px-3 py-1 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} Screenshot ${i + 1}`}
                  className="rounded-xl shadow-md object-cover h-60 w-full"
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  };
  