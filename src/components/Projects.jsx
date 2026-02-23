const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'An innovative solution for managing tasks and productivity.',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A beautiful portfolio website showcasing creative work.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
