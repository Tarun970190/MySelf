import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Senior IT Systems Administrator',
            company: 'Acuvate Software Pvt Ltd',
            period: '2022 - Present',
            location: 'Hyderabad, India',
            description: 'Leading enterprise IT infrastructure management, implementing cloud solutions, and ensuring 99.9% system uptime.',
            highlights: [
                'Managed Azure infrastructure for 500+ users across multiple regions',
                'Implemented automated monitoring reducing incident response time by 60%',
                'Led migration of on-premise systems to hybrid cloud architecture',
                'Developed PowerShell automation scripts saving 20+ hours weekly'
            ]
        },
        {
            id: 2,
            role: 'IT Systems Administrator',
            company: 'Tech Solutions Inc',
            period: '2020 - 2022',
            location: 'Hyderabad, India',
            description: 'Managed complete IT infrastructure including servers, networks, and security systems.',
            highlights: [
                'Administered Windows Server environment with Active Directory',
                'Implemented backup and disaster recovery solutions',
                'Managed VMware virtualization infrastructure',
                'Provided L2/L3 technical support for critical issues'
            ]
        },
        {
            id: 3,
            role: 'Junior Systems Administrator',
            company: 'Digital Services Corp',
            period: '2018 - 2020',
            location: 'Hyderabad, India',
            description: 'Started career in IT administration, learning enterprise systems and best practices.',
            highlights: [
                'Supported Windows Server and Linux environments',
                'Managed user accounts and permissions in Active Directory',
                'Assisted in network troubleshooting and maintenance',
                'Documented IT processes and procedures'
            ]
        }
    ]

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">
                    Work <span>Experience</span>
                </h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="timeline-period">{exp.period}</span>
                                    <span className="timeline-location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        {exp.location}
                                    </span>
                                </div>
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-description">{exp.description}</p>
                                <ul className="timeline-highlights">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                    <div className="timeline-line"></div>
                </div>
            </div>
        </section>
    )
}

export default Experience
