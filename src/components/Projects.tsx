import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useInView } from '../hooks/useInView';

interface Project {
  type: string;
  title: string;
  desc: string;
  tech: string[];
  gradient: [string, string];
  iconChar: string;
}

const projects: Project[] = [
  {
    type: 'Master Thesis',
    title: 'Automated API Testing Framework with CI/CD Integration',
    desc: 'A scalable API testing framework integrated into CI/CD pipelines. Implements dynamic API discovery using OpenAPI/Swagger, with a frontend dashboard to visualize API responses and testing results.',
    tech: ['TypeScript', 'Node.js', 'React', 'OpenAPI', 'Swagger', 'CI/CD', 'Playwright'],
    gradient: ['#4c1d95', '#0c4a6e'],
    iconChar: '🧪',
  },
  {
    type: 'Full-Stack',
    title: 'SaaS Application Platform',
    desc: 'End-to-end SaaS product features built with NestJS backend and React frontend. Includes REST API design, business logic implementation, reusable UI components, and automated deployment pipelines.',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker', 'Azure'],
    gradient: ['#1e1b4b', '#083344'],
    iconChar: '🚀',
  },
  {
    type: 'Backend',
    title: 'REST API & Microservices',
    desc: 'Designed and built high-performance REST APIs and backend services to handle complex business logic. Achieved a 20% improvement in system performance through targeted optimizations and efficient data modeling.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST API', 'Docker'],
    gradient: ['#14532d', '#052e16'],
    iconChar: '⚙️',
  },
];

const ProjectImagePlaceholder = ({ gradient, icon, title }: {
  gradient: [string, string];
  icon: string;
  title: string;
}) => (
  <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id={`g-${title.slice(0, 8)}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={gradient[0]} />
        <stop offset="100%" stopColor={gradient[1]} />
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill={`url(#g-${title.slice(0, 8)})`} />
    {[0,1,2,3].map(i => (
      <line key={`h${i}`} x1="0" y1={i*45} x2="400" y2={i*45} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    ))}
    {[0,1,2,3,4,5,6,7,8].map(i => (
      <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    ))}
    <circle cx="200" cy="90" r="55" fill="rgba(255,255,255,0.04)" />
    <circle cx="200" cy="90" r="38" fill="rgba(255,255,255,0.04)" />
    <text x="200" y="105" textAnchor="middle" fontSize="36">{icon}</text>
  </svg>
);

export default function Projects() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects showcasing my full-stack capabilities — from thesis research
            to production SaaS features.
          </p>
        </Reveal>

        <div ref={ref} className={`projects-grid stagger${inView ? ' in-view' : ''}`}>
          {projects.map(p => (
            <div key={p.title} className="card project-card">
              <div className="project-image">
                <ProjectImagePlaceholder gradient={p.gradient} icon={p.iconChar} title={p.title} />
              </div>
              <div className="project-body">
                <p className="project-type">{p.type}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link"><FiGithub /> Source</a>
                  <a href="#" className="project-link"><FiExternalLink /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
