/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { ArchExplorer } from "./components/ArchExplorer";
import { SQLSandbox } from "./components/SQLSandbox";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Top sticky navigation menu bar */}
      <Navigation />

      {/* Main viewport sections flow */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Story Section */}
        <About />

        {/* Skill Bento Section */}
        <Skills />

        {/* Experience timeline */}
        <Timeline />

        {/* Clean Architecture Onion layers visualizer */}
        <ArchExplorer />

        {/* SQL & EF Optimizer simulator playground */}
        <SQLSandbox />

        {/* Projects Tab Showcase (With Overlay Drawers) */}
        <Projects />

        {/* Credentials and Certifications */}
        <Certifications />

        {/* Achievements, Activities & Research Awards */}
        <Achievements />

        {/* Contact channels direct console */}
        <Contact />
      </main>

      {/* Elegant structural developer footer */}
      <footer className="bg-slate-900 border-t border-slate-850 py-12 text-slate-400 text-xs font-sans">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-white font-bold font-display">
              <Terminal className="w-4 h-4 text-indigo-400" />
              Youssef Mohamed Ali
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
              Backend Software Engineer specializing in scalable enterprise web architectures, .NET core API paradigms, and relational database indexing pipelines.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-[10px] font-mono text-slate-455">
            <div className="flex gap-4 mb-1">
              <a href="https://github.com/JoeGitHubPro" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                github.com/JoeGitHubPro
              </a>
              <a href="https://www.linkedin.com/in/youssef-mohamed-ali/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                linkedin.com/in/youssef-mohamed-ali
              </a>
            </div>
            <span>HQ Location: Suez / Ismailia, Egypt</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" /> Secured and verified portfolio instance.
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-slate-850 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-550">
          <span>&copy; {new Date().getFullYear()} Youssef Mohamed Ali. All rights reserved.</span>
          
          <button
            onClick={scrollToTop}
            className="text-slate-400 hover:text-white flex items-center gap-1 font-mono hover:underline cursor-pointer"
            id="footer-back-to-top"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
