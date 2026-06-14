/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { achievementsData } from "../data";
import { Award, Trophy, Bookmark, Sparkles, GraduationCap } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-20 bg-[#fafcfd]" id="accolades">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100/50 rounded-full text-xs font-semibold text-teal-700 font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" /> RECOGNITIONS &amp; MILESTONES
          </div>
          <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Academic Achievements
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Highlighting honors awarded at national collegiate reviews and core institutional milestones.
          </p>
        </div>

        {/* Bento grid style Achievements Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {achievementsData.map((ach) => {
            // Check rank colors
            let rankLogo = <Trophy className="w-6 h-6 text-amber-500" />;
            let laurelClass = "bg-amber-50 border-amber-100/40 text-amber-900";
            let topBanner = "1st Place Award";

            if (ach.id.includes("3rd")) {
              rankLogo = <Award className="w-6 h-6 text-orange-500" />;
              laurelClass = "bg-orange-50 border-orange-100/20 text-orange-950";
              topBanner = "Research Innovation";
            } else if (ach.id.includes("academic")) {
              rankLogo = <GraduationCap className="w-6 h-6 text-indigo-500" />;
              laurelClass = "bg-indigo-50 border-indigo-100/25 text-indigo-950";
              topBanner = "Collegiate Degree";
            }

            return (
              <div
                key={ach.id}
                className={`border border-slate-200/50 rounded-2xl bg-white p-6 justify-between flex flex-col relative overflow-hidden group hover:shadow-md transition-all`}
                id={`achievement-card-${ach.id}`}
              >
                {/* Visual Accent Corner Graphic */}
                <div className="absolute top-0 right-0 h-10 w-10 bg-slate-100/40 rounded-bl-3xl border-l border-b border-slate-150 flex items-center justify-center">
                  <Bookmark className="w-3.5 h-3.5 text-slate-350" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150">
                      {rankLogo}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block tracking-widest uppercase">{ach.date}</span>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${laurelClass}`}>
                        {topBanner}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold font-display text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono font-semibold">
                      {ach.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-550 leading-relaxed font-sans pt-2 border-t border-slate-100">
                    {ach.description}
                  </p>
                </div>

                {/* Micro Accents */}
                <div className="pt-4 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> Verified SCU registry record
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
