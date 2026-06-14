/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Cpu, ShieldAlert, Award, FileText, Database, ShieldCheck, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 grid-bg overflow-hidden"
      id="overview"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy - Left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 tracking-wide font-mono"
            >
              <Cpu className="w-3.5 h-3.5" /> SPECIALIZED IN C# &amp; .NET SYSTEMS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-slate-905 leading-tight tracking-tight"
            >
              Building <span className="text-indigo-600 relative inline-block">Scalable Enterprise</span> Backends &amp; APIs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Hi, I'm <strong className="text-slate-900 font-semibold">Youssef Mohamed Ali</strong>, an ambitious Software Engineer specializing in C#, .NET, Clean Architecture, and SQL/Oracle database optimization. I engineer zero-fluff, robust systems that handle high volume queries and guarantee business ledger safety.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 text-white font-semibold font-display px-6 py-3.5 rounded-xl border border-transparent shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                id="hero-btn-cases"
              >
                Inspect Portfolio Case Studies
                <ArrowRight className="w-4 h-4 text-indigo-250" />
              </button>

              <button
                onClick={() => scrollToSection("sandbox")}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold font-display px-6 py-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                id="hero-btn-sandbox"
              >
                <Database className="w-4 h-4 text-slate-500" />
                Query Sandbox
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="w-full sm:w-auto bg-indigo-50 hover:bg-indigo-100/80 text-indigo-750 font-semibold font-display px-6 py-3.5 rounded-xl border border-indigo-100/50 shadow-xs transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                id="hero-btn-contact"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Quick Metrics highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/50 mt-8"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">25%</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-medium block uppercase mt-1">CDMS Query Acceleration</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-indigo-650 font-display flex items-center justify-center lg:justify-start gap-1">
                  1st <Award className="w-4 h-4 text-amber-500 inline" />
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-medium block uppercase mt-1">SCU Research Award</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">100%</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-medium block uppercase mt-1">Military Grade Security</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Stack Visualization Graphic - Right */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              {/* Decorative behind glow */}
              <div className="absolute inset-x-0 -top-12 h-64 bg-indigo-200/30 rounded-full blur-3xl -z-10" />

              {/* Stack Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Active Server Engine</span>
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ONLINE (IIS)
                  </div>
                </div>

                {/* Simulated Architecture Items */}
                <div className="space-y-2.5 font-mono text-xs text-slate-700">
                  {/* Item 1 */}
                  <div className="bg-indigo-50/60 p-3 rounded-xl border border-indigo-100/70 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-indigo-550 text-white flex items-center justify-center text-[10px] font-bold font-mono">/</div>
                      <div>
                        <span className="block font-semibold text-slate-900 text-[11px]">Web API Controller</span>
                        <span className="text-[9px] text-slate-350 block">REST endpoints</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-indigo-700 font-semibold font-mono bg-indigo-100 px-1.5 py-0.5 rounded">HTTP/2</span>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-teal-50/60 p-3 rounded-xl border border-teal-100/70 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-teal-550 text-white flex items-center justify-center text-[10px] font-bold font-mono">&#8801;</div>
                      <div>
                        <span className="block font-semibold text-slate-900 text-[11px]">Application UseCases</span>
                        <span className="text-[9px] text-slate-350 block">CQRS MediatR, SOLID</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-teal-700 font-semibold font-mono bg-teal-100 px-1.5 py-0.5 rounded">Service</span>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100/70 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-amber-550 text-white flex items-center justify-center text-[10px] font-bold font-mono">&cup;</div>
                      <div>
                        <span className="block font-semibold text-slate-900 text-[11px]">EF Core / Identity</span>
                        <span className="text-[9px] text-slate-350 block">Repository, Unit of Work</span>
                      </div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  {/* Item 4 */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-indigo-600" />
                      <div>
                        <span className="block font-semibold text-slate-900 text-[11px]">SQL &amp; Oracle DB</span>
                        <span className="text-[9px] text-slate-350 block">Indexes &amp; ACID Tuning</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">1M+ rows</span>
                  </div>
                </div>

                {/* Thread diagnostics */}
                <div className="bg-slate-950 text-slate-300 p-3.5 rounded-2xl border border-slate-800 text-[9px] font-mono leading-tight space-y-1">
                  <div className="text-slate-400 uppercase tracking-wider text-[8px] font-bold pb-1.5 border-b border-slate-800 flex justify-between">
                    <span>SYSTEM DIAGNOSTICS</span>
                    <span className="text-indigo-400">GC COLLECT (0)</span>
                  </div>
                  <div className="flex justify-between mt-1"><span className="text-slate-400">Context DB:</span> <span className="text-slate-200">OracleDB_Primary</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Active Threads:</span> <span className="text-slate-200">24 concurrent</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">CLR Garbage GC:</span> <span className="text-emerald-400">0.05MB heap leak-free</span></div>
                </div>
              </div>

              {/* Decorative float badge */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-250 shadow-lg p-3 rounded-xl flex items-center gap-2 max-w-[150px] animate-float">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-[9px] text-slate-400 font-mono block tracking-wider font-semibold uppercase">SCU Champion</span>
                  <span className="text-[10px] text-slate-850 font-bold font-display block leading-none">1st Conference</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
