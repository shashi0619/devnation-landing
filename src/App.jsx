import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
