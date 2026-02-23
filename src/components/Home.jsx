const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm a passionate developer creating amazing web experiences
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Home
