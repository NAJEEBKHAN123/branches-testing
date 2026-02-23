const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript / TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5 & CSS3', level: 95 },
      ],
    },
    {
      title: 'Backend & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'REST APIs', level: 82 },
        { name: 'Vite / Webpack', level: 78 },
      ],
    },
    {
      title: 'Design & UX',
      icon: '🎨',
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Principles', level: 85 },
        { name: 'Figma', level: 75 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Skills
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with to build modern web applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <span className="text-2xl mr-2" aria-hidden>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold text-white inline">
                  {category.title}
                </h3>
              </div>
              <div className="p-6 space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                      <span>{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: tech badges row */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
            'React',
            'Tailwind',
            'JavaScript',
            'Vite',
            'Git',
            'Node.js',
            'HTML5',
            'CSS3',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full text-sm transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
