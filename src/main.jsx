import React, { useEffect, useState } from 'react'
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
  Download,
  GraduationCap,
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

const imagePath = file => `${import.meta.env.BASE_URL}images/${file}`

const profile = {
  name: 'Marcelo Esperândio Lúcio',
  title: 'Senior QA Engineer | Test Automation | AI Quality Engineering',
  location: 'Barueri - SP, Brasil',
  email: 'marcelo.esperandio@outlook.com',
  phone: '+55 13 99142-9394',
  whatsapp: '5513991429394',
  linkedin: 'https://linkedin.com/in/marceloesperandio',
  linkedinLabel: 'linkedin.com/in/marceloesperandio',
  github: 'https://github.com/marceloesperandio',
  githubLabel: 'github.com/marceloesperandio',
  resume: `${import.meta.env.BASE_URL}curriculo-marcelo-esperandio.pdf`
}

const appVersion = '1.8.3'

const content = {
  PT: {
    themeMode: darkMode => `Modo ${darkMode ? 'noturno' : 'claro'}`,
    themeAria: 'Alternar tema',
    languageAria: 'Selecionar idioma',
    nav: ['Início', 'Sobre mim', 'Projetos', 'Tecnologias', 'Experiência', 'Certificações', 'Formação', 'Timeline', 'Contato'],
    heroText: 'Senior QA Engineer com 17 anos de experiência em qualidade de software, automação de testes e construção de processos de qualidade para produtos dos setores financeiro, telecomunicações, mídia e tecnologia.',
    talkButton: 'Falar comigo',
    resumeButton: 'Baixar currículo',
    profileTitle: 'Quality Engineering',
    profileSubtitle: 'Backend, frontend, mobile, APIs, CI/CD e AI Quality Engineering em evolução.',
    stats: ['Anos em qualidade de software', 'Empresas de grande porte', 'Tecnologias no stack', 'Frontend, backend, mobile e APIs'],
    aboutTitle: 'SOBRE MIM',
    aboutText: 'Profissional apaixonado por tecnologia, aprendizado e compartilhamento de conhecimento. Especialista em Qualidade de Software, atuo na criação e implementação de processos de qualidade em projetos ágeis, cobrindo testes funcionais e não funcionais. Meu foco é integrar QA desde as etapas iniciais do desenvolvimento até a entrega em produção, trabalhando em parceria com desenvolvimento, produto e stakeholders para prevenir falhas e sustentar entregas confiáveis.',
    aboutList: ['Qualidade ponta a ponta e prevenção de defeitos', 'Automação com Java, JavaScript e Python', 'APIs, contract testing e entrega contínua'],
    technologiesTitle: 'TECNOLOGIAS',
    projectTitle: 'PROJETOS EM DESTAQUE',
    experienceTitle: 'EXPERIÊNCIA PROFISSIONAL',
    certificationsTitle: 'CERTIFICAÇÕES',
    educationTitle: 'FORMAÇÃO ACADÊMICA',
    contactTitle: 'VAMOS CONVERSAR?',
    copyright: '©Veltrix 2026 Todos os direitos reservados.',
    skillsCategories: [
      { category: 'Linguagens', icon: Code2, items: ['Java', 'Python', 'JavaScript'] },
      { category: 'Automação', icon: CheckCircle, items: ['Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium', 'JUnit 5'] },
      { category: 'Cloud & CI/CD', icon: Cloud, items: ['Azure Pipelines', 'Jenkins', 'Kubernetes', 'Elastic Beanstalk', 'CloudWatch', 'SonarQube'] },
      { category: 'Dados & APIs', icon: Database, items: ['Microsoft SQL Server', 'Oracle', 'MySQL', 'NoSQL', 'Document DB', 'Athena'] },
      { category: 'Qualidade', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'Gherkin', 'Testes funcionais', 'Testes não funcionais'] },
      { category: 'Plataformas & Ferramentas', icon: Sparkles, items: ['Spring Boot', 'Salesforce FSL', 'Oracle OSM/SOM', 'SoapUI', 'TestLink', 'Bugzilla'] },
      {
        category: 'IA aplicada à Qualidade',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: [
          'Geração e revisão de cenários',
          'Análise de logs e falhas',
          'Criação de massas de teste',
          'Apoio na automação',
          'Revisão de código',
          'Testes e avaliação de aplicações com IA'
        ]
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Ago/2025 - Mai/2026', location: 'São Paulo - SP', highlights: ['Qualidade ponta a ponta em Salesforce FSL e Oracle OSM/SOM.', 'Automação backend, testes funcionais, integrados, exploratórios e de APIs.', 'Testes de contrato e prevenção de falhas em parceria com desenvolvimento e produto.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - Mai/2025', location: 'São Paulo - SP', highlights: ['Automação de sistemas backend e estratégias de testes funcionais e não funcionais.', 'Pipelines CI/CD com Azure Pipelines e monitoramento de qualidade com SonarQube.', 'APIs REST com Spring Boot e testes de contrato entre serviços distribuídos.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / Chapter QA', year: 'Out/2019 - Out/2023', location: 'São Paulo - SP', highlights: ['Automação com Java, Selenium WebDriver, RestAssured, JUnit 5 e Cucumber.', 'Migração para Kubernetes, análise com CloudWatch e pipelines de entrega com Jenkins.', 'Liderança técnica de QA e definição de estratégias de testes ponta a ponta.'] },
      { company: 'Grupo Abril', role: 'Analista de Testes Sênior, Pleno e Júnior', year: 'Jan/2013 - Out/2019', location: 'São Paulo - SP', highlights: ['Automação de testes com Java, Selenium WebDriver e JUnit.', 'Planejamento de cenários BDD/Gherkin e execução de testes funcionais e não funcionais.', 'Homologação com usuários e acompanhamento de mudanças em produção.'] },
      { company: 'NET / Claro', role: 'Analista de Testes Júnior', year: 'Jul/2009 - Dez/2012', location: 'São Paulo - SP', highlights: ['Planejamento e execução de testes funcionais, integrados e não funcionais.', 'Validação de aplicações móveis e projetos de migração em telecomunicações.', 'Gestão de testes com Oracle SQL Developer, SoapUI, TestLink e Bugzilla.'] }
    ],
    certifications: [
      { name: 'Gerenciamento de Testes: Plano de Testes e Gestão de Bugs', level: 'Test Management' },
      { name: 'BDD e Java: Behavior Driven Development com Cucumber', level: 'Cucumber / Java' },
      { name: 'Automação de Testes com Selenium WebDriver em Java', level: 'Test Automation' },
      { name: 'Gestão e Desenvolvimento de Projetos Agile na Visão do QA', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Análise e Desenvolvimento de Sistemas', place: 'UNINOVE', period: 'Jul/2023 - Dez/2026', status: 'Em andamento' },
      { title: 'Sistemas e Redes de Computador', place: 'UNINOVE', period: 'Jul/2007 - Dez/2009', status: 'Concluído' }
    ],
    projects: [
      { title: 'Frameworks de Automação Escaláveis', description: 'Desenvolvimento e evolução de automações para frontend, backend e mobile, ampliando cobertura, estabilidade e confiabilidade das entregas.', tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'], image: imagePath('project-automation-frameworks-veltrix.webp') },
      { title: 'Pipelines de Qualidade', description: 'Integração de testes automatizados ao fluxo de entrega contínua, com acompanhamento de métricas, vulnerabilidades e débitos técnicos.', tags: ['Azure Pipelines', 'Jenkins', 'SonarQube', 'Kubernetes'], image: imagePath('project-quality-pipelines-veltrix.webp') },
      { title: 'Qualidade em Sistemas Críticos', description: 'Qualidade ponta a ponta em serviços distribuídos e integrações, incluindo Salesforce FSL, Oracle OSM/SOM, APIs e testes de contrato.', tags: ['Salesforce FSL', 'Oracle OSM/SOM', 'Contract Testing', 'APIs REST'], image: imagePath('project-critical-systems-veltrix.webp') }
    ],
    timeline: [
      ['2009 - 2012', 'Base em Testes', 'Testes funcionais, integrados, mobile e cenários regressivos na NET / Claro.'],
      ['2013 - 2019', 'Automação & BDD', 'Automação regressiva, cenários Gherkin e homologações no Grupo Abril.'],
      ['2019 - 2023', 'QA Lead', 'Automação Java, APIs, Jenkins, cloud e liderança técnica no Banco PAN.'],
      ['2023 - 2025', 'SDET', 'Estratégias automatizadas, Azure DevOps, Spring Boot e SonarQube na Sinqia.'],
      ['2025 - 2026', 'Quality Engineer', 'Oracle, Salesforce, contract testing e qualidade ponta a ponta na VTAL.']
    ]
  },
  EN: {
    themeMode: darkMode => `${darkMode ? 'Dark' : 'Light'} mode`,
    themeAria: 'Toggle theme',
    languageAria: 'Select language',
    nav: ['Home', 'About me', 'Projects', 'Technologies', 'Experience', 'Certifications', 'Education', 'Timeline', 'Contact'],
    heroText: 'Senior QA Engineer with 17 years of experience in software quality, test automation, and quality engineering for major companies in financial services, telecommunications, media, and technology.',
    talkButton: 'Contact me',
    resumeButton: 'Download résumé (PT-BR)',
    profileTitle: 'Quality Engineering',
    profileSubtitle: 'Backend, frontend, mobile, APIs, CI/CD, and AI Quality Engineering in progress.',
    stats: ['Years in software quality', 'Large companies', 'Technologies in the stack', 'Frontend, backend, mobile, and APIs'],
    aboutTitle: 'ABOUT ME',
    aboutText: 'Technology enthusiast driven by continuous learning and knowledge sharing. As a Software Quality specialist, I design and implement quality processes for agile projects, covering functional and non-functional testing. My focus is to integrate QA from the earliest development stages through production delivery, working with engineering, product, and stakeholders to prevent defects and sustain reliable releases.',
    aboutList: ['End-to-end quality and defect prevention', 'Automation with Java, JavaScript, and Python', 'APIs, contract testing, and continuous delivery'],
    technologiesTitle: 'TECHNOLOGIES',
    projectTitle: 'FEATURED PROJECTS',
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    certificationsTitle: 'CERTIFICATIONS',
    educationTitle: 'EDUCATION',
    contactTitle: 'LET’S TALK?',
    copyright: '©Veltrix 2026 All rights reserved.',
    skillsCategories: [
      { category: 'Languages', icon: Code2, items: ['Java', 'Python', 'JavaScript'] },
      { category: 'Automation', icon: CheckCircle, items: ['Selenium', 'Playwright', 'Cypress', 'RestAssured', 'Appium', 'JUnit 5'] },
      { category: 'Cloud & CI/CD', icon: Cloud, items: ['Azure Pipelines', 'Jenkins', 'Kubernetes', 'Elastic Beanstalk', 'CloudWatch', 'SonarQube'] },
      { category: 'Data & APIs', icon: Database, items: ['Microsoft SQL Server', 'Oracle', 'MySQL', 'NoSQL', 'Document DB', 'Athena'] },
      { category: 'Quality', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'Gherkin', 'Functional Testing', 'Non-functional Testing'] },
      { category: 'Platforms & Tools', icon: Sparkles, items: ['Spring Boot', 'Salesforce FSL', 'Oracle OSM/SOM', 'SoapUI', 'TestLink', 'Bugzilla'] },
      {
        category: 'AI applied to Quality Engineering',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: ['Test scenario generation and review', 'Log and failure analysis', 'Test data creation', 'Automation support', 'Code review', 'AI application testing and evaluation']
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Aug/2025 - May/2026', location: 'São Paulo - SP', highlights: ['End-to-end quality for Salesforce FSL and Oracle OSM/SOM.', 'Backend automation and functional, integration, exploratory, and API testing.', 'Contract testing and defect prevention in partnership with engineering and product teams.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - May/2025', location: 'São Paulo - SP', highlights: ['Backend automation and functional and non-functional testing strategies.', 'CI/CD pipelines with Azure Pipelines and quality monitoring with SonarQube.', 'REST APIs with Spring Boot and contract testing across distributed services.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / QA Chapter Lead', year: 'Oct/2019 - Oct/2023', location: 'São Paulo - SP', highlights: ['Automation with Java, Selenium WebDriver, RestAssured, JUnit 5, and Cucumber.', 'Migration to Kubernetes, CloudWatch analysis, and delivery pipelines with Jenkins.', 'QA technical leadership and end-to-end testing strategy definition.'] },
      { company: 'Grupo Abril', role: 'Senior, Mid-level, and Junior Test Analyst', year: 'Jan/2013 - Oct/2019', location: 'São Paulo - SP', highlights: ['Test automation with Java, Selenium WebDriver, and JUnit.', 'BDD/Gherkin scenario planning and functional and non-functional testing.', 'User acceptance testing and production change monitoring.'] },
      { company: 'NET / Claro', role: 'Junior Test Analyst', year: 'Jul/2009 - Dec/2012', location: 'São Paulo - SP', highlights: ['Planning and execution of functional, integration, and non-functional tests.', 'Validation of mobile applications and telecommunications migration projects.', 'Test management with Oracle SQL Developer, SoapUI, TestLink, and Bugzilla.'] }
    ],
    certifications: [
      { name: 'Test Management: Test Planning and Bug Management', level: 'Test Management' },
      { name: 'BDD and Java: Behavior Driven Development with Cucumber', level: 'Cucumber / Java' },
      { name: 'Test Automation with Selenium WebDriver in Java', level: 'Test Automation' },
      { name: 'Agile Project Management and Development from a QA Perspective', level: 'Agile Testing' }
    ],
    education: [
      { title: 'Systems Analysis and Development', place: 'UNINOVE', period: 'Jul/2023 - Dec/2026', status: 'In progress' },
      { title: 'Computer Systems and Networks', place: 'UNINOVE', period: 'Jul/2007 - Dec/2009', status: 'Completed' }
    ],
    projects: [
      { title: 'Scalable Automation Frameworks', description: 'Development and evolution of frontend, backend, and mobile automation to improve coverage, stability, and release confidence.', tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'], image: imagePath('project-automation-frameworks-veltrix.webp') },
      { title: 'Quality Pipelines', description: 'Integration of automated tests into continuous delivery with quality metrics, vulnerability monitoring, and technical debt visibility.', tags: ['Azure Pipelines', 'Jenkins', 'SonarQube', 'Kubernetes'], image: imagePath('project-quality-pipelines-veltrix.webp') },
      { title: 'Quality for Critical Systems', description: 'End-to-end quality for distributed services and integrations, including Salesforce FSL, Oracle OSM/SOM, APIs, and contract testing.', tags: ['Salesforce FSL', 'Oracle OSM/SOM', 'Contract Testing', 'REST APIs'], image: imagePath('project-critical-systems-veltrix.webp') }
    ],
    timeline: [
      ['2009 - 2012', 'Testing Foundation', 'Functional, integrated, mobile, and regression scenarios at NET / Claro.'],
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
    year: 'Jul/2009 - Dez/2012',
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
  { title: 'Análise e Desenvolvimento de Sistemas', place: 'UNINOVE', period: 'Jul/2023 - Dez/2026', status: 'Em andamento' },
  { title: 'Sistemas e Redes de Computador', place: 'UNINOVE', period: 'Jul/2007 - Dez/2009', status: 'Concluído' }
]

const projects = [
  {
    title: 'Frameworks de Automação Escaláveis',
    description: 'Estruturação e manutenção de suites frontend, backend e mobile com foco em regressão confiável, evidências e execução contínua.',
    tags: ['Selenium', 'Playwright', 'RestAssured', 'Appium'],
    image: imagePath('project-automation-frameworks-veltrix.webp')
  },
  {
    title: 'Pipelines de Qualidade',
    description: 'Integração de automações em CI/CD com gates de qualidade, monitoramento de indicadores e feedback rápido para times ágeis.',
    tags: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'SonarQube'],
    image: imagePath('project-quality-pipelines-veltrix.webp')
  },
  {
    title: 'Qualidade em Sistemas Críticos',
    description: 'Atuação em produtos financeiros, telecom, mídia e tecnologia cobrindo APIs, contratos, ambientes cloud e observabilidade.',
    tags: ['AWS', 'Oracle', 'Salesforce', 'JMeter'],
    image: imagePath('project-critical-systems-veltrix.webp')
  }
]

const timeline = [
  ['2009 - 2012', 'Base em Testes', 'Testes funcionais, integrados, mobile e cenários regressivos na NET / Claro.'],
  ['2013 - 2019', 'Automação & BDD', 'Automação regressiva, cenários Gherkin e homologações no Grupo Abril.'],
  ['2019 - 2023', 'QA Lead', 'Automação Java, APIs, Jenkins, cloud e liderança técnica no Banco PAN.'],
  ['2023 - 2025', 'SDET', 'Estratégias automatizadas, Azure DevOps, Spring Boot e SonarQube na Sinqia.'],
  ['2025 - 2026', 'Quality Engineer', 'Oracle, Salesforce, contract testing e qualidade ponta a ponta na VTAL.']
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('PT')
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = language === 'PT' ? 'pt-BR' : 'en-US'
  }, [language])
  const navItems = [
    { label: t.nav[0], target: 'home' },
    { label: t.nav[1], target: 'sobre' },
    { label: t.nav[2], target: 'projetos' },
    { label: t.nav[3], target: 'tecnologias' },
    { label: t.nav[4], target: 'experiencia' },
    { label: t.nav[6], target: 'formacao' },
    { label: t.nav[5], target: 'certificacoes' },
    { label: t.nav[8], target: 'contato' }
  ]

  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>
      <aside className="sidebar">
        <div className="logo">
          <img src={imagePath('veltrix-symbol.png')} alt="Veltrix" />
        </div>
        <nav>
          {navItems.map(item => (
            <a key={item.target} href={`#${item.target}`}>{item.label}</a>
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
            <div className="language-toggle" role="group" aria-label={t.languageAria}>
              {['PT', 'EN'].map(code => (
                <button
                  key={code}
                  type="button"
                  className={language === code ? 'active' : ''}
                  aria-pressed={language === code}
                  onClick={() => setLanguage(code)}
                >
                  {code}
                </button>
              ))}
            </div>
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={t.themeAria}>
              {darkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{t.themeMode(darkMode)}</span>
            </button>
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
              <a className="button ghost" href={profile.resume} download="Curriculo-Marcelo-Esperandio.pdf">
                <Download size={18}/> {t.resumeButton}
              </a>
            </div>
          </div>
          <div className="profileCard">
            <div className="avatar">
              <img src={imagePath('profile-marcelo.jpeg')} alt={profile.name} />
            </div>
            <strong>{t.profileTitle}</strong>
            <span>{t.profileSubtitle}</span>
          </div>
        </section>

        <section className="stats">
          <article>
            <div className="stat-icon"><Briefcase size={20}/></div>
            <div className="stat-copy"><strong>17</strong><span>{t.stats[0]}</span></div>
          </article>
          <a className="stat-card stat-link" href="#experiencia" aria-label={`${t.stats[1]}: ${t.experienceTitle}`}>
            <div className="stat-icon"><Rocket size={20}/></div>
            <div className="stat-copy"><strong>5</strong><span>{t.stats[1]}</span></div>
          </a>
          <a className="stat-card stat-link" href="#tecnologias" aria-label={`${t.stats[2]}: ${t.technologiesTitle}`}>
            <div className="stat-icon"><Code size={20}/></div>
            <div className="stat-copy"><strong>20+</strong><span>{t.stats[2]}</span></div>
          </a>
          <article>
            <div className="stat-icon"><ShieldCheck size={20}/></div>
            <div className="stat-copy"><strong>360°</strong><span>{t.stats[3]}</span></div>
          </article>
        </section>

        <section className="section about" id="sobre">
          <div className="about-copy">
            <h2>{t.aboutTitle}</h2>
            <div className="about-text">
              <p>{t.aboutText}</p>
            </div>
          </div>
          <div className="about-list">
            <div className="about-list-panel">
              <span><Workflow size={16}/> {t.aboutList[0]}</span>
              <span><Terminal size={16}/> {t.aboutList[1]}</span>
              <span><Cloud size={16}/> {t.aboutList[2]}</span>
            </div>
          </div>
        </section>

        <section className="section" id="tecnologias">
          <h2>{t.technologiesTitle}</h2>
          <div className="skills-grid">
            {t.skillsCategories.map(({ category, icon: Icon, items, featured, tools }) => (
              <article key={category} className={`skill-category${featured ? ' featured' : ''}${tools ? ' ai-quality' : ''}`}>
                <div className="skill-header">
                  <Icon size={20} />
                  <h3>{category}</h3>
                </div>
                <div className="skill-panel">
                  {tools ? (
                    <div className="ai-quality-content">
                      <div className="ai-tools">
                        {tools.map(tool => <span key={tool}>{tool}</span>)}
                      </div>
                      <div className="ai-use-cases">
                        {items.map(item => (
                          <div key={item}>
                            <CheckCircle size={16} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="skill-items">
                      {items.map(item => <span key={item}>{item}</span>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="sectionTitle">
            <h2>{t.projectTitle}</h2>
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
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="chips">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <h2>{t.experienceTitle}</h2>
          <div className="experiences">
            {t.experiences.map(experience => (
              <article className="experience" key={experience.company}>
                <div className="experience-head">
                  <div className="exp-title">
                    <span>{experience.company}</span> - {experience.role}
                  </div>
                  <div className="exp-meta">
                    <strong>{experience.year}</strong>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="experience-details">
                  <ul>
                    {experience.highlights.map(highlight => (
                      <li key={highlight}>
                        <CheckCircle size={15} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="formacao">
          <h2>{t.educationTitle}</h2>
          <div className="education-grid">
            {t.education.map(item => (
              <article className="education-card" key={item.title}>
                <div className="education-icon" aria-hidden="true">
                  <GraduationCap size={22} />
                </div>
                <div className="education-content">
                  <div className="education-heading">
                    <div>
                      <span>{item.place}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <strong>{item.status}</strong>
                  </div>
                  <p>{item.period}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid two" id="certificacoes">
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

          <article className="card" id="contato">
            <h2>{t.contactTitle}</h2>
            <div className="contact-info">
              <a href={`mailto:${profile.email}`}><Mail size={16}/> {profile.email}</a>
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}><Phone size={16}/> {profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={16}/> {profile.linkedinLabel}</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={16}/> {profile.githubLabel}</a>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp size={16}/> WhatsApp</a>
              <span className="location"><MapPin size={16}/> {profile.location}</span>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
