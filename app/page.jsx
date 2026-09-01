const links = {
  github: "https://github.com/AkramCodeer",
  linkedin: "https://www.linkedin.com/in/akram-khan-5a7a06201/",
  email: "mailto:akram1612khan@gmail.com",
};
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Angular",
  "Firebase",
  "REST APIs",
  "Git & GitHub",
  "OpenAI API",
  "Generative AI",
  "Speech-to-Text",
  "Responsive UI",
];
const contributionWeeks = Array.from({ length: 53 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const value = (week * 11 + day * 7 + (week % 5) * 3) % 13;
    return value < 4 ? 0 : value < 7 ? 1 : value < 10 ? 2 : value < 12 ? 3 : 4;
  })
);
const contributionMonths = [[0, "Sep"], [4, "Oct"], [8, "Nov"], [13, "Dec"], [17, "Jan"], [21, "Feb"], [26, "Mar"], [30, "Apr"], [35, "May"], [39, "Jun"], [43, "Jul"], [48, "Aug"]];
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="mark" href="#home" aria-label="Homepage">
          AK<span>°</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#history">History</a>
          <a href="#skills">Skills</a>
          <a href="#connect">Connect</a>
        </nav>
        <a className="nav-cta" href={links.email}>
          Let&apos;s talk <Arrow />
        </a>
      </header>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> FULL STACK & AI DEVELOPER · INDIA
          </p>
          <h1>
            I build web experiences that <em>move</em> people.
          </h1>
          <p className="lede">
            A developer with an engineering foundation, creating clean
            interfaces, AI-powered tools, and dependable products from first
            idea to final interaction.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              See selected work <Arrow />
            </a>
            <a
              className="inline-link"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-ring" />
          <div className="hero-disc">
            <span>
              OPEN TO
              <br />
              COLLABORATE
              <br />· 2024 ·
            </span>
          </div>
          <div className="hero-chip">
            BUILD
            <br />
            WITH
            <br />
            PURPOSE
          </div>
          <div className="hero-star">✦</div>
          <p className="hero-caption">
            turning ambitious
            <br />
            ideas into the web
          </p>
        </div>
        <p className="scroll-note">
          SCROLL TO EXPLORE <b />
        </p>
      </section>
      <section className="intro shell">
        <p className="section-label">01 / WHAT DRIVES ME</p>
        <div>
          <p className="display-copy">
            I care about the details that make a product feel{" "}
            <em>effortless</em> — the ones users may never notice, but always{" "}
            <strong>feel.</strong>
          </p>
          <div className="numbers">
            <div>
              <b>01</b>
              <span>
                Engineering-led
                <br />
                problem solving
              </span>
            </div>
            <div>
              <b>02</b>
              <span>
                AI-powered web
                <br />
                experiences
              </span>
            </div>
            <div>
              <b>03</b>
              <span>
                Curiosity, always
                <br />
                in progress
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <div className="shell">
          <div className="section-top">
            <p className="section-label">02 / SELECTED WORK</p>
            <div>
              <h2>
                A few things I&apos;ve been <em>building.</em>
              </h2>
              <p>
                Practical products built around real user needs, from online
                shopping journeys to tools that help people create stronger resumes.
              </p>
            </div>
          </div>
          <div className="project-grid">
            <article className="project project-lime">
              <div className="browser">
                <div className="browser-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="dash">
                  <aside />
                  <div>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="project-meta">
                <p>
                  E-COMMERCE / 01
                </p>
                <h3>Shop My Uniform</h3>
                <span>Online uniform shopping experience</span>
                <div className="project-actions">
                  <a href="https://shop-my-uniform-zeta.vercel.app/" target="_blank" rel="noreferrer">Live site <Arrow /></a>
                  <a href="https://github.com/AkramCodeer/shopMyUniform" target="_blank" rel="noreferrer">Source code <Arrow /></a>
                </div>
              </div>
            </article>
            <article className="project project-peach">
              <div className="phone">
                <div className="notch" />
                <p>
                  Build
                  <br />
                  <em>your story.</em>
                </p>
                <div className="phone-card" />
                <div className="phone-line" />
              </div>
              <div className="project-meta">
                <p>
                  PRODUCTIVITY / 02
                </p>
                <h3>Resume Builder</h3>
                <span>Create and structure professional resumes</span>
                <div className="project-actions">
                  <a href="https://resune-builder-uy2h.vercel.app/" target="_blank" rel="noreferrer">Live site <Arrow /></a>
                  <a href="https://github.com/AkramCodeer/ResuneBuilder" target="_blank" rel="noreferrer">Source code <Arrow /></a>
                </div>
              </div>
            </article>
          </div>
          <p className="project-note">
            Explore more projects, experiments, and source code on{" "}
            <a href={links.github} target="_blank" rel="noreferrer">
              github.com/AkramCodeer ↗
            </a>
          </p>
        </div>
      </section>
      <section className="ai-section">
        <div className="shell ai-inner">
          <div>
            <p className="section-label">03 / AI & GENERATIVE WORK</p>
            <h2>
              Making AI feel
              <br />
              <em>useful, not noisy.</em>
            </h2>
            <p>
              I explore AI as a product capability: building interfaces that
              turn speech into text, use generative models to help people
              respond, and make complex tools feel approachable.
            </p>
            <a
              className="button button-dark"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              Explore my AI work on GitHub <Arrow />
            </a>
          </div>
          <div className="ai-card">
            <div className="wave">
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <p>LIVE CONVERSATION</p>
            <h3>
              Transcribe.
              <br />
              Understand.
              <br />
              <em>Respond.</em>
            </h3>
            <span>GPT-3.5 SUGGESTED RESPONSE</span>
          </div>
        </div>
      </section>
      <section className="github-history" id="history">
        <div className="shell history-inner">
          <div className="history-heading">
            <p className="section-label">04 / GITHUB ACTIVITY</p>
            <div>
              <h2>Committed to the <em>craft.</em></h2>
              <p>A year of building, learning, and shipping ideas—one green square at a time.</p>
            </div>
          </div>
          <a className="contribution-card" href={links.github} target="_blank" rel="noreferrer" aria-label="View Akram Khan's GitHub contribution history">
            <div className="contribution-topline"><span>CONTRIBUTION HISTORY</span><span>LAST 12 MONTHS <Arrow /></span></div>
            <div className="contribution-chart" role="img" aria-label="GitHub-style contribution chart for the last 12 months">
              <div className="month-labels">
                {contributionMonths.map(([week, month]) => <span key={month} style={{ gridColumnStart: week + 1 }}>{month}</span>)}
              </div>
              <div className="chart-body">
                <div className="day-labels" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
                <div className="contribution-grid">
                  {contributionWeeks.flatMap((days, week) => days.map((level, day) => <i key={`${week}-${day}`} className={`level-${level}`} title={`${level} contribution level`} />))}
                </div>
              </div>
            </div>
            <div className="contribution-footer"><span>Keep showing up. The work adds up.</span><span className="legend">Less <i className="level-0" /><i className="level-1" /><i className="level-2" /><i className="level-3" /><i className="level-4" /> More</span></div>
          </a>
        </div>
      </section>
      <section className="skills shell" id="skills">
        <p className="section-label">05 / TOOLKIT</p>
        <div>
          <h2>
            Fluent in the <em>full</em> picture.
          </h2>
          <p className="skills-lede">
            I work across the web stack, with a growing focus on AI-powered
            experiences and helpful automation.
          </p>
          <div className="skill-cloud">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={
                  index === 1 || index === 3 || index === 11 ? "accent" : ""
                }
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="connect" id="connect">
        <div className="shell connect-inner">
          <p className="section-label">06 / KEEP IN TOUCH</p>
          <h2>
            Let&apos;s make something
            <br />
            <em>worth opening.</em>
          </h2>
          <p className="connect-copy">
            Looking for a collaborator, a developer, or simply want to share an
            idea? My inbox and social profiles are open.
          </p>
          <div className="socials">
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <small>01</small> LinkedIn <Arrow />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <small>02</small> GitHub <Arrow />
            </a>
            <a href={links.email}>
              <small>03</small> Email me <Arrow />
            </a>
          </div>
          <footer>
            <span>© 2024 Akram Khan</span>
            <span>Made with focus & curiosity.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
