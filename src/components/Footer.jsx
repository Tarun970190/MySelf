import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">SK</span>
                            <span className="logo-dot"></span>
                        </div>
                        <p className="footer-tagline">
                            IT Systems Administrator passionate about building robust infrastructure and driving digital transformation.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#experience">Experience</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Infrastructure</a></li>
                                <li><a href="#services">Cloud Solutions</a></li>
                                <li><a href="#services">Security</a></li>
                                <li><a href="#services">Consulting</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Sai Kumar. All rights reserved.</p>
                    <p>Built with <span className="heart">❤</span> using React</p>
                </div>

                <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default Footer
