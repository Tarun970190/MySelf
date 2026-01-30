import { useState, useEffect } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading for smooth entrance
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader">
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <div className="loader-ring"></div>
                    <span className="loader-text">SK</span>
                </div>
            </div>
        )
    }

    return (
        <div className="app">
            <ParticlesBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
