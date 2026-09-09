"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

const projects = [
  { number: "01", title: "Reportly", tag: "FULL-STACK", copy: "A reporting workflow designed to make information clearer and easier to act on.", url: "https://github.com/MannyG3/Reportly" },
  { number: "02", title: "Space Traffic Dashboard", tag: "REACT / NODE", copy: "Real-time satellite monitoring and collision detection with WebSockets.", url: "https://github.com/MannyG3/space-traffic-dashboard" },
  { number: "03", title: "Crop recommendation", tag: "PYTHON / ML", copy: "A machine learning project for practical crop and fertilizer guidance.", url: "https://github.com/MannyG3/Crop-and-fertilizer-recommendation" },
  { number: "04", title: "TrekMates", tag: "TYPESCRIPT", copy: "A social planning experience for people who like to explore together.", url: "https://github.com/MannyG3/TrekMates" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const skyY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <main>
      <section className="hero" id="top">
        <motion.div className="hero-video-wrap" style={{ y: skyY }}>
          <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src="/reference.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="hero-shade" />
        <motion.div className="hero-foreground" style={{ y: foregroundY }} />
        <nav className="site-nav" aria-label="Main navigation">
          <a className="wordmark" href="#top">mayur<span>.</span></a>
          <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </div>
        </nav>

        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            MAYUR MAHADEV GUND
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.9, ease: "easeOut" }}>
            Teaching technology.<br /><em>Building the future.</em>
          </motion.h1>
          <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95, duration: 0.8 }}>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        </div>
        <div className="scroll-mark"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
        <div className="hero-index">01 <span>/</span> 06</div>
      </section>

      <section className="intro-section section-shell" id="about">
        <p className="section-kicker">01 / WHO I AM</p>
        <div className="intro-grid">
          <h2>Technology is most powerful when it <i>opens a door.</i></h2>
          <div className="intro-copy"><p>My work lives where teaching meets making. I help people understand complex ideas, build confidence with technology and find the spark that keeps them learning.</p><a className="text-link" href="#experience">More about me <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="dark-section" id="experience">
        <div className="section-shell experience-layout">
          <p className="section-kicker light-kicker">02 / EXPERIENCE</p>
          <div className="experience-list">
            <div className="experience-row"><span>Jan 2024 — Present</span><div><h3>Python / Programming Trainer & Training & Placement Officer</h3><p>Turning curious learners into confident builders through code, problem-solving and opportunity.</p><span className="experience-place">K. E. Society&apos;s Rajarambapu Institute of Technology (Polytechnic), Pune</span></div><span className="row-label">EDUCATION</span></div>
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-head"><p className="section-kicker">03 / SELECTED WORK</p><p className="section-note">A few things I&apos;ve helped bring to life.</p></div>
        <div className="project-list">{projects.map((project) => <a className="project-row" href={project.url} target="_blank" rel="noreferrer" key={project.number}><span className="project-number">{project.number}</span><div><p>{project.tag}</p><h3>{project.title}</h3><span>{project.copy}</span></div><ArrowUpRight className="project-arrow" size={22} strokeWidth={1.3} /></a>)}</div>
      </section>

      <section className="skills-section" id="skills"><div className="section-shell skills-layout"><p className="section-kicker">04 / TOOLKIT</p><div><h2>Things I like<br /><i>to work with.</i></h2><div className="skill-cloud"><span>Python</span><span>JavaScript</span><span>TypeScript</span><span>React</span><span>Node.js</span><span>C / C++</span><span>SQL</span><span>REST APIs</span><span>Git & GitHub</span><span>Data Structures</span><span>Algorithms</span><span>Artificial intelligence</span><span>Machine learning</span><span>Cloud</span><span>Robotics</span><span>Mentoring</span></div></div></div></section>

      <section className="impact-section section-shell"><p className="section-kicker">05 / IMPACT</p><div className="impact-grid"><div><strong>500<span>+</span></strong><p>students mentored</p></div><div><strong>40<span>+</span></strong><p>workshops conducted</p></div><div><strong>25<span>+</span></strong><p>projects guided</p></div><div><strong>∞</strong><p>questions welcomed</p></div></div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><p className="section-kicker">06 / CONTACT</p><h2>Let&apos;s build something<br /><i>meaningful.</i></h2><a className="contact-link" href="mailto:mayurgund3333@gmail.com">mayurgund3333@gmail.com <ArrowUpRight size={21} /></a><div className="contact-footer"><span>mayur.</span><div className="social-links"><a href="https://github.com/MannyG3" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mayurgund99/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://leetcode.com/u/mayurgund3333/" target="_blank" rel="noreferrer">LeetCode</a></div><a href="#top">Back to top ↑</a></div></div></section>
    </main>
  );
}
