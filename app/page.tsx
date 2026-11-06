const stack = [
  {
    no: "01",
    name: "JavaScript",
    role: "The language",
    text: "Runs in every browser and on the server. Everything else on this page is built on top of it.",
    tags: ["ES2025", "async/await", "modules"],
  },
  {
    no: "02",
    name: "TypeScript",
    role: "The safety net",
    text: "JavaScript with types. Catches mistakes while you type instead of when your users click.",
    tags: ["types", "autocomplete", "refactoring"],
  },
  {
    no: "03",
    name: "React",
    role: "The UI layer",
    text: "Build interfaces from small components. Describe what the screen should look like, React keeps it in sync.",
    tags: ["components", "hooks", "server components"],
  },
  {
    no: "04",
    name: "Next.js",
    role: "The framework",
    text: "Routing, rendering, data fetching and deployment, decided for you so you can focus on the product.",
    tags: ["app router", "SSR", "edge"],
  },
];

const steps = [
  { week: "Week 1–2", title: "Learn the language", text: "Variables, functions, arrays, objects, promises. Build small things in the browser console." },
  { week: "Week 3–4", title: "Think in components", text: "Props, state, effects. Rebuild a page you use every day as React components." },
  { week: "Week 5", title: "Add types", text: "Convert one project to TypeScript. Let the compiler teach you where your code was fragile." },
  { week: "Week 6+", title: "Ship with Next.js", text: "File-based routes, server components, API routes. Deploy something real and share the link." },
];

const faqs = [
  { q: "Do I need to learn JavaScript before React?", a: "Yes, the basics at least. React is just JavaScript, so the stronger your JS, the less React feels like magic." },
  { q: "Is Next.js only for big projects?", a: "No. A one-page site like this one is a perfectly good Next.js projec*******cales up when you need it to." },
  { q: "Should I start with TypeScript?", a: "Start with plain JavaScript for a couple of weeks, then switch. You will appreciate what types do for you." },
];

const css = `
  body { background: #FAFAF7 !important; color: #141414 !important; margin: 0; }
  .lp { --ink:#141414; --muted:#5F5E5A; --line:#E4E2DA; --paper:#FAFAF7; --card:#FFFFFF; --accent:#D9480F;
        font-family: var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
        color: var(--ink); background: var(--paper); line-height: 1.55; -webkit-font-smoothing: antialiased; }
  .lp * { box-sizing: border-box; }
  .lp a { color: inherit; text-decoration: none; }
  .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
  .mono { font-family: var(--font-geist-mono), ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace; }

  .nav { position: sticky; top: 0; z-index: 10; background: rgba(250,250,247,.92); backdrop-filter: blur(6px); border-bottom: 1px solid var(--line); }
  .nav .wrap { display: flex; align-items: center; justify-content: space-between; height: 64px; }
  .logo { font-weight: 700; letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; }
  .logo span { width: 22px; height: 22px; background: var(--ink); color: var(--paper); display: grid; place-items: center; font-size: 12px; border-radius: 4px; }
  .links { display: flex; gap: 28px; font-size: 14px; color: var(--muted); }
  .links a:hover { color: var(--ink); }

  .btn { display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 20px; border-radius: 8px; font-size: 15px; font-weight: 500; border: 1px solid var(--ink); transition: transform .15s ease; }
  .btn:hover { transform: translateY(-1px); }
  .btn-dark { background: var(--ink); color: var(--paper) !important; }
  .btn-light { background: transparent; }

  .hero { padding: 96px 0 72px; border-bottom: 1px solid var(--line); }
  .eyebrow { font-size: 13px; color: var(--muted); display: inline-flex; gap: 8px; align-items: center; border: 1px solid var(--line); padding: 6px 12px; border-radius: 999px; background: var(--card); }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
  .hero h1 { font-size: clamp(44px, 7vw, 88px); line-height: 1.0; letter-spacing: -0.045em; font-weight: 700; margin: 28px 0 24px; max-width: 14ch; }
  .hero h1 em { font-style: normal; color: var(--accent); }
  .hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: end; }
  .lead { font-size: 19px; color: var(--muted); max-width: 46ch; margin: 0 0 32px; }
  .cta { display: flex; gap: 12px; flex-wrap: wrap; }

  .code { background: var(--ink); color: #EDEBE4; border-radius: 12px; overflow: hidden; font-size: 13.5px; }
  .code-top { display: flex; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid #2A2A2A; color: #8C8A84; font-size: 12px; }
  .code pre { margin: 0; padding: 20px; line-height: 1.7; overflow-x: auto; }
  .k { color: #F08C5A; } .s { color: #B8D99A; } .c { color: #6E6C66; } .t { color: #8FB8E8; }

  .stats { display: grid; grid-template-columns: repeat(4, 1fr); border-bottom: 1px solid var(--line); }
  .stat { padding: 32px 24px; border-right: 1px solid var(--line); }
  .stat:last-child { border-right: 0; }
  .stat b { display: block; font-size: 32px; letter-spacing: -0.03em; }
  .stat small { color: var(--muted); font-size: 14px; }

  section.block { padding: 96px 0; border-bottom: 1px solid var(--line); }
  .head { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 48px; flex-wrap: wrap; }
  .head h2 { font-size: clamp(32px, 4vw, 48px); letter-spacing: -0.035em; line-height: 1.05; margin: 0; max-width: 18ch; }
  .head p { color: var(--muted); max-width: 40ch; margin: 0; }
  .label { font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: var(--accent); margin-bottom: 14px; display: block; }

  .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; background: var(--card); }
  .card { padding: 28px; border-right: 1px solid var(--line); display: flex; flex-direction: column; gap: 14px; min-height: 300px; transition: background .2s; }
  .card:last-child { border-right: 0; }
  .card:hover { background: #F4F3EE; }
  .card .no { font-size: 13px; color: var(--muted); }
  .card h3 { font-size: 24px; letter-spacing: -0.02em; margin: 0; }
  .card .role { font-size: 14px; color: var(--accent); margin-top: -8px; }
  .card p { margin: 0; color: var(--muted); font-size: 15px; flex: 1; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .tag { font-size: 12px; border: 1px solid var(--line); padding: 3px 8px; border-radius: 4px; color: var(--muted); }

  .layers { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .stackviz { display: flex; flex-direction: column; gap: 8px; }
  .layer { border: 1px solid var(--line); background: var(--card); border-radius: 8px; padding: 18px 20px; display: flex; justify-content: space-between; font-size: 15px; }
  .layer:first-child { background: var(--ink); color: var(--paper); border-color: var(--ink); }
  .layer span:last-child { color: var(--muted); font-size: 13px; }
  .layer:first-child span:last-child { color: #A8A69F; }
  .points { list-style: none; padding: 0; margin: 0; }
  .points li { padding: 18px 0; border-top: 1px solid var(--line); display: grid; grid-template-columns: 32px 1fr; gap: 12px; }
  .points li:last-child { border-bottom: 1px solid var(--line); }
  .points b { display: block; margin-bottom: 2px; }
  .points p { margin: 0; color: var(--muted); font-size: 15px; }
  .points i { font-style: normal; color: var(--accent); font-size: 13px; padding-top: 2px; }

  .path { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .step { border-top: 2px solid var(--ink); padding-top: 20px; }
  .step .w { font-size: 13px; color: var(--muted); }
  .step h4 { font-size: 20px; letter-spacing: -0.02em; margin: 8px 0; }
  .step p { margin: 0; color: var(--muted); font-size: 15px; }

  .faq { max-width: 760px; }
  .faq details { border-top: 1px solid var(--line); padding: 22px 0; }
  .faq details:last-child { border-bottom: 1px solid var(--line); }
  .faq summary { cursor: pointer; font-size: 18px; font-weight: 500; list-style: none; display: flex; justify-content: space-between; gap: 16px; }
  .faq summary::-webkit-details-marker { display: none; }
  .faq summary::after { content: "+"; color: var(--muted); font-weight: 400; }
  .faq details[open] summary::after { content: "–"; }
  .faq p { color: var(--muted); margin: 12px 0 0; max-width: 60ch; }

  .final { padding: 112px 0; text-align: center; }
  .final h2 { font-size: clamp(40px, 6vw, 72px); letter-spacing: -0.045em; line-height: 1; margin: 0 auto 20px; max-width: 16ch; }
  .final p { color: var(--muted); font-size: 18px; margin: 0 auto 32px; max-width: 44ch; }
  .final .cta { justify-content: center; }
  .install { margin-top: 28px; display: inline-block; font-size: 14px; border: 1px solid var(--line); background: var(--card); padding: 10px 16px; border-radius: 8px; color: var(--muted); }
  .install b { color: var(--ink); font-weight: 500; }

  footer { border-top: 1px solid var(--line); padding: 28px 0; font-size: 14px; color: var(--muted); }
  footer .wrap { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; }

  @media (max-width: 900px) {
    .links { display: none; }
    .hero { padding: 64px 0 56px; }
    .hero-grid, .layers { grid-template-columns: 1fr; gap: 40px; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .stat:nth-child(2) { border-right: 0; }
    .stat:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .grid4 { grid-template-columns: 1fr 1fr; }
    .card:nth-child(2) { border-right: 0; }
    .card:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .path { grid-template-columns: 1fr 1fr; gap: 32px 24px; }
    section.block { padding: 72px 0; }
  }
  @media (max-width: 560px) {
    .grid4, .path { grid-template-columns: 1fr; }
    .card { border-right: 0 !important; border-bottom: 1px solid var(--line); min-height: auto; }
    .card:last-child { border-bottom: 0; }
  }
`;

export default function Home() {
  return (
    <div className="lp">
      <style>{css}</style>

      {/* Nav */}
      <header className="nav">
        <div className="wrap">
          <a href="#" className="logo"><span className="mono">JS</span>modern web</a>
          <nav className="links">
            <a href="#stack">Stack</a>
            <a href="#how">How it fits</a>
            <a href="#path">Learning path</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#path" className="btn btn-dark">Start learning</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" /> JavaScript · React · Next.js</span>
          <div className="hero-grid">
            <div>
              <h1>Build the web the way it&apos;s <em>built today.</em></h1>
              <p className="lead">
                One language, one UI library, one framework. A practical guide to the stack behind most
                modern websites, from your first function to your first deploy.
              </p>
              <div className="cta">
                <a href="#path" className="btn btn-dark">See the roadmap →</a>
                <a href="#stack" className="btn btn-light">Explore the stack</a>
              </div>
            </div>

            <div className="code mono">
              <div className="code-top"><span>app/page.tsx</span><span>Next.js</span></div>
              <pre>
<span className="c">{"// a server component — runs on the server"}</span>{"\n"}
<span className="k">export default async function</span> <span className="t">Page</span>() {"{"}{"\n"}
{"  "}<span className="k">const</span> posts = <span className="k">await</span> getPosts();{"\n"}
{"\n"}
{"  "}<span className="k">return</span> ({"\n"}
{"    "}&lt;<span className="t">ul</span>&gt;{"\n"}
{"      "}{"{"}posts.map(p =&gt; ({"\n"}
{"        "}&lt;<span className="t">li</span> key={"{"}p.id{"}"}&gt;{"{"}p.title{"}"}&lt;/<span className="t">li</span>&gt;{"\n"}
{"      "})){"}"}{"\n"}
{"    "}&lt;/<span className="t">ul</span>&gt;{"\n"}
{"  "});{"\n"}
{"}"}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="wrap">
        <div className="stats">
          <div className="stat"><b>98%</b><small>of websites use JavaScript</small></div>
          <div className="stat"><b>#1</b><small>most used UI library: React</small></div>
          <div className="stat"><b>1</b><small>language, front to back</small></div>
          <div className="stat"><b>6 wks</b><small>to your first real deploy</small></div>
        </div>
      </div>

      {/* Stack */}
      <section className="block" id="stack">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="label mono">The stack</span>
              <h2>Four tools. Each does one job well.</h2>
            </div>
            <p>You don&apos;t need twenty libraries. These four cover almost everything a modern web app needs.</p>
          </div>
          <div className="grid4">
            {stack.map((s) => (
              <article className="card" key={s.no}>
                <span className="no mono">{s.no}</span>
                <h3>{s.name}</h3>
                <span className="role">{s.role}</span>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => <span className="tag mono" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it fits */}
      <section className="block" id="how">
        <div className="wrap layers">
          <div className="stackviz mono">
            <div className="layer"><span>Next.js</span><span>routing · rendering · deploy</span></div>
            <div className="layer"><span>React</span><span>components · state</span></div>
            <div className="layer"><span>TypeScript</span><span>types · tooling</span></div>
            <div className="layer"><span>JavaScript</span><span>the runtime language</span></div>
          </div>
          <div>
            <span className="label mono">How it fits together</span>
            <h2 style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.035em", lineHeight: 1.05, margin: "0 0 32px" }}>
              Each layer stands on the one below.
            </h2>
            <ul className="points">
              <li><i className="mono">a</i><div><b>Write once, run everywhere</b><p>The same JavaScript powers your buttons and your API.</p></div></li>
              <li><i className="mono">b</i><div><b>Components, not pages</b><p>React lets you reuse pieces instead of copying HTML.</p></div></li>
              <li><i className="mono">c</i><div><b>Sensible defaults</b><p>Next.js handles the boring parts: routes, images, caching, SEO.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Path */}
      <section className="block" id="path">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="label mono">Learning path</span>
              <h2>From zero to shipped in six weeks.</h2>
            </div>
            <p>An hour a day is enough. Build something at every step, even if it&apos;s small.</p>
          </div>
          <div className="path">
            {steps.map((s) => (
              <div className="step" key={s.title}>
                <span className="w mono">{s.week}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="block" id="faq">
        <div className="wrap">
          <div className="head">
            <div>
              <span className="label mono">FAQ</span>
              <h2>Common questions.</h2>
            </div>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final">
        <div className="wrap">
          <h2>Your next project starts with one command.</h2>
          <p>Create a Next.js app, open page.tsx, and start building.</p>
          <div className="cta">
            <a href="https://nextjs.org/docs" className="btn btn-dark">Read the docs →</a>
            <a href="https://react.dev/learn" className="btn btn-light">Learn React</a>
          </div>
          <div className="install mono"><b>$</b> npx create-next-app@latest</div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span className="mono">JavaScript · TypeScript · React · Next.js</span>
        </div>
      </footer>
    </div>
  );
}