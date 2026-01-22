// src/app/page.tsx

const LINKS = {
  github: "https://github.com/Jerold2105",
  linkedin: "https://www.linkedin.com/in/jerold-anbarasan/",
  email: "mailto:jeroldanbarasan@gmail.com",
  resume: "/Jerold_Anbarasan_Resume",
};

type Project = {
  name: string;
  oneLiner: string;
  whatItDoes: string[];
  stack: string[];
  ethics: string[];
  links: { demo?: string; repo?: string };
};

const projects: Project[] = [
  {
    name: "WebSentry AI",
    oneLiner: "AI-assisted web application security reviewer (permission-only, non-destructive).",
    whatItDoes: [
      "Guided security review workflow focused on common web weaknesses",
      "Produces prioritized, human-readable findings with mitigation guidance",
      "Optional LLM support behind a feature-flag for safe, controlled usage",
    ],
    stack: ["Python", "Playwright", "CLI", "HTML/JSON Reports"],
    ethics: [
      "Permission-only testing with clear scope limits",
      "Lightweight checks (no brute force / no destructive actions)",
      "Transparent scope: analysis tool, not a vulnerability scanner",
    ],
    links: {
      repo: "https://github.com/Jerold2105/websentry-ai",
    },
  },
  {
    name: "PQC-Sim",
    oneLiner: "Post-quantum cryptography KEM benchmarking dashboard with exportable results.",
    whatItDoes: [
      "Runs local KEM benchmarks and compares performance across algorithms",
      "Displays results and exports JSON for analysis",
      "Built end-to-end as a portfolio-grade security + crypto project",
    ],
    stack: ["Python", "liboqs", "Benchmarking", "Dashboard", "JSON Export"],
    ethics: [
      "Benchmarks computed locally (no private crypto workloads sent to a server)",
      "Designed for education + performance comparison use cases",
    ],
    links: {
      demo: "https://pqc-sim.onrender.com/",
      repo: "https://github.com/Jerold2105/pqc-sim",
    },
  },
  {
    name: "PhishGuard – Chrome Extension",
    oneLiner:
      "Lightweight Chrome extension that helps users assess suspicious links and websites while browsing.",
    whatItDoes: [
      "Surfaces visual indicators for potentially suspicious URLs and page characteristics",
      "Helps users pause and evaluate links before interacting with them",
      "Designed for browsing awareness rather than automated blocking",
    ],
    stack: ["Chrome Extensions", "JavaScript", "Manifest V3", "Client-side logic"],
    ethics: [
      "Privacy-first by design: no browsing data is transmitted externally",
      "Advisory tool only — assists decision-making, does not label sites as malicious",
    ],
    links: {
      demo: "https://chromewebstore.google.com/detail/oenppgillpgkoofdgieifildfgkedbaa",
      repo: "https://github.com/Jerold2105/phishguard-core",
    },
  },
];

function Nav() {
  return (
    <div className="nav">
      <div className="navInner">
        <div className="brand">
          <span>Jerold Anbarasan</span>
          <span className="pill">Cybersecurity • AI • AppSec</span>
        </div>

        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card">
      <div className="cardTitle">
        <div>
          <h3>{p.name}</h3>
          <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
            {p.oneLiner}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {p.links.demo ? (
            <a className="btn btnPrimary" href={p.links.demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="tagRow">
        {p.stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="muted" style={{ fontWeight: 700, marginTop: 8 }}>
        What it does
      </div>
      <ul className="list">
        {p.whatItDoes.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <div className="muted" style={{ fontWeight: 700, marginTop: 12 }}>
        Security & ethics
      </div>
      <ul className="list">
        {p.ethics.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <div className="ctaRow" style={{ marginTop: 14 }}>
        {p.links.repo ? (
          <a className="btn" href={p.links.repo} target="_blank" rel="noreferrer">
            GitHub Repo →
          </a>
        ) : null}
        {p.links.demo ? (
          <a className="btn btnPrimary" href={p.links.demo} target="_blank" rel="noreferrer">
            View Demo →
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Nav />

      <main className="container">
        <section className="hero">
          <div>
            <h1 className="h1">
              Building ethical security tools <br />
              with AI + automation.
            </h1>

            <p className="sub">
              Cybersecurity grad student focused on AppSec and practical tooling. I build projects that
              are recruiter-readable, engineer-usable, and designed with clear ethical guardrails.
            </p>

            <div className="tagRow">
              <span className="tag">CEH</span>
              <span className="tag">Google Cybersecurity</span>
              <span className="tag">Python</span>
              <span className="tag">Playwright</span>
              <span className="tag">LLMs</span>
              <span className="tag">PQC</span>
              <span className="tag">Chrome Extension</span>
            </div>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="#projects">
                See Projects
              </a>
              <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={LINKS.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>

          <div className="card" style={{ alignSelf: "start" }}>
            <div className="muted" style={{ fontWeight: 700, marginBottom: 10 }}>
              Quick highlights
            </div>
            <ul className="list">
              <li>Shipped three portfolio-grade projects (tools + browser extension)</li>
              <li>Ethical scope boundaries + safe-by-design defaults</li>
              <li>LLM usage behind flags + reproducible output formats</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p className="muted">
            Shipped projects — each with a clear problem statement, usable output, and honest scope.
          </p>

          <div className="cardGrid">
            {projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p className="muted" style={{ lineHeight: 1.8 }}>
            I’m Jerold (Jay), an M.S. Cybersecurity graduate student with an emphasis in Artificial Intelligence. I build practical, ethical security tooling that uses AI and automation to help engineers understand risk, reproduce issues reliably, and implement fixes that meaningfully reduce attack surface.I previously worked as an Associate QA at Amazon Development Center, where I gained experience working with production systems and test automation. My current focus areas include application security reviews, AI-assisted security tooling, secure automation, browser-based security extensions, and post-quantum cryptography.
          </p>
          <ul className="list">
            <li>Experience: Associate QA, Amazon Development Center (Jul 2022 – Jun 2023)</li>
            <li>Education: M.S. Cybersecurity (AI emphasis)</li>
             <li>Focus: AppSec, AI-assisted security tooling, secure automation, post-quantum crypto</li>
          
         </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="muted">Want to collaborate, review my work, or discuss roles?</p>
          <div className="ctaRow">
            <a className="btn btnPrimary" href={LINKS.email}>
              Email me
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
          </div>
          
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Jerold Anbarasan — Built with Next.js
        </footer>
      </main>
    </>
  );
}
