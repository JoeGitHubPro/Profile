/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { experienceData } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from "lucide-react";

export function Timeline() {
  return (
    <section className="py-20 bg-white" id="history">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" /> WORK RECORD
          </div>
          <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            A history of designing production robust systems, managing high-throughput SQL servers, and collaborating in structured institutional and corporate frameworks.
          </p>
        </div>

        {/* Timeline main container */}
        <div className="relative border-l-2 border-slate-100 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group" id={`exp-node-${item.id}`}>
              {/* Timeline Indicator Node */}
              <div
                className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-200 group-hover:border-indigo-650 flex items-center justify-center transition-colors shadow-xs"
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-slate-350 group-hover:bg-indigo-600 transition-colors" />
              </div>

              {/* Card wrapper */}
              <div className="bg-slate-50/60 group-hover:bg-white group-hover:border-indigo-150 border border-slate-200/60 rounded-2xl p-6 sm:p-8 transition-all shadow-xs group-hover:shadow-md space-y-4">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2.5">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-indigo-750 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-slate-600 font-medium text-xs font-sans mt-0.5">
                      {item.employer}
                    </p>
                  </div>

                  {/* Badges container */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold text-slate-500 shrink-0">
                    <span className="flex items-center gap-1 bg-white border px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white border px-2.5 py-1 rounded-md">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Focus badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block mr-1.5">Scope focuses:</span>
                  {item.keyFocus.map((focus) => (
                    <span key={focus} className="text-[10px] font-mono bg-indigo-50/40 text-indigo-700 font-medium border border-indigo-100/30 px-2 py-0.5 rounded-full">
                      {focus}
                    </span>
                  ))}
                </div>

                {/* Achievements block list */}
                <ul className="space-y-2.5 text-xs text-slate-650 leading-relaxed font-sans pt-2 border-t border-slate-100">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>{bullet}</div>
                    </li>
                  ))}
                </ul>

                {/* Technologies used pill line */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mr-2">TECH DEPLOYED:</span>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="bg-slate-100 font-mono text-[10px] text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/20 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
