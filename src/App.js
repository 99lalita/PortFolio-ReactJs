import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Navbar from './components/Navbar/Navbar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {

  const location = useLocation();
  console.log(location)

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === '/'

  return (
    <div className="App">

      {/* particle js */}
      {
        renderParticleJsInHomePage && <Particles
          id="particles"
          init={handleInit}
          options={{
            background: {
              color: {
                value: "#1d1d1d",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      }



      {/* navbar */}
      <Navbar />


      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/skills' element={<Skills />} />
          <Route index path='/portfolio' element={<Portfolio />} />
          <Route index path='/contact' element={<Contact />} />
          <Route index path='/resume' element={<Resume />} />
        </Routes>
      </div>
     
      </div>
  );
}

export default App;
