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
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Rocket,
  ShieldCheck,
  Sun,
  Terminal,
  Workflow,
  X
} from 'lucide-react'
import './styles.css'

const imagePath = file => `${import.meta.env.BASE_URL}images/${file}`
const appVersion = '2.0.0'

const profile = {
  name: 'Marcelo Esperândio Lúcio',
  title: 'Senior QA Engineer | Test Automation | AI Quality Engineering',
  location: 'Barueri - SP, Brasil',
  email: 'marcelo.esperandio@outlook.com',
  whatsapp: '5513991429394',
  linkedin: 'https://linkedin.com/in/marceloesperandio',
  github: 'https://github.com/marceloesperandio',
  resume: {
    PT: `${import.meta.env.BASE_URL}curriculo-marcelo-esperandio.pdf`,
    EN: `${import.meta.env.BASE_URL}resume-marcelo-esperandio-en.pdf`
  }
}

const careerStart = new Date(2009, 6, 1)
const getCareerYears = () => {
  const today = new Date()
  let years = today.getFullYear() - careerStart.getFullYear()
  const anniversaryPending = today.getMonth() < careerStart.getMonth()
    || (today.getMonth() === careerStart.getMonth() && today.getDate() < careerStart.getDate())
  return anniversaryPending ? years - 1 : years
}

const content = {
  PT: {
    themeMode: darkMode => `Modo ${darkMode ? 'noturno' : 'claro'}`,
    themeAria: 'Alternar tema',
    languageAria: 'Selecionar idioma',
    nav: ['Início', 'Sobre mim', 'Soluções', 'Tecnologias', 'Experiência', 'Cursos e certificações', 'Formação', 'Contato'],
    heroText: years => `Senior QA Engineer com ${years} anos de experiência, transformando qualidade, automação e prevenção de falhas em entregas mais confiáveis.`,
    availability: 'Disponível para projetos e oportunidades em Quality Engineering, SDET e Test Automation.',
    talkButton: 'Falar comigo',
    resumeButton: 'Baixar currículo',
    stats: ['Anos em qualidade de software', 'Empresas de grande porte', 'Tecnologias no stack', 'Setores estratégicos'],
    aboutTitle: 'SOBRE MIM',
    aboutText: 'Minha atuação combina visão técnica, colaboração e liderança para transformar riscos em decisões claras. Trabalho próximo de engenharia, produto e negócio para evoluir práticas de QA, construir uma cultura de qualidade compartilhada e definir estratégias adequadas ao contexto de cada produto.',
    aboutList: ['Colaboração entre engenharia, produto e negócio', 'Liderança técnica e evolução de práticas de QA', 'Decisões orientadas por risco e evidências'],
    technologiesTitle: 'TECNOLOGIAS',
    experienceTitle: 'EXPERIÊNCIA PROFISSIONAL',
    certificationsTitle: 'CURSOS E CERTIFICAÇÕES',
    certificationsSubtitle: 'Formação complementar em práticas de qualidade, automação e agilidade.',
    educationTitle: 'FORMAÇÃO ACADÊMICA',
    contactTitle: 'VAMOS CONVERSAR?',
    copyright: '© Veltrix 2026. Portfólio profissional de Marcelo Esperândio.',
    skillsCategories: [
      { category: 'Linguagens & Automação', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'RestAssured', 'Appium'] },
      { category: 'Qualidade & APIs', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'APIs REST', 'Testes exploratórios', 'Testes não funcionais'] },
      { category: 'Cloud & Entrega', icon: Cloud, items: ['Azure Pipelines', 'Jenkins', 'Kubernetes', 'CloudWatch', 'SonarQube'] },
      {
        category: 'IA aplicada à Qualidade',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: [
          'Geração e revisão de cenários',
          'Análise de logs e falhas',
          'Apoio à automação e revisão de código',
          'Testes e avaliação de aplicações com IA'
        ]
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Ago/2025 - Mai/2026', location: 'São Paulo - SP', highlights: ['Ampliação da cobertura de qualidade em integrações Salesforce FSL e Oracle OSM/SOM, da validação funcional aos contratos entre serviços.', 'Automação backend incorporada ao fluxo de entrega para acelerar o feedback sobre regressões.', 'Riscos de integração antecipados por testes exploratórios, de APIs e colaboração contínua com desenvolvimento e produto.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - Mai/2025', location: 'São Paulo - SP', highlights: ['Fortalecimento da estratégia de testes backend, cobrindo requisitos funcionais e não funcionais.', 'Execução automatizada integrada ao Azure Pipelines, com qualidade acompanhada pelo SonarQube.', 'Maior previsibilidade entre serviços distribuídos por meio de APIs REST, Spring Boot e testes de contrato.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / Chapter QA', year: 'Out/2019 - Out/2023', location: 'São Paulo - SP', highlights: ['Evolução da automação frontend e backend com Java, Selenium, RestAssured, JUnit 5 e Cucumber.', 'Controles de qualidade incorporados à migração para Kubernetes e aos pipelines Jenkins, com análise no CloudWatch.', 'Padronização de práticas e estratégias ponta a ponta por meio da liderança técnica do Chapter QA.'] },
      { company: 'Grupo Abril', role: 'Analista de Testes Sênior, Pleno e Júnior', year: 'Jan/2013 - Out/2019', location: 'São Paulo - SP', highlights: ['Expansão da regressão automatizada com Java, Selenium WebDriver e JUnit.', 'Cenários BDD/Gherkin conectando requisitos, testes funcionais e validações não funcionais.', 'Maior segurança nas mudanças por meio de homologação com usuários e acompanhamento em produção.'] },
      { company: 'NET / Claro', role: 'Analista de Testes Júnior', year: 'Jul/2009 - Dez/2012', location: 'São Paulo - SP', highlights: ['Cobertura de fluxos críticos com testes funcionais, integrados e não funcionais.', 'Riscos em aplicações móveis e migrações de telecomunicações identificados antes da entrega.', 'Rastreabilidade de testes e defeitos com Oracle SQL Developer, SoapUI, TestLink e Bugzilla.'] }
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
    ]
  },
  EN: {
    themeMode: darkMode => `${darkMode ? 'Dark' : 'Light'} mode`,
    themeAria: 'Toggle theme',
    languageAria: 'Select language',
    nav: ['Home', 'About me', 'Solutions', 'Technologies', 'Experience', 'Courses & certifications', 'Education', 'Contact'],
    heroText: years => `Senior QA Engineer with ${years} years of experience turning quality, automation, and defect prevention into more reliable releases.`,
    availability: 'Available for Quality Engineering, SDET, and Test Automation projects and opportunities.',
    talkButton: 'Contact me',
    resumeButton: 'Download résumé',
    stats: ['Years in software quality', 'Large companies', 'Technologies in the stack', 'Strategic sectors'],
    aboutTitle: 'ABOUT ME',
    aboutText: 'My work combines technical vision, collaboration, and leadership to turn risks into clear decisions. I partner closely with engineering, product, and business teams to advance QA practices, build a shared quality culture, and define strategies suited to each product context.',
    aboutList: ['Collaboration across engineering, product, and business', 'Technical leadership and evolving QA practices', 'Risk- and evidence-based decisions'],
    technologiesTitle: 'TECHNOLOGIES',
    experienceTitle: 'PROFESSIONAL EXPERIENCE',
    certificationsTitle: 'COURSES & CERTIFICATIONS',
    certificationsSubtitle: 'Continuing education in quality, automation, and agile practices.',
    educationTitle: 'EDUCATION',
    contactTitle: 'LET’S TALK?',
    copyright: '© Veltrix 2026. Marcelo Esperândio’s professional portfolio.',
    skillsCategories: [
      { category: 'Languages & Automation', icon: Code2, items: ['Java', 'Python', 'JavaScript', 'Selenium', 'Playwright', 'RestAssured', 'Appium'] },
      { category: 'Quality & APIs', icon: ShieldCheck, items: ['Contract Testing', 'BDD', 'Cucumber', 'REST APIs', 'Exploratory Testing', 'Non-functional Testing'] },
      { category: 'Cloud & Delivery', icon: Cloud, items: ['Azure Pipelines', 'Jenkins', 'Kubernetes', 'CloudWatch', 'SonarQube'] },
      {
        category: 'AI applied to Quality Engineering',
        icon: Bot,
        featured: true,
        tools: ['ChatGPT', 'Claude', 'Copilot', 'Gemini', 'Codex', 'GitHub Copilot'],
        items: ['Test scenario generation and review', 'Log and failure analysis', 'Automation and code review support', 'AI application testing and evaluation']
      }
    ],
    experiences: [
      { company: 'VTAL', role: 'Quality Engineer', year: 'Aug/2025 - May/2026', location: 'São Paulo - SP', highlights: ['Expanded quality coverage across Salesforce FSL and Oracle OSM/SOM integrations, from functional validation to service contracts.', 'Embedded backend automation into the delivery flow to accelerate regression feedback.', 'Anticipated integration risks through exploratory and API testing in continuous collaboration with engineering and product.'] },
      { company: 'Sinqia', role: 'Software Development Engineer in Test (SDET)', year: 'Nov/2023 - May/2025', location: 'São Paulo - SP', highlights: ['Strengthened the backend testing strategy across functional and non-functional requirements.', 'Integrated automated execution into Azure Pipelines, with quality monitored through SonarQube.', 'Improved predictability across distributed services with REST APIs, Spring Boot, and contract testing.'] },
      { company: 'Banco PAN', role: 'Quality Engineer / QA Chapter Lead', year: 'Oct/2019 - Oct/2023', location: 'São Paulo - SP', highlights: ['Advanced frontend and backend automation with Java, Selenium, RestAssured, JUnit 5, and Cucumber.', 'Embedded quality controls into the Kubernetes migration and Jenkins pipelines, supported by CloudWatch analysis.', 'Standardized practices and end-to-end strategies through technical leadership of the QA Chapter.'] },
      { company: 'Grupo Abril', role: 'Senior, Mid-level, and Junior Test Analyst', year: 'Jan/2013 - Oct/2019', location: 'São Paulo - SP', highlights: ['Expanded automated regression coverage with Java, Selenium WebDriver, and JUnit.', 'Connected requirements, functional testing, and non-functional validation through BDD/Gherkin scenarios.', 'Increased confidence in changes through user acceptance testing and production monitoring.'] },
      { company: 'NET / Claro', role: 'Junior Test Analyst', year: 'Jul/2009 - Dec/2012', location: 'São Paulo - SP', highlights: ['Covered critical flows with functional, integration, and non-functional testing.', 'Identified risks in mobile applications and telecommunications migrations before release.', 'Improved test and defect traceability with Oracle SQL Developer, SoapUI, TestLink, and Bugzilla.'] }
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
    ]
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('PT')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = content[language]
  const careerYears = getCareerYears()

  useEffect(() => {
    document.documentElement.lang = language === 'PT' ? 'pt-BR' : 'en-US'
  }, [language])
  const navItems = [
    { label: t.nav[0], target: 'home' },
    { label: t.nav[1], target: 'sobre' },
    { label: t.nav[4], target: 'experiencia' },
    { label: t.nav[3], target: 'tecnologias' },
    { label: t.nav[6], target: 'formacao' },
    { label: t.nav[5], target: 'certificacoes' },
    { label: t.nav[7], target: 'contato' }
  ]

  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>
      {mobileMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label={language === 'PT' ? 'Fechar menu' : 'Close menu'}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <aside className={`sidebar${mobileMenuOpen ? ' open' : ''}`}>
        <div className="logo">
          <img src={imagePath('veltrix-symbol.png')} alt="Veltrix" />
        </div>
        <nav>
          {navItems.map(item => (
            <a key={item.target} href={`#${item.target}`} onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
        <div className="app-meta">
          <span className="app-version">v{appVersion}</span>
          <p>{t.copyright}</p>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? (language === 'PT' ? 'Fechar menu' : 'Close menu') : (language === 'PT' ? 'Abrir menu' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
          <div className="hero-copy">
            <p className="eyebrow">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="heroText">{t.heroText(careerYears)}</p>
            <p className="availability"><span aria-hidden="true"></span>{t.availability}</p>
            <div className="actions">
              <a className="button primary-action" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                <FaWhatsapp size={18}/> {t.talkButton}
              </a>
              <a
                className="button ghost primary-action"
                href={profile.resume[language]}
                download={language === 'PT' ? 'Curriculo-Marcelo-Esperandio.pdf' : 'Resume-Marcelo-Esperandio.pdf'}
              >
                <Download size={18}/> {t.resumeButton}
              </a>
              <a className="button ghost social-action" href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn size={18}/> <span>LinkedIn</span>
              </a>
              <a className="button ghost social-action" href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub size={18}/> <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="profileCard">
            <img src={imagePath('profile-marcelo.jpeg')} alt={profile.name} />
          </div>
        </section>

        <section className="stats">
          <article>
            <div className="stat-icon"><Briefcase size={20}/></div>
            <div className="stat-copy"><strong>{careerYears}</strong><span>{t.stats[0]}</span></div>
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
            <div className="stat-copy"><strong>4</strong><span>{t.stats[3]}</span></div>
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
            <p className="section-intro">{t.certificationsSubtitle}</p>
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
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={16}/> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={16}/> GitHub</a>
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
