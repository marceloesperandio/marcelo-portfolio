import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import {
  Bot,
  Briefcase,
  CheckCircle,
  Cloud,
  Code,
  Code2,
  Database,
  Mail,
  MapPin,
  Moon,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Workflow
} from 'lucide-react'
import './styles.css'

const profile = {
  name: 'Marcelo Esperândio Lúcio',
  title: 'Senior QA Engineer | SDET | Test Automation Engineer',
  location: 'Barueri - SP',
  email: 'marceloesnd@outlook.com',
  phone: '+55 13 99142-9394',
  whatsapp: '5513991429394',
  linkedin: 'https://linkedin.com/in/marceloesperandio',
  linkedinLabel: 'linkedin.com/in/marceloesperandio',
  github: 'https://github.com/marceloesperandio',
  githubLabel: 'github.com/marceloesperandio'
}

const appVersion = '1.0.0'

const content = {
  PT: {
    themeMode: darkMode => `Modo ${darkMode ? 'noturno' : 'claro'}`,
    themeAria: 'Alternar tema',
    nav: ['Início', 'Sobre mim', 'Projetos', 'Tecnologias', 'Experiência', 'Certificações', 'Formação', 'Timeline', 'Contato'],
    heroText: 'QA Engineer e SDET com mais de 12 anos de experiência em qualidade de software, automação de testes e engenharia de qualidade em grandes empresas dos segmentos financeiro, telecomunicações, mídia e tecnologia.',
    talkButton: 'Falar comigo',
    profileTitle: 'Quality Engineering',
    profileSubtitle: 'Backend, frontend, mobile, APIs, CI/CD, cloud e Shift Left.',
    stats: ['Anos em qualidade de software', 'Empresas de grande porte', 'Tecnologias no stack', 'Frontend, backend, mobile e APIs'],
    aboutTitle: 'SOBRE MIM',
    aboutText: 'Especialista em testes backend, frontend e APIs, com forte atuação em CI/CD, cloud e estratégias de automação escalável. Trabalho próximo de times de desenvolvimento, produto e DevOps para antecipar riscos, fortalecer observabilidade e sustentar uma cultura de qualidade desde o início do ciclo.',
    aboutList: ['Agile Testing e Shift Left', 'Automação com Java, Python e JavaScript', 'AWS, Kubernetes e pipelines de entrega'],
    technologiesTitle: 'TECNOLOGIAS',
    projectTitle: 'PROJETOS EM DESTAQUE',
    projectLink: 'Conversar sobre projetos',
    experienceTitle: 'EXPERIÊNCIA PROFISSIONAL',
    certificationsTitle: 'CERTIFICAÇÕES',
    educationTitle: 'FORMAÇÃO & IDIOMAS',
    contactTitle: 'VAMOS CONVERSAR?',
    copyright: '©Veltrix 2026 Todos os direitos reservados.',
    skillsCategories: [
      { category: 'Linguagens', icon: Code2, items: ['Java', 'Python', 'JavaScript'] },
      { category: 'Automação', icon: CheckCircle, items: ['Selenium', 'Playwright', 'Cypress', 'RestAssured', 'PyTest', 'Appium'] },
      { category: 'Cloud & CI/CD', icon: Cloud, items: ['AWS', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'Kubernetes'] },
      { category: 'Dados & APIs', icon: Database, items: ['Oracle', 'MySQL', 'SQL', 'NoSQL', 'DynamoDB', 'Contract Testing'] },
      { category: 'Qualidade', icon: ShieldCheck, items: ['BDD', 'Cucumber', 'Gherkin', 'JMeter', 'Shift Left', 'Quality Engineering'] },
      { category: 'Ferramentas', icon: Sparkles, items: ['Postman', 'Insomnia', 'Jira', 'Confluence', 'Zephyr', 'SonarQube'] },
      { category: 'IA', icon: Bot, featured: true, items: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Gemini', 'Codex', 'GitHub Copilot'] }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Ago/2025 - Mai/2026', location: 'Remoto', highlights: ['Qualidade ponta a ponta em sistemas críticos Oracle e Salesforce.', 'Automação backend e frontend, testes funcionais, integrados, exploratórios e de contrato.', 'Colaboração com desenvolvimento e produto para mitigação de riscos em entrega contínua.'] },
      { company: 'Sinqia', role: 'SDET', year: 'Nov/2023 - Mai/2025', location: 'Brasil', highlights: ['Estratégias de testes automatizados e não funcionais.', 'Pipelines CI/CD com Azure DevOps e automação de APIs.', 'Soluções internas com Spring Boot e indicadores de qualidade com SonarQube.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / QA Lead', year: 'Out/2019 - Out/2023', location: 'São Paulo - SP', highlights: ['Automação frontend e backend com Java, Selenium e RestAssured.', 'Projetos de migração cloud, Kubernetes e pipelines com Jenkins.', 'Atuação como Chapter QA e liderança técnica em iniciativas de qualidade.'] },
      { company: 'Grupo Abril', role: 'Analista de Testes', year: 'Jan/2013 - Out/2019', location: 'São Paulo - SP', highlights: ['Automação de testes regressivos e funcionais.', 'Planejamento de testes, análise de logs e cenários BDD.', 'Acompanhamento de homologações, migrações e monitoramento de produção.'] },
      { company: 'NET / Claro', role: 'Analista de Testes', year: 'Jul/2008 - Dez/2012', location: 'São Paulo - SP', highlights: ['Planejamento e execução de testes funcionais e integrados.', 'Validação de sistemas móveis e projetos de migração.', 'Criação de cenários de testes regressivos e progressivos.'] }
    ],
    certifications: [
      { name: 'QA Practitioner', level: 'Quality Engineering' },
      { name: 'Automação de Testes com Selenium WebDriver', level: 'Test Automation' },
      { name: 'Automação de APIs com RestAssured', level: 'Backend Testing' },
      { name: 'BDD com Cucumber', level: 'Gherkin / Behavior Driven Development' },
      { name: 'Gestão e Desenvolvimento Agile para QA', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Análise e Desenvolvimento de Sistemas', place: 'Uninove', status: 'Em andamento' },
      { title: 'Redes de Computadores', place: 'Uninove', status: 'Concluído' },
      { title: 'Português', place: 'Nativo', status: 'Idioma' },
      { title: 'Inglês', place: 'Leitura técnica', status: 'Em evolução para comunicação profissional' }
    ],
    projects: [
      { title: 'Frameworks de Automação Escaláveis', description: 'Estruturação e manutenção de suites frontend, backend e mobile com foco em regressão confiável, evidências e execução contínua.', tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'], image: '/images/project-automation-frameworks-veltrix.webp' },
      { title: 'Pipelines de Qualidade', description: 'Integração de automações em CI/CD com gates de qualidade, monitoramento de indicadores e feedback rápido para times ágeis.', tags: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'SonarQube'], image: '/images/project-quality-pipelines-veltrix.webp' },
      { title: 'Qualidade em Sistemas Críticos', description: 'Atuação em produtos financeiros, telecom, mídia e tecnologia cobrindo APIs, contratos, ambientes cloud e observabilidade.', tags: ['AWS', 'Oracle', 'Salesforce', 'JMeter'], image: '/images/project-critical-systems-veltrix.webp' }
    ],
    timeline: [
      ['2008 - 2012', 'Base em Testes', 'Testes funcionais, integrados, mobile e cenários regressivos na NET / Claro.'],
      ['2013 - 2019', 'Automação & BDD', 'Automação regressiva, cenários Gherkin e homologações no Grupo Abril.'],
      ['2019 - 2023', 'QA Lead', 'Automação Java, APIs, Jenkins, cloud e liderança técnica no Banco PAN.'],
      ['2023 - 2025', 'SDET', 'Estratégias automatizadas, Azure DevOps, Spring Boot e SonarQube na Sinqia.'],
      ['2025 - 2026', 'Quality Engineer', 'Oracle, Salesforce, contract testing e qualidade ponta a ponta na VTAL.']
    ]
  },
  EN: {
    themeMode: darkMode => `${darkMode ? 'Dark' : 'Light'} mode`,
    themeAria: 'Toggle theme',
    nav: ['Home', 'About me', 'Projects', 'Technologies', 'Experience', 'Certifications', 'Education', 'Timeline', 'Contact'],
    heroText: 'QA Engineer and SDET with over 12 years of experience in software quality, test automation, and quality engineering for major companies in financial services, telecommunications, media, and technology.',
    talkButton: 'Contact me',
    profileTitle: 'Quality Engineering',
    profileSubtitle: 'Backend, frontend, mobile, APIs, CI/CD, cloud, and Shift Left.',
    stats: ['Years in software quality', 'Large companies', 'Technologies in the stack', 'Frontend, backend, mobile, and APIs'],
    aboutTitle: 'ABOUT ME',
    aboutText: 'Specialist in backend, frontend, and API testing, with strong experience in CI/CD, cloud, and scalable automation strategies. I work closely with development, product, and DevOps teams to anticipate risks, strengthen observability, and sustain a quality culture from the beginning of the cycle.',
    aboutList: ['Agile Testing and Shift Left', 'Automation with Java, Python, and JavaScript', 'AWS, Kubernetes, and delivery pipelines'],
    technologiesTitle: 'TECHNOLOGIES',
    projectTitle: 'FEATURED PROJECTS',
    projectLink: 'Discuss projects',
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    certificationsTitle: 'CERTIFICATIONS',
    educationTitle: 'EDUCATION & LANGUAGES',
    contactTitle: 'LET’S TALK?',
    copyright: '©Veltrix 2026 All rights reserved.',
    skillsCategories: [
      { category: 'Languages', icon: Code2, items: ['Java', 'Python', 'JavaScript'] },
      { category: 'Automation', icon: CheckCircle, items: ['Selenium', 'Playwright', 'Cypress', 'RestAssured', 'PyTest', 'Appium'] },
      { category: 'Cloud & CI/CD', icon: Cloud, items: ['AWS', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'Kubernetes'] },
      { category: 'Data & APIs', icon: Database, items: ['Oracle', 'MySQL', 'SQL', 'NoSQL', 'DynamoDB', 'Contract Testing'] },
      { category: 'Quality', icon: ShieldCheck, items: ['BDD', 'Cucumber', 'Gherkin', 'JMeter', 'Shift Left', 'Quality Engineering'] },
      { category: 'Tools', icon: Sparkles, items: ['Postman', 'Insomnia', 'Jira', 'Confluence', 'Zephyr', 'SonarQube'] },
      { category: 'AI', icon: Bot, featured: true, items: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Gemini', 'Codex', 'GitHub Copilot'] }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Aug/2025 - May/2026', location: 'Remote', highlights: ['End-to-end quality for critical Oracle and Salesforce systems.', 'Backend and frontend automation, functional, integrated, exploratory, and contract testing.', 'Collaboration with development and product teams to reduce delivery risks in continuous delivery.'] },
      { company: 'Sinqia', role: 'SDET', year: 'Nov/2023 - May/2025', location: 'Brazil', highlights: ['Automated and non-functional testing strategies.', 'CI/CD pipelines with Azure DevOps and API automation.', 'Internal solutions with Spring Boot and quality indicators with SonarQube.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / QA Lead', year: 'Oct/2019 - Oct/2023', location: 'São Paulo - SP', highlights: ['Frontend and backend automation with Java, Selenium, and RestAssured.', 'Cloud migration projects, Kubernetes, and Jenkins pipelines.', 'Technical leadership as Chapter QA in quality engineering initiatives.'] },
      { company: 'Grupo Abril', role: 'Test Analyst', year: 'Jan/2013 - Oct/2019', location: 'São Paulo - SP', highlights: ['Regression and functional test automation.', 'Test planning, log analysis, and BDD scenarios.', 'Support for UAT, migrations, and production monitoring.'] },
      { company: 'NET / Claro', role: 'Test Analyst', year: 'Jul/2008 - Dec/2012', location: 'São Paulo - SP', highlights: ['Planning and execution of functional and integrated tests.', 'Validation of mobile systems and migration projects.', 'Creation of regression and progressive test scenarios.'] }
    ],
    certifications: [
      { name: 'QA Practitioner', level: 'Quality Engineering' },
      { name: 'Test Automation with Selenium WebDriver', level: 'Test Automation' },
      { name: 'API Automation with RestAssured', level: 'Backend Testing' },
      { name: 'BDD with Cucumber', level: 'Gherkin / Behavior Driven Development' },
      { name: 'Agile Management and Development for QA', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Systems Analysis and Development', place: 'Uninove', status: 'In progress' },
      { title: 'Computer Networks', place: 'Uninove', status: 'Completed' },
      { title: 'Portuguese', place: 'Native', status: 'Language' },
      { title: 'English', place: 'Technical reading', status: 'Evolving toward professional communication' }
    ],
    projects: [
      { title: 'Scalable Automation Frameworks', description: 'Design and maintenance of frontend, backend, and mobile suites focused on reliable regression, evidence, and continuous execution.', tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'], image: '/images/project-automation-frameworks-veltrix.webp' },
      { title: 'Quality Pipelines', description: 'Integration of automation into CI/CD with quality gates, metrics monitoring, and fast feedback for agile teams.', tags: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'SonarQube'], image: '/images/project-quality-pipelines-veltrix.webp' },
      { title: 'Quality for Critical Systems', description: 'Work across financial, telecom, media, and technology products covering APIs, contracts, cloud environments, and observability.', tags: ['AWS', 'Oracle', 'Salesforce', 'JMeter'], image: '/images/project-critical-systems-veltrix.webp' }
    ],
    timeline: [
      ['2008 - 2012', 'Testing Foundation', 'Functional, integrated, mobile, and regression scenarios at NET / Claro.'],
      ['2013 - 2019', 'Automation & BDD', 'Regression automation, Gherkin scenarios, and UAT support at Grupo Abril.'],
      ['2019 - 2023', 'QA Lead', 'Java automation, APIs, Jenkins, cloud, and technical leadership at Banco PAN.'],
      ['2023 - 2025', 'SDET', 'Automated strategies, Azure DevOps, Spring Boot, and SonarQube at Sinqia.'],
      ['2025 - 2026', 'Quality Engineer', 'Oracle, Salesforce, contract testing, and end-to-end quality at VTAL.']
    ]
  }
}

const skillsCategories = [
  {
    category: 'Linguagens',
    icon: Code2,
    items: ['Java', 'Python', 'JavaScript']
  },
  {
    category: 'Automação',
    icon: CheckCircle,
    items: ['Selenium', 'Playwright', 'Cypress', 'RestAssured', 'PyTest', 'Appium']
  },
  {
    category: 'Cloud & CI/CD',
    icon: Cloud,
    items: ['AWS', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'Kubernetes']
  },
  {
    category: 'Dados & APIs',
    icon: Database,
    items: ['Oracle', 'MySQL', 'SQL', 'NoSQL', 'DynamoDB', 'Contract Testing']
  },
  {
    category: 'Qualidade',
    icon: ShieldCheck,
    items: ['BDD', 'Cucumber', 'Gherkin', 'JMeter', 'Shift Left', 'Quality Engineering']
  },
  {
    category: 'Ferramentas',
    icon: Sparkles,
    items: ['Postman', 'Insomnia', 'Jira', 'Confluence', 'Zephyr', 'SonarQube']
  }
]

const experiences = [
  {
    company: 'VTAL',
    role: 'Quality Engineer',
    year: 'Ago/2025 - Mai/2026',
    location: 'Remoto',
    highlights: [
      'Qualidade ponta a ponta em sistemas críticos Oracle e Salesforce.',
      'Automação backend e frontend, testes funcionais, integrados, exploratórios e de contrato.',
      'Colaboração com desenvolvimento e produto para mitigação de riscos em entrega contínua.'
    ]
  },
  {
    company: 'Sinqia',
    role: 'SDET',
    year: 'Nov/2023 - Mai/2025',
    location: 'Brasil',
    highlights: [
      'Estratégias de testes automatizados e não funcionais.',
      'Pipelines CI/CD com Azure DevOps e automação de APIs.',
      'Soluções internas com Spring Boot e indicadores de qualidade com SonarQube.'
    ]
  },
  {
    company: 'Banco PAN',
    role: 'Quality Engineer / QA Lead',
    year: 'Out/2019 - Out/2023',
    location: 'São Paulo - SP',
    highlights: [
      'Automação frontend e backend com Java, Selenium e RestAssured.',
      'Projetos de migração cloud, Kubernetes e pipelines com Jenkins.',
      'Atuação como Chapter QA e liderança técnica em iniciativas de qualidade.'
    ]
  },
  {
    company: 'Grupo Abril',
    role: 'Analista de Testes',
    year: 'Jan/2013 - Out/2019',
    location: 'São Paulo - SP',
    highlights: [
      'Automação de testes regressivos e funcionais.',
      'Planejamento de testes, análise de logs e cenários BDD.',
      'Acompanhamento de homologações, migrações e monitoramento de produção.'
    ]
  },
  {
    company: 'NET / Claro',
    role: 'Analista de Testes',
    year: 'Jul/2008 - Dez/2012',
    location: 'São Paulo - SP',
    highlights: [
      'Planejamento e execução de testes funcionais e integrados.',
      'Validação de sistemas móveis e projetos de migração.',
      'Criação de cenários de testes regressivos e progressivos.'
    ]
  }
]

const certifications = [
  { name: 'QA Practitioner', level: 'Quality Engineering' },
  { name: 'Automação de Testes com Selenium WebDriver', level: 'Test Automation' },
  { name: 'Automação de APIs com RestAssured', level: 'Backend Testing' },
  { name: 'BDD com Cucumber', level: 'Gherkin / Behavior Driven Development' },
  { name: 'Gestão e Desenvolvimento Agile para QA', level: 'Agile Testing' }
]

const education = [
  { title: 'Análise e Desenvolvimento de Sistemas', place: 'Uninove', status: 'Em andamento' },
  { title: 'Redes de Computadores', place: 'Uninove', status: 'Concluído' },
  { title: 'Português', place: 'Nativo', status: 'Idioma' },
  { title: 'Inglês', place: 'Leitura técnica', status: 'Em evolução para comunicação profissional' }
]

const projects = [
  {
    title: 'Frameworks de Automação Escaláveis',
    description: 'Estruturação e manutenção de suites frontend, backend e mobile com foco em regressão confiável, evidências e execução contínua.',
    tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'],
    image: '/images/project-automation-frameworks-veltrix.webp'
  },
  {
    title: 'Pipelines de Qualidade',
    description: 'Integração de automações em CI/CD com gates de qualidade, monitoramento de indicadores e feedback rápido para times ágeis.',
    tags: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'SonarQube'],
    image: '/images/project-quality-pipelines-veltrix.webp'
  },
  {
    title: 'Qualidade em Sistemas Críticos',
    description: 'Atuação em produtos financeiros, telecom, mídia e tecnologia cobrindo APIs, contratos, ambientes cloud e observabilidade.',
    tags: ['AWS', 'Oracle', 'Salesforce', 'JMeter'],
    image: '/images/project-critical-systems-veltrix.webp'
  }
]

const timeline = [
  ['2008 - 2012', 'Base em Testes', 'Testes funcionais, integrados, mobile e cenários regressivos na NET / Claro.'],
  ['2013 - 2019', 'Automação & BDD', 'Automação regressiva, cenários Gherkin e homologações no Grupo Abril.'],
  ['2019 - 2023', 'QA Lead', 'Automação Java, APIs, Jenkins, cloud e liderança técnica no Banco PAN.'],
  ['2023 - 2025', 'SDET', 'Estratégias automatizadas, Azure DevOps, Spring Boot e SonarQube na Sinqia.'],
  ['2025 - 2026', 'Quality Engineer', 'Oracle, Salesforce, contract testing e qualidade ponta a ponta na VTAL.']
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('PT')
  const t = content[language]
  const navTargets = ['home', 'sobre', 'projetos', 'tecnologias', 'experiencia', 'certificacoes', 'formacao', 'timeline', 'contato']

  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>
      <aside className="sidebar">
        <div className="logo">
          <img src="/images/veltrix-symbol.png" alt="Veltrix" />
        </div>
        <nav>
          {t.nav.map((item, index) => (
            <a key={item} href={`#${navTargets[index]}`}>{item}</a>
          ))}
        </nav>
        <div className="app-meta">
          <span>v{appVersion}</span>
          <p>{t.copyright}</p>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div className="topbar-right">
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={t.themeAria}>
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{t.themeMode(darkMode)}</span>
            </button>
            <div className="lang-selector">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Selecionar idioma">
                <option value="PT">PT-BR</option>
                <option value="EN">US-EN</option>
              </select>
            </div>
          </div>
        </header>

        <section className="hero" id="home">
          <div>
            <p className="eyebrow">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="heroText">{t.heroText}</p>
            <div className="actions">
              <a className="button" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                <FaWhatsapp size={18}/> {t.talkButton}
              </a>
              <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn size={18}/> LinkedIn
              </a>
              <a className="button ghost" href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub size={18}/> GitHub
              </a>
            </div>
          </div>
          <div className="profileCard">
            <div className="avatar">
              <img src="/images/profile-marcelo.jpeg" alt={profile.name} />
            </div>
            <strong>{t.profileTitle}</strong>
            <span>{t.profileSubtitle}</span>
          </div>
        </section>

        <section className="stats">
          <article><Briefcase size={20}/><strong>12+</strong><span>{t.stats[0]}</span></article>
          <article><Rocket size={20}/><strong>5</strong><span>{t.stats[1]}</span></article>
          <article><Code size={20}/><strong>20+</strong><span>{t.stats[2]}</span></article>
          <article><ShieldCheck size={20}/><strong>360°</strong><span>{t.stats[3]}</span></article>
        </section>

        <section className="section about" id="sobre">
          <div>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>
          <div className="about-list">
            <span><Workflow size={16}/> {t.aboutList[0]}</span>
            <span><Terminal size={16}/> {t.aboutList[1]}</span>
            <span><Cloud size={16}/> {t.aboutList[2]}</span>
          </div>
        </section>

        <section className="section" id="tecnologias">
          <h2>{t.technologiesTitle}</h2>
          <div className="skills-grid">
            {t.skillsCategories.map(({ category, icon: Icon, items, featured }) => (
              <article key={category} className={`skill-category${featured ? ' featured' : ''}`}>
                <div className="skill-header">
                  <Icon size={20} />
                  <h3>{category}</h3>
                </div>
                <div className="skill-items">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="sectionTitle">
            <h2>{t.projectTitle}</h2>
            <a href="#contato">{t.projectLink}</a>
          </div>
          <div className="projects">
            {t.projects.map(project => (
              <article className="project" key={project.title}>
                <div className="bubbleDesign" aria-hidden="true">
                  <span></span>
                  <span></span>
                </div>
                <div className="mockImage">
                  <img src={project.image} alt="" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <h2>{t.experienceTitle}</h2>
          <div className="experiences">
            {t.experiences.map(exp => (
              <article key={`${exp.company}-${exp.year}`} className="experience">
                <div className="experience-head">
                  <div>
                    <div className="exp-title"><span>{exp.company}</span> - {exp.role}</div>
                  </div>
                  <div className="exp-meta">{exp.year} • {exp.location}</div>
                </div>
                <ul>
                  {exp.highlights.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid three" id="certificacoes">
          <article className="card">
            <h2>{t.certificationsTitle}</h2>
            <div className="certs">
              {t.certifications.map(cert => (
                <div key={cert.name} className="cert-item">
                  <strong>{cert.name}</strong>
                  <span>{cert.level}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card" id="formacao">
            <h2>{t.educationTitle}</h2>
            <div className="articles">
              {t.education.map(item => (
                <div key={item.title} className="article-item">
                  <p>{item.title}</p>
                  <small>{item.place} • {item.status}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="card" id="contato">
            <h2>{t.contactTitle}</h2>
            <div className="contact-info">
              <a href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16}/> {profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={16}/> {profile.linkedinLabel}</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={16}/> {profile.githubLabel}</a>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp size={16}/> WhatsApp</a>
              <span className="location"><MapPin size={16}/> {profile.location}</span>
            </div>
          </article>
        </section>

        <section className="timeline-section" id="timeline">
          <div className="timeline">
            {t.timeline.map(([year, title, text]) => (
              <article key={title}>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
