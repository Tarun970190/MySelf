import { useState } from 'react'
import './Skills.css'

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', label: 'All Skills' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'cloud', label: 'Cloud & DevOps' },
        { id: 'security', label: 'Security' },
        { id: 'tools', label: 'Tools & Scripting' }
    ]

    const skills = [
        // Infrastructure
        { name: 'Windows Server', level: 95, category: 'infrastructure', icon: '🖥️' },
        { name: 'Linux Administration', level: 85, category: 'infrastructure', icon: '🐧' },
        { name: 'Active Directory', level: 95, category: 'infrastructure', icon: '📂' },
        { name: 'VMware vSphere', level: 90, category: 'infrastructure', icon: '🔲' },
        { name: 'Hyper-V', level: 88, category: 'infrastructure', icon: '📦' },
        { name: 'Network Administration', level: 85, category: 'infrastructure', icon: '🌐' },

        // Cloud & DevOps
        { name: 'Microsoft Azure', level: 90, category: 'cloud', icon: '☁️' },
        { name: 'AWS', level: 75, category: 'cloud', icon: '🔶' },
        { name: 'Docker', level: 80, category: 'cloud', icon: '🐳' },
        { name: 'Kubernetes', level: 70, category: 'cloud', icon: '⚙️' },
        { name: 'CI/CD Pipelines', level: 75, category: 'cloud', icon: '🔄' },
        { name: 'Terraform', level: 70, category: 'cloud', icon: '🏗️' },

        // Security
        { name: 'Firewall Management', level: 88, category: 'security', icon: '🛡️' },
        { name: 'Endpoint Security', level: 85, category: 'security', icon: '🔐' },
        { name: 'SIEM Solutions', level: 78, category: 'security', icon: '📊' },
        { name: 'Backup & Recovery', level: 92, category: 'security', icon: '💾' },
        { name: 'Compliance & Auditing', level: 80, category: 'security', icon: '✅' },

        // Tools & Scripting
        { name: 'PowerShell', level: 92, category: 'tools', icon: '💻' },
        { name: 'Python Scripting', level: 75, category: 'tools', icon: '🐍' },
        { name: 'Bash Scripting', level: 80, category: 'tools', icon: '📜' },
        { name: 'Microsoft 365', level: 95, category: 'tools', icon: '📧' },
        { name: 'ITIL Framework', level: 85, category: 'tools', icon: '📋' },
        { name: 'Monitoring Tools', level: 88, category: 'tools', icon: '📈' }
    ]

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory)

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">
                    Technical <span>Skills</span>
                </h2>

                <div className="skills-categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skill-card"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="skill-header">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ '--progress': `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-certifications">
                    <h3>Certifications & Achievements</h3>
                    <div className="cert-grid">
                        <div className="cert-card">
                            <div className="cert-icon">🏆</div>
                            <span>Microsoft Certified: Azure Administrator</span>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">🎖️</div>
                            <span>VMware Certified Professional</span>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">🏅</div>
                            <span>ITIL Foundation Certified</span>
                        </div>
                        <div className="cert-card">
                            <div className="cert-icon">⭐</div>
                            <span>CompTIA Security+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
