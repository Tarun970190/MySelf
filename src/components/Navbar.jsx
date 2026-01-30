import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navLinks.map(link => document.getElementById(link.id))
            const scrollPosition = window.scrollY + 100

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.offsetHeight
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id)
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (sectionId) => {
        setIsMobileMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={() => handleNavClick('home')}>
                    <span className="logo-text">SK</span>
                    <span className="logo-dot"></span>
                </a>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(link.id)
                            }}
                        >
                            {link.label}
                            <span className="nav-link-underline"></span>
                        </a>
                    ))}
                </div>

                <a href="#contact" className="navbar-cta" onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('contact')
                }}>
                    Let's Talk
                </a>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
