import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Block from "./components/Block.jsx";
import Reveal from "./components/Reveal.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BENEFITS, CAPABILITIES, COMPARISON, FEATURES, RESOURCES, SECTIONS, SELECTION } from "./data/content.js";

const Checks = ({ items }) => (
  <ul className="checks">
    {items.map((t) => <li key={t}><Check size={18} />{t}</li>)}
  </ul>
);
const sec = (id) => SECTIONS.find((s) => s.id === id);

export default function App() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <Hero />

      <main>
        <section className="wrap" id="contents">
          <h2 className="st">Table of contents</h2>
          <div className="toc">
            {SECTIONS.map((s) => <a key={s.id} href={`#${s.id}`}><i>{s.num}</i>{s.title}</a>)}
          </div>
        </section>

        <section className="quote">
          <Reveal><blockquote>&ldquo;Where there is data smoke, there is business fire.&rdquo;<cite>Thomas Redman</cite></blockquote></Reveal>
        </section>

        <Block {...sec("preamble")}>
          <p>Software Development Analytics (SDA) brings Business Intelligence to the way software gets built. It gives teams flexible analytics without any data-engineering project on their side.</p>
          <p>An SDA tool gives every stakeholder instant access to metrics that lift engineering performance, expose bottlenecks, spread what works and support decisions backed by data.</p>
          <h3>A good SDA tool lets you:</h3>
          <Checks items={CAPABILITIES} />
        </Block>

        <Block {...sec("intro")} alt>
          <p>Staying current with trends and technology is part of a technical leader's job. SDA is a relatively new idea that is gaining traction fast.</p>
          <p>In essence it is Business Intelligence applied to the software development stack, so analysis stays adaptable and no one has to build pipelines first.</p>
          <p>This guide explains what SDA is, how it helps an engineering team and what to look for when choosing a tool. By the end you should see how SDA can streamline your process and help your team reach a new level.</p>
        </Block>

        <Block {...sec("what")}>
          <p><b>Business Intelligence (BI)</b> covers the technologies and practices used to gather, integrate, analyze and share information about business activity. Timely, accurate information improves decisions on finance, marketing, product and resources. Typical BI tools: data warehousing, data mining, reporting, OLAP, dashboards and scorecards.</p>
          <p><b>SDA</b> applies those techniques to software development. It aims for insight across the whole lifecycle: project management, coding, testing and quality assurance. It supports decisions such as spotting project risks, optimizing resources, improving quality and avoiding team burnout. SDA tools are usually plug-and-play: the provider handles warehousing and mining.</p>
          <div className="scroll">
            <table>
              <thead><tr><th></th><th>Business Intelligence</th><th>Software Development Analytics</th></tr></thead>
              <tbody>
                {COMPARISON.map(([k, a, b]) => (
                  <tr key={k}><td>{k}</td>{b ? <><td>{a}</td><td>{b}</td></> : <td colSpan={2}>{a}</td>}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note"><b>Why it matters to you:</b> SDA is one of the hottest topics in tech and can change how you run development projects. Learn the concepts, explore the resources below and consider an SDA tool to gain insight, streamline workflow and improve product quality.</p>
        </Block>

        <Block {...sec("benefits")} alt>
          <div className="cards3">
            {BENEFITS.map((b) => {
              const Icon = Icons[b.icon];
              return <article key={b.title}><span className="ic"><Icon size={22} /></span><h3>{b.title}</h3><p>{b.text}</p></article>;
            })}
          </div>
          <p>For a technical leader, SDA is a way to keep a continuous finger on the pulse of the organization: processes get leaner, products improve and resources are used well.</p>
        </Block>

        <Block {...sec("features")}>
          <p>Consider these seven capabilities before adopting a solution.</p>
          <div className="feat">
            {FEATURES.map((f, i) => <article key={f.title}><b>{i + 1}</b><h3>{f.title}</h3><p>{f.text}</p></article>)}
          </div>
          <Dashboard />
        </Block>

        <Block {...sec("wrap")} alt>
          <p>An SDA solution collects and analyzes data so technical leaders can dig into specifics and find what is hurting their teams. Decisions get faster, and even hard ones are easier to accept when they rest on data rather than gut feeling.</p>
          <p>The advantages: collect and visualize data from every part of the process, build custom dashboards, share metrics with the team and see it all in real time.</p>
          <h3>When choosing a tool, look for:</h3>
          <Checks items={SELECTION} />
          <p className="note">With these in place you can be running quickly and take your software development process to the next level.</p>
        </Block>

        <Block {...sec("resources")}>
          <h3>Resources</h3>
          <ul className="links">
            {RESOURCES.map((r) => <li key={r.href}><a href={r.href} target="_blank" rel="noopener noreferrer">{r.label}</a></li>)}
            <li>Book: <i>Accelerate</i>, by Nicole Forsgren, Jez Humble and Gene Kim</li>
          </ul>
          <h3>About the source</h3>
          <p>This website is a student web project based on the Keypup guide <i>Streamlining SDLC with Software Development Analytics: Tech Leader's Guide</i> (2023). The text is summarized in my own words; all rights to the original guide belong to Keypup. See <a href="https://www.keypup.io" target="_blank" rel="noopener noreferrer">keypup.io</a> for the original.</p>
        </Block>
      </main>

      <footer><div className="wrap"><span>Streamlining SDLC with Software Development Analytics</span><a href="#top">Back to top &uarr;</a></div></footer>
    </>
  );
}
