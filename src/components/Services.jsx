import './Services.css'

const Services = () => {
    const services = [
        {
            id: 1,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            ),
            title: 'Infrastructure Setup',
            description: 'Design and implement robust IT infrastructure including servers, storage, and networking solutions tailored to your business needs.',
            features: ['Server Configuration', 'Network Design', 'Storage Solutions', 'Virtualization']
        },
        {
            id: 2,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
            ),
            title: 'Cloud Migration',
            description: 'Seamlessly migrate your on-premise infrastructure to cloud platforms like Azure and AWS with minimal downtime and maximum efficiency.',
            features: ['Azure Migration', 'AWS Setup', 'Hybrid Cloud', 'Cost Optimization']
        },
        {
            id: 3,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
            title: 'Security Solutions',
            description: 'Implement comprehensive security measures to protect your IT assets from threats and ensure compliance with industry standards.',
            features: ['Firewall Setup', 'Endpoint Protection', 'Security Audits', 'Compliance']
        },
        {
            id: 4,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            title: 'System Maintenance',
            description: 'Proactive monitoring and maintenance services to ensure optimal performance, prevent issues, and minimize downtime.',
            features: ['24/7 Monitoring', 'Patch Management', 'Performance Tuning', 'Health Checks']
        },
        {
            id: 5,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            title: 'Automation & Scripting',
            description: 'Develop custom automation solutions using PowerShell, Python, and other tools to streamline operations and increase efficiency.',
            features: ['PowerShell Scripts', 'Task Automation', 'CI/CD Pipelines', 'Process Optimization']
        },
        {
            id: 6,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            title: 'IT Consulting',
            description: 'Strategic IT consulting to help you make informed decisions about technology investments and digital transformation.',
            features: ['IT Strategy', 'Technology Assessment', 'Best Practices', 'Training']
        }
    ]

    return (
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title">
                    Services <span>I Offer</span>
                </h2>
                <p className="section-subtitle">
                    Comprehensive IT solutions tailored to meet your business objectives and drive growth
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <div className="service-hover-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
