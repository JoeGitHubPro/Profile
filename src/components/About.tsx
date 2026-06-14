/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, Terminal, Sparkles, Database, ShieldCheck, Milestone } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-white" id="biography">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick info columns - Left (width 5/12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100/50 rounded-full text-xs font-semibold text-amber-700 font-mono">
              <User className="w-3.5 h-3.5" /> THE PERSON BEHIND THE STACK
            </div>
            <h2 className="text-3xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
              A Discipline-First Developer Driven by Backend Integrity
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-sans">
              I believe great software is like architecture: it shouldn't just look pretty on the outside; the internal foundation must be capable of weathering high structural loads. My focus is on writing thread-safe, secure, and easily optimized server ecosystems.
            </p>

            {/* Core Values / Mindset bento box */}
            <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 space-y-4 shadow-xs">
              <h3 className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase">My Engineering Commitments</h3>
              
              <div className="space-y-3 font-sans">
                {/* 1 */}
                <div className="flex gap-3">
                  <div className="bg-white p-1.5 rounded border border-slate-150 h-max text-indigo-600 shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">Zero-Trust Security Layout</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Always validate inputs at domain boundaries. Secure everything using cryptographic JWT payloads, rigid role-based access control, and normalized parameterized SQL parameters.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex gap-3">
                  <div className="bg-white p-1.5 rounded border border-slate-150 h-max text-teal-600 shrink-0 shadow-xs">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">Relational Optimization Over Mocking</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Optimize EF tracks on day one. Harness non-clustered database indices, lazy loading analysis, and projection maps to avoid N+1 traps and database locking.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex gap-3">
                  <div className="bg-white p-1.5 rounded border border-slate-150 h-max text-slate-700 shrink-0 shadow-xs">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">Continuous Enterprise Refinement</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      Conform strictly to SOLID code patterns and Domain-Driven Design layout. Architecture decoupled code systems which survive long-term maintenance sprints easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Biography Narrative Story - Right (width 7/12) */}
          <div className="lg:col-span-7 space-y-6 text-slate-650 text-sm leading-relaxed font-sans">
            <div>
              <p className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest mb-1.5">My Journey</p>
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-500" /> Grounded in Theory, Tempered in Command
              </h3>
            </div>

            <p>
              My path in engineering began during my Bachelor of Computer Science at Suez Canal University. While many of my peers drifted toward front-end interactions, I was captivated by compilers, memory management, and security algorithms. Certifying in <strong className="text-slate-900 font-medium">Harvard’s CS50x</strong>, I built an absolute fascination with algorithm complexity, appreciating the microsecond differences between a naive loop and a B-Tree binary lookup.
            </p>

            <blockquote className="border-l-3 border-indigo-500 pl-4 py-1 italic bg-indigo-50/40 rounded-r-lg text-slate-700 text-[13px]">
              "Developing software under military guidelines taught me that security and data integrity are not options to append late in development. They form the core skeleton from which all execution must hang."
            </blockquote>

            <p>
              Following graduation in January 2025, I was assigned to the <strong className="text-slate-900 font-medium">Military Records Department of the Egyptian Armed Forces</strong>. In this highly disciplined, high-velocity institutional tier, I was trusted to develop and deploy enterprise management applications running on <strong className="text-slate-900 font-medium">.NET Framework 4.8 and Oracle Databases</strong>. Working under constraints where system stability and database isolation were mission-critical, I learned to tune bulk procedures, maintain IIS web servers, and design software models built to withstand high concurrency and stress.
            </p>

            <p>
              Alongside my military role, I have operated as a backend freelance consultant and academic project contributor. I led the development of Suez Canal University's <strong className="text-slate-900 font-medium">Custody Management Platform (CDMS)</strong>, implementing multi-tenant data boundaries that reduced code separation templates by 40% and earned <strong className="text-slate-900 font-medium">1st Place at the Fifth Student Research Conference</strong>. For small businesses, I built the highly tactile <strong className="text-slate-900 font-medium">CafeSystem POS</strong> desktop application to handle weighting-machine values using offline-first EF-Core structures.
            </p>

            <p>
              To expand my credentials, I completed intensive professional web development training at the <strong className="text-slate-900 font-medium">Information Technology Institute (ITI)</strong>, diving deep into Clean Architecture, and consolidated my infrastructure understanding with the <strong className="text-slate-900 font-medium">AWS Cloud Practitioner</strong> blueprint.
            </p>

            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block mb-2">My Target Goal</span>
              <p className="text-slate-900 font-medium flex items-center gap-2">
                <Milestone className="w-4 h-4 text-indigo-500 shrink-0" />
                I am actively seeking roles where I can help technical squads build highly robust APIs, scale .NET architectures, optimize legacy database servers, and deliver durable software products that last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
