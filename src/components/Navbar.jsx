import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-700 shadow-lg">
      <div>
        <h1 className="text-2xl font-bold text-white">Logo</h1>
      </div>
      <div>
        <ul className="flex gap-8 py-2 text-xl text-white font-semibold">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer hover:text-gray-300 transition-colors ${
                activeSection === 'home' ? 'text-blue-400' : ''
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`cursor-pointer hover:text-gray-300 transition-colors ${
                activeSection === 'about' ? 'text-blue-400' : ''
              }`}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className={`cursor-pointer hover:text-gray-300 transition-colors ${
                activeSection === 'projects' ? 'text-blue-400' : ''
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`cursor-pointer hover:text-gray-300 transition-colors ${
                activeSection === 'contact' ? 'text-blue-400' : ''
              }`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
