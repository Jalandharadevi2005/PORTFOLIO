export default function Portfolio() {
  const projects = [
    {
      title: "LearnHub – MERN Stack Skill Enhancement Platform",
      description:
        "A full-stack MERN platform for course enrollment and learning.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      live: "https://learnhub-frontend-4dsc.onrender.com/",
      github: "https://github.com/Jalandharadevi2005/Learnub-MernStack",
    },

    {
      title: "AI Chatbot using LLM",
      description:
        "Developed a chatbot using Python and Large Language Models with conversational response handling.",
      tech: ["Python", "LLM", "Generative AI"],
      live: "#",
      github: "https://github.com/Jalandharadevi2005/LLM_AIChatbot",
    },

    {
      title: "FitBuddy AI – Fitness Plan Generator",
      description:
        "An AI-powered fitness plan generator that creates personalized workout and fitness plans.",
      tech: ["React", "JavaScript", "AI"],
      live: "#",
      github:
        "https://github.com/Jalandharadevi2005/FitBuddy-AI-Fitness-Plan-Generator",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "Git",
    "GitHub",
    "AWS",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Jalandharadevi</h1>

        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#internships" className="hover:text-blue-600">
            Internships
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Hi, I’m Jalandharadevi 👋
        </h2>

        <p className="text-lg max-w-2xl">
          Aspiring Software Developer passionate about MERN Stack,
          Generative AI, and Cloud Computing (AWS). Interested in building
          real-world web and AI-based applications.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/Jalandharadevi2005"
            target="_blank"
            className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://learnhub-frontend-4dsc.onrender.com/"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            View Project
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>

        <div className="bg-white rounded-3xl shadow-lg p-8 leading-8 text-lg">
          <p>
            I am a Computer Science Engineering student from Gudlavalleru
            Engineering College with strong interest in MERN Stack
            Development, Artificial Intelligence, and Cloud Computing.
          </p>

          <p className="mt-4">
            I enjoy building real-world applications and continuously
            improving my technical and problem-solving skills through
            projects and internships.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 rounded-2xl p-6 text-center shadow hover:shadow-xl transition font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h4 className="text-2xl font-bold mb-3">
                {project.title}
              </h4>

              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section
        id="internships"
        className="py-20 px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            Internships
          </h3>

          <div className="space-y-6">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold">
                Generative AI Virtual Intern – SmartBridge
              </h4>

              <p className="mt-3 text-lg">
                Worked on Generative AI models, prompt engineering,
                and AI-based applications.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold">
                Full Stack Development Intern – SmartBridge / APSCHE
              </h4>

              <p className="mt-3 text-lg">
                Built MERN stack applications and backend APIs with
                frontend integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            Certifications
          </h3>

          <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4 text-lg">
            <p>
              • Generative AI Virtual Internship – SmartBridge
              (2026)
            </p>

            <p>
              • Full Stack Development Internship – APSCHE &
              SmartBridge (2025)
            </p>

            <p>
              • MongoDB Node.js Developer Path – MongoDB
            </p>

            <p>
              • Web Development Certification – EdLernity
            </p>

            <p>
              • Python Programming Certification – EdLernity
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-8">Contact</h3>

        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-lg">
          <p>
            📧 Email:
            <span className="font-semibold ml-2">
              jalandharadevk@gmail.com
            </span>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/Jalandharadevi2005"
              target="_blank"
              className="text-blue-600 font-semibold ml-2"
            >
              github.com/Jalandharadevi2005
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p>
          © 2026 Jalandharadevi Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}