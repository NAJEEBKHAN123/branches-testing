const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to my portfolio! I'm a dedicated web developer passionate about creating
              beautiful and functional websites.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With expertise in modern web technologies, I specialize in building responsive,
              user-friendly applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700">
              My goal is to transform ideas into reality through clean code and innovative design.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                React.js & Modern JavaScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Tailwind CSS & Responsive Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Frontend Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                UI/UX Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
