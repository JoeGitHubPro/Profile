/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData } from "../data";
import { Code2, Cpu, Database, Layers, Server, Terminal, HelpCircle, CheckCircle } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Code2: Code2,
  Cpu: Cpu,
  Database: Database,
  Layers: Layers,
  Server: Server,
};

export function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("languages");
  const [selectedSkillInfo, setSelectedSkillInfo] = useState<string | null>(null);

  const activeCategory = skillsData.find((cat) => cat.id === activeCategoryId) || skillsData[0];
  const ActiveIcon = ICON_MAP[activeCategory.iconName] || Terminal;

  return (
    <section className="py-20 bg-[#fafcfd] border-t border-slate-100" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" /> STACK CAPABILITIES
            </div>
            <h2 className="text-3xl font-extrabold font-display text-slate-905 tracking-tight">
              Technical Skill Architecture
            </h2>
            <p className="text-slate-500 max-w-2xl mt-2 text-sm leading-relaxed">
              Curated categories reflecting my hands-on backend expertise. Click through each category card to inspect specific framework modules and database configurations I deploy.
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-white border px-3 py-1.5 rounded-lg h-max shadow-xs">
            COMPILER LEVEL: **.NET 10 &amp; C# 13**
          </span>
        </div>

        {/* Categories Grid - Top Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {skillsData.map((cat) => {
            const CatIcon = ICON_MAP[cat.iconName] || Terminal;
            const active = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSelectedSkillInfo(null);
                }}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[105px] ${
                  active
                    ? "bg-white border-indigo-600 shadow-md ring-2 ring-indigo-50"
                    : "bg-white border-slate-200/60 hover:border-slate-350 hover:bg-slate-50/40"
                }`}
                id={`skill-cat-${cat.id}`}
              >
                <div className={`p-1.5 rounded-lg h-max w-max border ${
                  active 
                    ? "bg-indigo-50 border-indigo-100 text-indigo-600" 
                    : "bg-slate-50 border-slate-100 text-slate-500"
                }`}>
                  <CatIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 font-display tracking-tight leading-none">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block truncate">
                    {cat.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Area */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Category header - left side */}
            <div className="lg:w-1/3 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-150 text-indigo-600">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900">{activeCategory.name}</h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Curriculum Coverage Scope</span>
                </div>
              </div>

              <p className="text-slate-550 text-xs leading-relaxed">
                {activeCategory.description}. The indicators to the right reflect structural coding fluency, memory handling capability, and active deployment experience in real-world servers.
              </p>

              {/* Informational Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 text-xs text-slate-500 font-sans">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 font-mono text-[10px] uppercase tracking-wider mb-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-500" /> Professional Insight
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedSkillInfo || "default"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[11px] leading-relaxed"
                  >
                    {selectedSkillInfo || "Click any individual skill bar on the right side to inspect architectural details, configuration, or framework usage patterns."}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress Bars - right side */}
            <div className="lg:w-2/3 w-full space-y-5 font-sans">
              {activeCategory.skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkillInfo(skill.info || null)}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-100 hover:border-indigo-150 hover:bg-slate-50/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
                  id={`skill-bar-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                >
                  {/* Skill Label */}
                  <div className="md:w-1/3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {skill.name}
                    </span>
                    {skill.info && (
                      <HelpCircle className="w-3.5 h-3.5 text-slate-350 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>

                  {/* Level percentage visual representation */}
                  <div className="flex-1 flex items-center gap-4">
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-slate-800 group-hover:bg-indigo-600 rounded-full transition-colors"
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-indigo-600 transition-colors w-10 text-right">
                      {skill.level}%
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
