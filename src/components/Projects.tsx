/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, ArrowRight, X, Layers, Settings, ShieldAlert, BadgeCheck, CheckCircle2 } from "lucide-react";

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filters mapping
  const filteredProjects = projectsData.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Web API") return p.category === "Web API" || p.category === "System Utility";
    if (activeTab === "Full Stack") return p.category === "Full Stack";
    if (activeTab === "Desktop") return p.category === "Desktop App";
    return true;
  });

  return (
    <section className="py-20 bg-[#fafcfd] border-y border-slate-100" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 font-mono mb-3">
              <Layers className="w-3.5 h-3.5" /> CURATED CODEBASES
            </div>
            <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              Case Studies &amp; Projects
            </h2>
            <p className="text-slate-500 max-w-xl text-sm leading-relaxed mt-2">
              Deep dive into code structures and solving high-concurrency challenges. Click any card to inspect full database schema choices, architectural decisions, and performance metrics.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex bg-slate-100/90 p-1 rounded-xl border border-slate-200/40 self-start">
            {["All", "Web API", "Full Stack", "Desktop"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold font-display rounded-lg transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-white text-indigo-700 shadow-sm border border-indigo-100/10"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                id={`tab-project-${tab.toLowerCase()}`}
              >
                {tab} {tab !== "All" && "Type"}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          <AnimatePresence mode="popLayout animate">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200/75 hover:border-indigo-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer h-full"
                onClick={() => setSelectedProject(p)}
                id={`project-card-${p.id}`}
              >
                {/* Upper Body context */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {p.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-medium">
                      {p.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-xs lines-clamp-3 mt-1.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Primary metric badge if exists */}
                  {p.metrics && p.metrics.length > 0 && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono font-semibold uppercase">{p.metrics[0].label}</span>
                      <span className="text-xs font-bold text-slate-800 font-mono">{p.metrics[0].value}</span>
                    </div>
                  )}
                </div>

                {/* Footer specs */}
                <div className="bg-slate-50/60 p-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] font-mono font-medium text-slate-650 bg-white border border-slate-150 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="text-[8px] font-mono text-slate-400 flex items-center">
                        +{p.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-900 font-semibold group-hover:text-indigo-650 font-display transition-colors">
                    Case Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Case Slide Over Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/70 cursor-pointer"
                id="drawer-backdrop"
              />

              {/* Slide Drawer Workspace Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative bg-white w-full max-w-2xl h-screen shadow-2xl flex flex-col justify-between overflow-y-auto"
                id="project-drawer"
              >
                {/* Header detail */}
                <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 p-6 flex items-center justify-between z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {selectedProject.category} Case Study
                    </span>
                    <h2 className="text-xl font-bold font-display text-slate-905">{selectedProject.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-450 hover:text-slate-900 bg-slate-100 hover:bg-slate-150 rounded-xl transition-colors"
                    id="btn-close-drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Workspace */}
                <div className="flex-1 p-6 sm:p-8 space-y-8 font-sans">
                  {/* Summary Metric Counters */}
                  {selectedProject.metrics && (
                    <div className="grid grid-cols-3 gap-3 bg-[#f8fafc] p-4 rounded-2xl border border-slate-205/60 text-center">
                      {selectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="text-[9px] uppercase font-mono text-slate-400 block tracking-wider font-semibold">{m.label}</span>
                          <span className="text-sm font-bold font-mono text-indigo-755 block leading-none">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Operational context overview */}
                  <div className="space-y-2.5">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold">1. Functional Narrative</h3>
                    <p className="text-sm text-slate-650 leading-relaxed font-sans font-normal">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Problem Solved Panel */}
                  <div className="space-y-3 bg-indigo-50/20 p-5 rounded-2xl border border-indigo-100/50">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-700 font-bold flex items-center gap-1.5 leading-none">
                      <ShieldAlert className="w-4 h-4 text-indigo-500" /> Target Bottleneck &amp; Problem Solved
                    </h3>
                    <p className="text-xs text-slate-650 leading-relaxed font-sans">
                      {selectedProject.problemSolved}
                    </p>
                  </div>

                  {/* Core Architectural decisions */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-slate-450" /> 2. Key Architecture Commitments
                    </h3>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProject.architectureChoices.map((c, idx) => (
                        <li key={idx} className="bg-slate-50 border border-slate-200/50 p-3.5 rounded-xl text-xs text-slate-750 font-sans leading-relaxed flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed features breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-slate-450" /> 3. Detailed Operational Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.keyFeatures.map((f, idx) => (
                        <div key={idx} className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs text-xs space-y-1.5">
                          <span className="text-[10px] font-mono text-indigo-600 font-bold">FE_00{idx + 1} module</span>
                          <p className="text-slate-700 font-medium font-sans leading-relaxed">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Tech tools array */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] uppercase font-mono text-slate-405 font-bold tracking-widest block">FULL SYSTEM DEPENDENCIES:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="font-mono text-[10px] font-medium text-slate-700 bg-[#f1f5f9] border px-3 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer connection links */}
                <div className="sticky bottom-0 bg-slate-50 border-t border-slate-150 p-6 flex items-center justify-between z-10 font-sans">
                  <div className="text-xs text-slate-450 font-mono font-medium">Period: {selectedProject.period}</div>
                  <div className="flex gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-250 font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                        id="drawer-github-cta"
                      >
                        <Github className="w-4 h-4 text-slate-700" />
                        Source Repository
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-900 hover:bg-slate-950 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition-all cursor-pointer"
                        id="drawer-live-cta"
                      >
                        Launch Demonstration
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-305" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
