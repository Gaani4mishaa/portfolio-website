"use strict";

const CV_PATH = "assets/Amina-Mohamed-Gaani-CV.pdf";
const GITHUB_USER = "Gaani4mishaa";
const routes = [
    ["home", "Home", "⌂"],
    ["about", "About Me", "◉"],
    ["projects", "Projects", "▤"],
    ["skills", "Technical Skills", "⌘"],
    ["experience", "Experience", "◷"],
    ["education", "Education", "▱"],
    ["impact", "Community Impact", "♡"],
    ["certifications", "Certifications", "◇"],
    ["resume", "Resume", "▧"],
    ["contact", "Contact", "↗"]
];

const projects = [
    {
        id: "kakuma-refugee-kiosk",
        title: "Kakuma Refugee Kiosk",
        category: "Community platform",
        description: "A multilingual platform connecting refugee communities in Kakuma with essential services, resources, announcements and skills opportunities. Supports English, Kiswahili and Somali.",
        tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        features: ["Multilingual access in English, Kiswahili and Somali", "Community resources, announcements and skills opportunities", "Live demo available"],
        github: "https://github.com/Gaani4mishaa/kakuma-refugee-kiosk",
        demo: "https://kakumakiosk.freedev.app",
        type: "community"
    },
    {
        id: "flowtrack",
        title: "FlowTrack",
        category: "Civic technology",
        subtitle: "Flood & drainage issue reporting platform",
        description: "A platform for reporting and tracking flood and drainage issues, with status tracking, dashboards, report review, engineer assignment and maintenance work orders.",
        tech: ["Python", "Django", "PostgreSQL"],
        features: ["Report and status tracking", "Review and engineer assignment workflow", "Dashboards and maintenance work orders"],
        github: "https://github.com/Gaani4mishaa/FlowTrack",
        type: "civic"
    },
    {
        id: "smart-recipe-hub",
        title: "Smart Recipe Hub",
        category: "Web application",
        description: "A web-based recipe application built with Django and SQLite.",
        tech: ["Django", "SQLite"],
        features: ["Web-based recipe application"],
        github: "https://github.com/Gaani4mishaa/smart-recipe-hub",
        type: "web"
    },
    {
        id: "trivia-masters",
        title: "Trivia Masters",
        category: "Real-time multiplayer",
        subtitle: "Real-time multiplayer web application",
        description: "A real-time multiplayer trivia application featuring user authentication, interactive gameplay, leaderboards and more than 50 questions.",
        tech: ["React", "Node.js", "Express", "Socket.IO", "SQLite"],
        features: ["Real-time multiplayer gameplay", "User authentication and leaderboards", "More than 50 questions"],
        github: "https://github.com/Gaani4mishaa/trivia-multiplayer-game",
        type: "realtime"
    },
    {
        id: "wellmind",
        title: "WellMind",
        category: "Group project",
        subtitle: "Mental wellness check-in system",
        description: "A group-built application supporting daily mood check-ins, journal entries, mood history visualisations and mental health resources.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Chart.js"],
        features: ["Daily mood check-ins and journal entries", "Mood history visualisations", "Mental health resources"],
        type: "wellbeing",
        group: true
    }
];

const certificates = [
    { title: "Aspire Leaders Program", organization: "Aspire Institute", date: "July 2026", note: "Certificate confirms completion of the 2026 program.", image: "certificates/aspire-leaders.jpg", alt: "2026 Aspire Leaders Program certificate awarded by Aspire Institute" },
    { title: "Networking Essentials", organization: "JKUATES-SkillEmpower Cisco Academy, through the Cisco Networking Academy program", date: "Date not shown on certificate", image: "certificates/cisco-network-technician.jpg", alt: "Networking Essentials certificate offered by JKUATES-SkillEmpower Cisco Academy" },
    { title: "Website Development Boot Camp Program", organization: "eMobilis Technology Training Institute", date: "14 August 2025", note: "Certificate of participation recognizing successful completion.", image: "certificates/emobilis-web-development.jpg", alt: "Certificate of Participation for the Website Development Boot Camp Program from eMobilis" },
    { title: "Ajira Digital Program Certificate of Completion", organization: "Ajira Digital", date: "14–15 October 2024", note: "Data Analysis using Excel training and mentorship.", image: "certificates/Ajira Mentorship Certificate.pdf.png", alt: "Ajira Digital certificate for Excel data analysis training and mentorship" },
    { title: "Virtual Assistant Skills in the Digital Age", organization: "ALX Group", date: "26 November 2024", note: "Certificate of achievement for an 8-week programme.", image: "certificates/alx-virtual-assistant.jpg", alt: "ALX certificate of achievement for Virtual Assistant Skills in the Digital Age" },
    { title: "Universal Acceptance Day 2026", organization: "Not clearly identified on certificate", date: "13 May 2026", note: "Certificate of participation.", image: "certificates/kenic-universal-acceptance.jpg", alt: "Certificate of Participation for Universal Acceptance Day 2026" }
];

const skills = [
    { category: "Programming", items: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"], projects: "FlowTrack · Trivia Masters · Kakuma Refugee Kiosk" },
    { category: "Web Development", items: ["Django", "React", "Node.js", "Express"], projects: "FlowTrack · Smart Recipe Hub · Trivia Masters" },
    { category: "Databases", items: ["SQLite", "PostgreSQL"], projects: "Smart Recipe Hub · FlowTrack · Trivia Masters" },
    { category: "Cloud & Operating Systems", items: ["AWS EC2 (foundational hands-on practice)", "Ubuntu Linux", "Windows"], projects: "Foundational cloud and systems practice" },
    { category: "Tools & Networking", items: ["Git", "GitHub", "Networking fundamentals", "Troubleshooting"], projects: "Used across project work and ICT support" },
    { category: "Professional Skills", items: ["Communication", "Teamwork", "Problem-solving"], projects: "Applied in volunteer and collaborative work" }
];
const skillGlyphs = {
    Python: "Py", "C++": "C+", JavaScript: "JS", SQL: "SQL", HTML: "5", CSS: "3",
    Django: "Dj", React: "R", "Node.js": "Nd", Express: "Ex", SQLite: "Sq", PostgreSQL: "Pg",
    "AWS EC2 (foundational hands-on practice)": "AWS", "Ubuntu Linux": "U", Windows: "W",
    Git: "Git", GitHub: "GH", "Networking fundamentals": "Net", Troubleshooting: "T",
    Communication: "C", Teamwork: "T", "Problem-solving": "P"
};

const experience = [
    { date: "2026", role: "Digital Literacy & Technology Volunteer", organization: "Angaza Center", description: "Supported learners in practical digital skills, including computer fundamentals, Google applications, coding, cybersecurity and responsible use of AI.", tags: ["Digital literacy", "Community"] },
    { date: "2026–Present", role: "Web Development Volunteer", organization: "Yelosa Foundation Uganda", description: "Developing the Foundation's official website, building responsive pages and features to showcase programmes and community impact. Working on donation integration, deployment, security and sustainable handover.", tags: ["Web development", "Volunteer"] },
    { date: "2025", role: "ICT Intern", organization: "Nairobi South Hospital", description: "Supported day-to-day ICT operations involving computers, operating systems, printers and the hospital information system. Assisted with basic networking tasks and troubleshooting in a healthcare environment.", tags: ["ICT support", "Internship"] }
];

const root = document.getElementById("viewRoot");
const nav = document.getElementById("primaryNav");
const pageLabel = document.getElementById("currentPageLabel");
const viewScroll = document.getElementById("viewScroll");
const appDialog = document.getElementById("appDialog");
const dialogContent = document.getElementById("dialogContent");
const terminalDialog = document.getElementById("terminalDialog");
let typingTimer;
let githubRequestState = "idle";
let githubRepos = [];
let terminalHistory = [];
let historyIndex = 0;
const terminalTimers = [];

const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

function renderNavigation(active) {
    nav.innerHTML = routes.map(([id, label, icon]) =>
        `<a class="nav-link${id === active ? " active" : ""}" href="#${id}"${id === active ? ' aria-current="page"' : ""}><span class="nav-icon" aria-hidden="true">${icon}</span><span>${label}</span></a>`
    ).join("");
    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileNav);
    });
}

function pageHeading(kicker, title, description = "") {
    return `<header class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1>${description ? `<p>${description}</p>` : ""}</div></header>`;
}

function renderHome() {
    return `${pageHeading("Personal workspace · 01", "Engineering, with intention.", "A snapshot of what I'm learning, building and contributing to.")}
        <div class="home-grid">
            <section class="hero-panel"><div class="hero-content">
                <div class="hero-topline"><span class="status-light"></span>Open to internship &amp; entry-level opportunities</div>
                <h1 class="hero-title">Amina Mohamed<br><span>Gaani.</span></h1>
                <div class="typed-line"><span id="typedHeadline">Software Engineering Student</span><i class="typing-cursor" aria-hidden="true"></i></div>
                <p class="hero-copy">I’m a Software Engineering student at USIU-Africa building practical software and developing a foundation in cloud infrastructure. Curious about how reliable systems are built, deployed and improved.</p>
                <div class="hero-actions"><a class="btn btn-primary" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a><a class="btn" href="${CV_PATH}" download="Amina-Mohamed-Gaani-CV.pdf">Download my CV <span aria-hidden="true">↓</span></a><button class="btn btn-quiet" type="button" data-open-terminal>Open terminal <span aria-hidden="true">&gt;_</span></button></div>
                <div class="hero-meta"><span class="tag tag-blue">Software Engineering</span><span class="tag tag-violet">Cloud interest</span><span class="tag">Nairobi, Kenya</span></div>
            </div></section>
            <aside class="hero-aside">
                <section class="panel portrait-panel"><img src="images/profile.jpg" alt="Portrait of Amina Mohamed Gaani"><div class="portrait-caption"><div><strong>Amina Gaani</strong><small>SOFTWARE ENGINEERING · USIU-AFRICA</small></div><span class="tag tag-green">Nairobi, KE</span></div></section>
                <section class="panel status-panel"><div class="section-head"><h2 class="section-title">Engineering status</h2><span class="panel-kicker">CURRENT</span></div>
                    <div class="status-row"><span>Focus</span><span>Cloud &amp; software</span></div><div class="status-row"><span>Cloud practice</span><span>AWS EC2 · foundational</span></div><div class="status-row"><span>Systems</span><span>Ubuntu Linux</span></div><div class="status-row"><span>Education</span><span>BSc · expected 2027</span></div>
                </section>
            </aside>
        </div>
        <div class="home-lower">
            <section class="panel activity-panel"><div class="section-head"><h2 class="section-title">Currently building &amp; exploring</h2><span class="panel-kicker">ACTIVITY</span></div><div class="activity-list">
                <div class="activity-item"><span class="activity-icon">01</span><div><strong>Practical web applications</strong><small>Full-stack projects with real-world context</small></div><time>BUILD</time></div>
                <div class="activity-item"><span class="activity-icon">02</span><div><strong>Cloud &amp; Linux foundations</strong><small>Developing hands-on infrastructure skills</small></div><time>LEARN</time></div>
                <div class="activity-item"><span class="activity-icon">03</span><div><strong>Community-focused technology</strong><small>Volunteer web development &amp; digital literacy</small></div><time>CONTRIBUTE</time></div>
            </div></section>
            <div class="quick-grid">
                <a class="quick-link" href="#projects"><span>Selected work</span><strong>Project explorer</strong><span class="arrow">↗</span></a>
                <a class="quick-link" href="#skills"><span>Technical toolkit</span><strong>Skills explorer</strong><span class="arrow">↗</span></a>
                <a class="quick-link" href="#impact"><span>Community</span><strong>Impact &amp; service</strong><span class="arrow">↗</span></a>
                <a class="quick-link" href="#contact"><span>Let’s connect</span><strong>Contact details</strong><span class="arrow">↗</span></a>
            </div>
        </div>`;
}

function renderAbout() {
    return `${pageHeading("Profile · 02", "The person behind the work.", "A developing software engineer with a growing interest in cloud engineering and the systems behind useful products.")}
        <div class="about-layout">
            <article class="panel editorial-copy">
                <div class="panel-kicker">A short introduction</div>
                <p class="lead">I’m Amina Mohamed Gaani, a Software Engineering student at United States International University-Africa.</p>
                <p>My work so far spans full-stack web applications, community platforms and practical ICT support. I enjoy taking a problem from an idea to a working digital experience—and learning from the details along the way.</p>
                <p>I’m especially interested in cloud infrastructure, AWS, Linux and automation: how applications are deployed, secured and kept reliable after they’re built. I’m developing this foundation through coursework, project work and hands-on practice.</p>
                <p>Outside software, I value community-focused work. Volunteering in digital literacy and contributing to education initiatives has shaped how I think about accessible, useful technology.</p>
                <div class="interest-strip"><span class="tag tag-blue">Cloud engineering</span><span class="tag">AWS foundations</span><span class="tag">Linux &amp; systems</span><span class="tag tag-violet">Full-stack development</span><span class="tag">Networking</span><span class="tag">Automation</span></div>
            </article>
            <aside class="about-aside">
                <section class="panel fact-panel"><div class="panel-kicker">At a glance</div>
                    <div class="fact-line"><span>Based in</span><span>Nairobi, Kenya</span></div><div class="fact-line"><span>Studying</span><span>Software Engineering</span></div><div class="fact-line"><span>University</span><span>USIU-Africa</span></div><div class="fact-line"><span>Expected</span><span>2027</span></div><div class="fact-line"><span>Interests</span><span>Software · Cloud · Systems</span></div>
                </section>
                <section class="panel fact-panel"><div class="panel-kicker">Approach</div><p class="text-muted" style="font-size:11px;line-height:1.85;margin:10px 0 0">Build with care. Stay curious. Make technology practical and accessible.</p></section>
            </aside>
        </div>`;
}

function previewMarkup(project, index) {
    const labels = ["COMMUNITY SERVICES", "CIVIC SYSTEMS", "RECIPE COLLECTION", "MULTIPLAYER LIVE", "WELLNESS CHECK-IN"];
    return `<div class="project-preview" aria-hidden="true"><div class="preview-window"><div class="preview-bar"><i></i><i></i><i></i></div><div class="preview-lines"><span></span><span></span><span></span></div></div><span class="preview-label">${labels[index]}</span></div>`;
}

function projectMarkup(project, index) {
    const availableRepos = new Map(githubRepos.map((repo) => [repo.name.toLowerCase(), repo]));
    const apiProject = availableRepos.get(project.id.toLowerCase());
    const language = apiProject?.language ? `<span class="tag">${esc(apiProject.language)}</span>` : "";
    const tech = project.tech.slice(0, 5).map((technology) => `<span class="tag">${esc(technology)}</span>`).join("");
    return `<article class="project-card" data-category="${esc(project.type)}">${previewMarkup(project, index)}<div class="project-card-body">
        <div class="project-card-title"><div><div class="project-type">${esc(project.category)}</div><h2>${esc(project.title)}</h2>${project.subtitle ? `<div class="text-muted" style="font-size:9px;margin-top:2px">${esc(project.subtitle)}</div>` : ""}</div><span class="accent" aria-hidden="true">↗</span></div>
        <p>${esc(project.description)}</p>${apiProject?.description && apiProject.description !== project.description ? `<p class="repo-description"><span>GITHUB REPOSITORY TEXT · </span>${esc(apiProject.description)}</p>` : ""}<div class="tech-list">${tech}${language}</div>
        <div class="project-foot">${project.github ? `<a class="text-link" href="${esc(project.github)}" target="_blank" rel="noopener noreferrer">↗ GitHub</a>` : `<span class="text-link">Collaborative project</span>`}${project.demo ? `<a class="text-link" href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""}<button class="project-open" type="button" data-project="${esc(project.id)}" aria-label="View details for ${esc(project.title)}">Details +</button></div>
    </div></article>`;
}

function renderProjects() {
    const filters = [["all", "All work"], ["community", "Community"], ["civic", "Civic tech"], ["web", "Web apps"], ["realtime", "Real-time"], ["wellbeing", "Group project"]];
    return `${pageHeading("Selected work · 03", "Projects with a purpose.", "A selection of web applications and community-oriented software projects. Explore the details, tools and available repositories.")}
        <div class="project-toolbar"><div class="filter-row" id="projectFilters">${filters.map(([id, label], index) => `<button class="filter-btn${index === 0 ? " selected" : ""}" type="button" data-filter="${id}" aria-pressed="${index === 0}">${label}</button>`).join("")}</div><span class="panel-kicker" id="githubStatus" aria-live="polite">PUBLIC REPOS · LOADING</span></div>
        <div class="project-grid" id="projectGrid">${projects.map(projectMarkup).join("")}<div class="empty-filter" id="emptyFilter">No projects in this category yet.</div></div>
        <p class="text-quiet" style="font-size:9px;margin:12px 2px 0">Repository information may be enriched from GitHub’s public API. The project summaries above remain available if the API cannot be reached.</p>`;
}

function renderSkills() {
    const categories = ["All", ...skills.map((item) => item.category)];
    return `${pageHeading("Technical toolkit · 04", "Skills I’m growing.", "An honest snapshot of the technologies and working skills I use or am developing—without artificial proficiency scores.")}
        <div class="skills-toolbar"><div class="filter-row" id="skillFilters">${categories.map((category, index) => `<button type="button" class="filter-btn${index === 0 ? " selected" : ""}" data-skill-filter="${index === 0 ? "all" : esc(category)}" aria-pressed="${index === 0}">${esc(category)}</button>`).join("")}</div><span class="panel-kicker">SELECT A CATEGORY</span></div>
        <div class="skills-list">${skills.map((group) => `<section class="panel skill-group" data-skill-category="${esc(group.category)}"><div class="skill-head"><h2>${esc(group.category)}</h2><span>${String(group.items.length).padStart(2, "0")} TOOLS</span></div><div class="skill-chips">${group.items.map((skill) => `<span class="skill-chip"><span class="tech-glyph" aria-hidden="true">${esc(skillGlyphs[skill] || skill.slice(0, 2))}</span>${esc(skill)}</span>`).join("")}</div><div class="skill-associations"><span class="accent">Related:</span> ${esc(group.projects)}</div></section>`).join("")}</div>`;
}

function renderExperience() {
    return `${pageHeading("Experience · 05", "Learning by contributing.", "Professional and volunteer experience across ICT operations, web development and digital literacy.")}
        <div class="timeline">${experience.map((item) => `<article class="timeline-item"><div class="timeline-date">${esc(item.date)}</div><div class="timeline-marker" aria-hidden="true"></div><div class="panel timeline-card"><h2>${esc(item.role)}</h2><div class="role">${esc(item.organization)}</div><p>${esc(item.description)}</p><div>${item.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join(" ")}</div></div></article>`).join("")}</div>`;
}

function renderEducation() {
    return `${pageHeading("Education · 06", "A foundation in engineering.", "Formal study alongside practical project work and continued self-directed learning.")}
        <div class="education-layout"><section class="panel education-feature"><div class="education-year">2023 — 2027 · EXPECTED</div><h2>Bachelor of Science in Software Engineering</h2><p>United States International University-Africa (USIU-Africa)<br>Nairobi, Kenya</p></section><aside class="education-details">
            <section class="panel education-detail"><div class="panel-kicker">Programme</div><strong>Software Engineering</strong><p>Developing foundations in software development and engineering practice.</p></section>
            <section class="panel education-detail"><div class="panel-kicker">Institution</div><strong>USIU-Africa</strong><p>United States International University-Africa · Nairobi, Kenya</p></section>
            <section class="panel education-detail"><div class="panel-kicker">Expected completion</div><strong>2027</strong><p>Currently pursuing the degree. No GPA or awards claimed.</p></section>
        </aside></div>`;
}

function renderImpact() {
    return `${pageHeading("Community · 07", "Technology is a team effort.", "Community action and volunteer service that helped make a practical difference in learning environments.")}
        <div class="impact-hero"><section class="impact-story panel"><div class="panel-kicker">Community action · Wajir West</div><h2>More supportive classrooms at Maumau Primary School.</h2><p>Contributed to a community action project constructing and installing desks to improve classroom learning conditions.</p></section><div class="impact-stat"><div class="impact-stat-item"><strong>46</strong><span>three-seater desks installed</span></div><div class="impact-stat-item"><strong>135+</strong><span>pupils benefited</span></div><div class="impact-stat-item"><strong>4</strong><span>classrooms equipped</span></div></div></div>
        <div class="impact-stories"><article class="panel impact-card"><div class="impact-number">01 / EDUCATION</div><h2>Community Action Project</h2><div class="place">Maumau Primary School · Wajir West, Kenya</div><p>Forty-six three-seater desks were constructed and installed, benefiting more than 135 pupils across four classrooms.</p></article><article class="panel impact-card"><div class="impact-number">02 / VOLUNTEERING</div><h2>Volunteer Teaching</h2><div class="place">Ananda Marga Academy</div><p>Contributed to volunteer teaching during a teacher shortage, helping students continue their education.</p></article></div>`;
}

function renderCertificates() {
    return `${pageHeading("Learning & recognition · 08", "Certificates & development.", "Completed training, mentorship and participation—shown with the information and certificate images available.")}
        <div class="certificate-grid">${certificates.map((certificate, index) => `<article class="certificate-card" tabindex="0" role="button" data-certificate="${index}" aria-label="Preview ${esc(certificate.title)}"><div class="certificate-thumb"><img src="${esc(certificate.image)}" alt="${esc(certificate.alt)}" loading="lazy" onerror="this.closest('.certificate-thumb').innerHTML='<span class=&quot;panel-kicker&quot; style=&quot;display:grid;place-items:center;height:100%&quot;>CERTIFICATE IMAGE UNAVAILABLE</span>'"></div><div class="certificate-body"><h2>${esc(certificate.title)}</h2><p>${esc(certificate.organization)}</p><div class="cert-date">${esc(certificate.date)}</div></div></article>`).join("")}</div>`;
}

function renderResume() {
    return `${pageHeading("Resume · 09", "A closer look at my experience.", "The attached PDF is the source of truth for my professional details.")}
        <div class="resume-layout"><section class="panel resume-info"><div class="panel-kicker">Curriculum vitae · PDF</div><h2>Amina Mohamed Gaani</h2><p>Software Engineering student with project experience and a growing interest in cloud engineering. Nairobi, Kenya.</p>
            <div class="resume-meta"><div><span>Education</span><span>BSc Software Engineering</span></div><div><span>Institution</span><span>USIU-Africa</span></div><div><span>Expected</span><span>2027</span></div><div><span>Document</span><span>PDF · Original CV</span></div></div>
            <div class="button-row"><a class="btn btn-primary" href="${CV_PATH}" download="Amina-Mohamed-Gaani-CV.pdf">Download CV <span>↓</span></a><a class="btn" href="${CV_PATH}" target="_blank" rel="noopener noreferrer">Open PDF <span>↗</span></a></div>
        </section><div class="panel resume-preview"><iframe src="${CV_PATH}#toolbar=0&navpanes=0" title="Preview of Amina Mohamed Gaani's CV"></iframe></div></div>`;
}

function renderContact() {
    return `${pageHeading("Contact · 10", "Let’s make useful things.", "Open to internship and entry-level opportunities, collaboration and conversations about software or cloud engineering.")}
        <div class="contact-layout"><section class="panel contact-intro"><div class="panel-kicker">Nairobi, Kenya · East Africa Time</div><h2>Have a project or opportunity in mind?</h2><p>I’m always glad to connect with people building meaningful technology. Reach out through email or find me on LinkedIn and GitHub.</p><div class="contact-note">Email is the best way to get in touch. This portfolio doesn’t use a non-functional contact form.</div></section>
            <div class="contact-list"><a class="contact-link" href="mailto:amishmohamedd@gmail.com"><span class="contact-icon">@</span><span><strong>Email</strong><small>amishmohamedd@gmail.com</small></span><span class="arrow">↗</span></a><a class="contact-link" href="https://linkedin.com/in/amina-gaani-47794b297/" target="_blank" rel="noopener noreferrer"><span class="contact-icon">in</span><span><strong>LinkedIn</strong><small>linkedin.com/in/amina-gaani-47794b297</small></span><span class="arrow">↗</span></a><a class="contact-link" href="https://github.com/Gaani4mishaa" target="_blank" rel="noopener noreferrer"><span class="contact-icon">&lt;/&gt;</span><span><strong>GitHub</strong><small>github.com/Gaani4mishaa</small></span><span class="arrow">↗</span></a></div>
        </div>`;
}

const renderers = { home: renderHome, about: renderAbout, projects: renderProjects, skills: renderSkills, experience: renderExperience, education: renderEducation, impact: renderImpact, certifications: renderCertificates, resume: renderResume, contact: renderContact };

function currentRoute() {
    const route = location.hash.replace(/^#\/?/, "").split(/[/?]/)[0].toLowerCase();
    return renderers[route] ? route : "home";
}

function navigate() {
    const route = currentRoute();
    const [label] = routes.find(([id]) => id === route) || ["Home"];
    pageLabel.textContent = label;
    renderNavigation(route);
    clearInterval(typingTimer);
    root.innerHTML = `<div class="page-enter">${renderers[route]()}</div>`;
    viewScroll.scrollTop = 0;
    if (route === "home") startTyping();
    if (route === "projects") {
        bindProjectFilters();
        loadGithubRepositories();
    }
    if (route === "skills") bindSkillFilters();
    document.title = `${label} | Amina · Engineering Command Center`;
    closeMobileNav();
}

function startTyping() {
    const target = document.getElementById("typedHeadline");
    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const phrases = ["Software Engineering Student", "Cloud Engineering Enthusiast", "Aspiring Cloud Engineer", "Full-Stack Developer", "Technology Problem Solver"];
    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = true;
    let pauseUntil = Date.now() + 1150;
    typingTimer = setInterval(() => {
        if (!document.body.contains(target)) {
            clearInterval(typingTimer);
            return;
        }
        const phrase = phrases[phraseIndex];
        if (Date.now() < pauseUntil) return;
        charIndex += deleting ? -1 : 1;
        target.textContent = phrase.slice(0, Math.max(0, charIndex));
        if (deleting && charIndex <= 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            pauseUntil = Date.now() + 230;
        } else if (!deleting && charIndex >= phrases[phraseIndex].length) {
            deleting = true;
            pauseUntil = Date.now() + 1250;
        }
    }, 62);
}

function bindProjectFilters() {
    const grid = document.getElementById("projectGrid");
    document.getElementById("projectFilters")?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;
        document.querySelectorAll("[data-filter]").forEach((item) => {
            const selected = item === button;
            item.classList.toggle("selected", selected);
            item.setAttribute("aria-pressed", String(selected));
        });
        const filter = button.dataset.filter;
        let visible = 0;
        grid.querySelectorAll(".project-card").forEach((card) => {
            const show = filter === "all" || card.dataset.category === filter;
            card.hidden = !show;
            if (show) visible++;
        });
        document.getElementById("emptyFilter").classList.toggle("visible", visible === 0);
    });
}

function bindSkillFilters() {
    document.getElementById("skillFilters")?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-skill-filter]");
        if (!button) return;
        document.querySelectorAll("[data-skill-filter]").forEach((item) => {
            const selected = item === button;
            item.classList.toggle("selected", selected);
            item.setAttribute("aria-pressed", String(selected));
        });
        document.querySelectorAll(".skill-group").forEach((card) => {
            card.hidden = button.dataset.skillFilter !== "all" && card.dataset.skillCategory !== button.dataset.skillFilter;
        });
    });
}

async function loadGithubRepositories() {
    const status = document.getElementById("githubStatus");
    if (!status || githubRequestState === "loaded" || githubRequestState === "failed") {
        if (status) updateRepoCards();
        return;
    }
    githubRequestState = "loading";
    status.textContent = "PUBLIC REPOS · LOADING";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal
        });
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        const repos = await response.json();
        if (!Array.isArray(repos)) throw new Error("Unexpected GitHub API response");
        githubRepos = repos.filter((repo) => repo && typeof repo.name === "string").map((repo) => ({
            name: repo.name,
            description: typeof repo.description === "string" ? repo.description : "",
            language: typeof repo.language === "string" ? repo.language : "",
            html_url: typeof repo.html_url === "string" ? repo.html_url : ""
        }));
        githubRequestState = "loaded";
        const currentStatus = document.getElementById("githubStatus");
        if (currentStatus) currentStatus.textContent = `GITHUB · ${githubRepos.length} PUBLIC REPOSITORIES`;
        updateRepoCards();
    } catch (error) {
        githubRequestState = "failed";
        const currentStatus = document.getElementById("githubStatus");
        if (currentStatus) currentStatus.textContent = "GITHUB UNAVAILABLE · STATIC PROJECTS SHOWN";
        console.info("GitHub repository data unavailable; using verified portfolio project information.", error);
    } finally {
        clearTimeout(timeout);
    }
}

function updateRepoCards() {
    const grid = document.getElementById("projectGrid");
    if (!grid || githubRequestState !== "loaded") return;
    const activeFilter = document.querySelector("[data-filter].selected")?.dataset.filter || "all";
    grid.innerHTML = `${projects.map(projectMarkup).join("")}<div class="empty-filter" id="emptyFilter">No projects in this category yet.</div>`;
    let visible = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
        const show = activeFilter === "all" || card.dataset.category === activeFilter;
        card.hidden = !show;
        if (show) visible++;
    });
    document.getElementById("emptyFilter").classList.toggle("visible", visible === 0);
}

function openProject(projectId) {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;
    const actions = [
        project.github ? `<a class="btn btn-primary" href="${esc(project.github)}" target="_blank" rel="noopener noreferrer">View GitHub repository ↗</a>` : "",
        project.demo ? `<a class="btn" href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">Open live demo ↗</a>` : ""
    ].join("");
    dialogContent.innerHTML = `<article class="modal-project"><div class="eyebrow">${esc(project.category)}${project.group ? " · GROUP PROJECT" : ""}</div><h2 id="dialogTitle">${esc(project.title)}</h2><p class="modal-summary">${esc(project.description)}</p><div class="tech-list">${project.tech.map((item) => `<span class="tag">${esc(item)}</span>`).join("")}</div><div class="modal-details"><section><h3>Project details</h3><ul>${project.features.map((feature) => `<li>${esc(feature)}</li>`).join("")}</ul></section><section><h3>Technology</h3><ul>${project.tech.map((technology) => `<li>${esc(technology)}</li>`).join("")}</ul></section></div><div class="modal-actions">${actions || `<span class="text-muted" style="font-size:10px">Repository or live demo link not provided.</span>`}</div></article>`;
    appDialog.showModal();
}

function openCertificate(index) {
    const certificate = certificates[index];
    if (!certificate) return;
    dialogContent.innerHTML = `<img class="certificate-modal-image" src="${esc(certificate.image)}" alt="${esc(certificate.alt)}"><div class="certificate-modal-caption"><h2 id="dialogTitle">${esc(certificate.title)}</h2><p>${esc(certificate.organization)} · ${esc(certificate.date)}${certificate.note ? ` · ${esc(certificate.note)}` : ""}</p><a class="inline-link" href="${esc(certificate.image)}" target="_blank" rel="noopener noreferrer">Open original image ↗</a></div>`;
    appDialog.showModal();
}

function showToast(message) {
    document.querySelector(".toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.append(toast);
    setTimeout(() => toast.remove(), 2600);
}

function openTerminal() {
    if (!terminalDialog.open) terminalDialog.showModal();
    setTimeout(() => document.getElementById("terminalInput").focus(), 0);
}

const terminalCommands = {
    help: () => `<span class="term-key">help</span> · list available commands\nabout · profile summary\nskills · technical toolkit\nprojects · featured work\nexperience · roles and volunteering\neducation · academic background\ngithub · profile link\ncontact · email and social links\nclear · clear terminal output`,
    about: () => "Amina Mohamed Gaani — Software Engineering student at USIU-Africa in Nairobi, Kenya. Developing practical software experience and a foundation in cloud engineering.",
    skills: () => "Programming: Python, C++, JavaScript, SQL, HTML, CSS\nWeb: Django, React, Node.js, Express\nDatabases: SQLite, PostgreSQL\nCloud & OS: AWS EC2 (foundational practice), Ubuntu Linux, Windows\nTools: Git, GitHub, networking fundamentals, troubleshooting",
    projects: () => projects.map((project) => `• ${project.title}${project.group ? " (group project)" : ""}`).join("\n"),
    experience: () => experience.map((item) => `• ${item.role} — ${item.organization} (${item.date})`).join("\n"),
    education: () => "Bachelor of Science in Software Engineering\nUnited States International University-Africa (USIU-Africa)\n2023–2027 expected",
    github: () => `GitHub: https://github.com/${GITHUB_USER}`,
    contact: () => "Email: amishmohamedd@gmail.com\nLinkedIn: linkedin.com/in/amina-gaani-47794b297/\nGitHub: github.com/Gaani4mishaa"
};

function appendTerminalCommand(command) {
    const output = document.getElementById("terminalOutput");
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `<div><span class="command-echo">amina@portfolio:~$ ${esc(command || "")}</span></div>`;
    if (command === "clear") {
        terminalTimers.splice(0).forEach(clearInterval);
        output.replaceChildren();
        return;
    }
    const result = terminalCommands[command];
    const text = result ? result() : (command ? `Command not found: ${command}. Type "help" to see available commands.` : "");
    if (text) {
        const response = document.createElement("div");
        response.className = "output";
        line.append(response);
        let character = 0;
        const timer = setInterval(() => {
            character = Math.min(text.length, character + 3);
            response.textContent = text.slice(0, character);
            output.scrollTop = output.scrollHeight;
            if (character >= text.length) {
                clearInterval(timer);
                const timerIndex = terminalTimers.indexOf(timer);
                if (timerIndex >= 0) terminalTimers.splice(timerIndex, 1);
            }
        }, 12);
        terminalTimers.push(timer);
    }
    output.append(line);
    output.scrollTop = output.scrollHeight;
}

function closeMobileNav() {
    document.body.classList.remove("menu-open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
    document.getElementById("menuToggle").setAttribute("aria-label", "Open navigation");
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const toggle = document.getElementById("themeToggle");
    toggle.textContent = theme === "dark" ? "☼" : "☾";
    toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    try {
        localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
        console.info("Theme preference could not be saved in this browser.", error);
    }
}

function setLocalTime() {
    const target = document.getElementById("localTime");
    if (!target) return;
    target.textContent = `Nairobi · ${new Intl.DateTimeFormat("en-KE", { timeZone: "Africa/Nairobi", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date())} EAT`;
}

function bindEvents() {
    document.getElementById("themeToggle").addEventListener("click", () => {
        setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
    document.getElementById("menuToggle").addEventListener("click", (event) => {
        const opened = document.body.classList.toggle("menu-open");
        event.currentTarget.setAttribute("aria-expanded", String(opened));
        event.currentTarget.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
    });
    document.getElementById("mobileScrim").addEventListener("click", closeMobileNav);
    document.getElementById("terminalLaunch").addEventListener("click", openTerminal);
    document.querySelectorAll("[data-open-terminal]").forEach((button) => button.addEventListener("click", openTerminal));
    document.querySelector(".dialog-close").addEventListener("click", () => appDialog.close());
    document.querySelector(".terminal-close").addEventListener("click", () => terminalDialog.close());
    [appDialog, terminalDialog].forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close();
        });
    });
    root.addEventListener("click", (event) => {
        const projectButton = event.target.closest("[data-project]");
        if (projectButton) {
            openProject(projectButton.dataset.project);
            return;
        }
        const certificate = event.target.closest("[data-certificate]");
        if (certificate) openCertificate(Number(certificate.dataset.certificate));
    });
    root.addEventListener("keydown", (event) => {
        const certificate = event.target.closest("[data-certificate]");
        if (certificate && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            openCertificate(Number(certificate.dataset.certificate));
        }
    });
    document.getElementById("terminalForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("terminalInput");
        const command = input.value.trim().toLowerCase();
        if (command) {
            terminalHistory.push(command);
            historyIndex = terminalHistory.length;
        }
        appendTerminalCommand(command);
        input.value = "";
    });
    document.getElementById("terminalInput").addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            historyIndex = Math.max(0, historyIndex - 1);
            event.currentTarget.value = terminalHistory[historyIndex] || "";
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            historyIndex = Math.min(terminalHistory.length, historyIndex + 1);
            event.currentTarget.value = terminalHistory[historyIndex] || "";
        }
    });
    document.addEventListener("keydown", (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            openTerminal();
        }
        if (event.key === "Escape") closeMobileNav();
    });
    window.addEventListener("hashchange", navigate);
}

try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    setTheme(savedTheme === "light" ? "light" : "dark");
} catch (error) {
    setTheme("dark");
}
bindEvents();
setLocalTime();
setInterval(setLocalTime, 60_000);
if (!location.hash) history.replaceState(null, "", `${location.pathname}${location.search}#home`);
navigate();
