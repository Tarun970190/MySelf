import './About.css'

const About = () => {
    const highlights = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
            title: 'Infrastructure Management',
            description: 'Expert in designing, implementing, and maintaining robust IT infrastructure solutions.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
            ),
            title: 'Cloud Solutions',
            description: 'Proficient in Azure, AWS, and hybrid cloud architectures for scalable solutions.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            title: 'Security & Compliance',
            description: 'Implementing enterprise security measures and ensuring regulatory compliance.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            ),
            title: 'System Automation',
            description: 'Automating repetitive tasks using PowerShell, Python, and modern DevOps tools.'
        }
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3>Passionate IT Professional</h3>
                            <p>
                                I'm <strong>Sai Kumar</strong>, an experienced IT Systems Administrator
                                with a deep passion for technology and problem-solving. Over the past 6+ years,
                                I've had the privilege of working with diverse organizations, helping them
                                streamline their IT operations and achieve their business goals.
                            </p>
                            <p>
                                My expertise spans across enterprise infrastructure management, cloud solutions,
                                network administration, and system security. I believe in proactive monitoring
                                and preventive maintenance to ensure maximum uptime and optimal performance.
                            </p>
                        </div>

                        <div className="about-details">
                            <div className="detail-item">
                                <span className="detail-label">Name</span>
                                <span className="detail-value">Sai Kumar</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Experience</span>
                                <span className="detail-value">6+ Years</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Specialization</span>
                                <span className="detail-value">IT Systems Administration</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-value">India</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download Resume
                        </a>
                    </div>

                    <div className="about-highlights">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="highlight-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="highlight-icon">{item.icon}</div>
                                <div className="highlight-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
