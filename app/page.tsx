import Link from 'next/link';

// Icon components
const HTMLIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
    HTML5
  </div>
);

const CSSIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
    CSS3
  </div>
);

const JSIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-black text-lg font-bold shadow-lg">
    JS
  </div>
);

const ReactIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
    ⚛️
  </div>
);

const NodeIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    Node
  </div>
);

const PythonIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
    🐍
  </div>
);

const GitHubIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    Git
  </div>
);

const PHPIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    PHP
  </div>
);

const MySQLIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    MySQL
  </div>
);

const WordPressIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    WP
  </div>
);

const TypeScriptIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    TS
  </div>
);

const NextJSIcon = () => (
  <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg">
    Next
  </div>
);

export default function Home() {
  const skills = [
    { name: 'JavaScript', icon: <JSIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'HTML5', icon: <HTMLIcon /> },
    { name: 'CSS3', icon: <CSSIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Next.js', icon: <NextJSIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'PHP', icon: <PHPIcon /> },
    { name: 'MySQL', icon: <MySQLIcon /> },
    { name: 'WordPress', icon: <WordPressIcon /> },
    { name: 'GitHub', icon: <GitHubIcon /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Resume</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#certifications" className="text-gray-700 hover:text-gray-900">Certifications</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left side - Profile */}
              <div className="flex-1 text-center lg:text-left">
                <div className="relative mb-8">
                  <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 p-2 shadow-2xl">
                    <img 
                      src="/profile.jpg" 
                      alt="Vincent Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400 opacity-20 animate-ping"></div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    Vincent
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-300 mb-4">Web Developer</p>
                <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                  Crafting beautiful, functional web experiences with modern technologies
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-6 mb-10">
                  <Link href="https://www.linkedin.com/in/vincent-596b86351" className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" target='_blank'>
                    <span className="text-lg font-bold">ln</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  </Link>
                  <Link href="https://github.com/Vincent-than" className="group relative w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg" target='_blank'>
                    <span className="text-lg font-bold">Git</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  </Link>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <a href="/Resume(Vincent).pdf" download="Resume(Vincent).pdf" className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl inline-block text-center">
                    <span className="relative z-10">Download CV</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                  </a>
                </div>
              </div>

              {/* Right side - Animated Skills Preview */}
              <div className="flex-1 relative">
                <div className="relative w-96 h-96 mx-auto">
                  {/* Floating skill icons - Made bigger */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      JS
                    </div>
                  </div>
                  <div className="absolute top-1/4 right-0 animate-pulse">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      ⚛️
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 right-1/4 animate-bounce animation-delay-1000">
                    <div className="w-22 h-22 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      Node
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/4 animate-pulse animation-delay-2000">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      🐍
                    </div>
                  </div>
                  <div className="absolute top-1/3 left-0 animate-bounce animation-delay-3000">
                    <div className="w-18 h-18 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      HTML
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full opacity-60">
            <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with a knack for creating
                beautiful, functional web applications. With a background in both design and development,
                I strive to build user-friendly interfaces and robust backends that deliver seamless experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a 
                deep passion for building user-centric applications. I believe in writing 
                code that not only works but is maintainable, scalable, and elegant.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">My Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Clean, maintainable code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>User-centered design thinking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                      🎨
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">UI/UX Design</h4>
                      <p className="text-gray-600 text-sm">Creating beautiful, intuitive user interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                      💻
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Frontend Development</h4>
                      <p className="text-gray-600 text-sm">Building responsive, interactive web applications</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                      ⚙️
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Backend Development</h4>
                      <p className="text-gray-600 text-sm">Developing robust server-side solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              My Skills
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to build amazing web applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Weather Website */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/weather.png" alt="Weather Website" className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weather App</h3>
                <p className="text-gray-600 mb-4">
                  A weather application that provides real-time weather updates and forecasts.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">MySQL</span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Vincent-than/Weather" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm inline-block text-center"
                  >
                  GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - Digital Menu Platform */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src="/menu1.png" alt="Digital Menu Platform" className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Restaurant Menu</h3>
                <p className="text-gray-600 mb-4">
                  A digital menu application for restaurants, allowing customers to browse the menu, customize their orders, and make reservations.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">TailwindCss</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Flask/Python</span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/Vincent-than/digitalMenuRestaurant" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm inline-block text-center"
                  >
                  GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 - Coming Soon */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-6xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Coming SOON</h3>
                <p className="text-gray-600 mb-4">
                  Exciting new project in development. Stay tuned for updates!
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Socket.io</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Firebase</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed text-sm">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src="/python.png" 
                  alt="Restapi with Python and Flask" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Python Certificate</h3>
                <p className="text-gray-600 mb-4">Certificate from Udemy</p>
                <p className="text-sm text-gray-500">REST APIs with Flask and Python in 2025</p>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src="/certificate.png" 
                  alt="Certificate Internship" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">WordPress Internship</h3>
                <p className="text-gray-600 mb-4">Certificate from Readygrad</p>
                <p className="text-sm text-gray-500">Professional Internship Program</p>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src="/Statement.png" 
                  alt="Statement of Attainment" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Statement of Attainment</h3>
                <p className="text-gray-600 mb-4">Statement from ReadyGrad</p>
                <p className="text-sm text-gray-500">BSBOPS201 - Work effectively in business environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}