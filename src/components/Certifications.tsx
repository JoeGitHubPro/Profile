/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { certificationsData } from "../data";
import { Award, Calendar, BadgeCheck, ExternalLink, HelpCircle } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-20 bg-white" id="certifications border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100/50 rounded-full text-xs font-semibold text-amber-700 font-mono mb-3">
            <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIALS
          </div>
          <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Academic Certifications
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Rigorous specialist educational frameworks from national institutes and global cloud centers.
          </p>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {certificationsData.map((cert) => {
            // Pick a thematic color combination
            let accentClasses = "bg-indigo-50 border-indigo-100/60 text-indigo-700 ring-indigo-50/50";
            let topIconBg = "bg-indigo-650 text-white";
            if (cert.badgeAccent === "rose") {
              accentClasses = "bg-rose-50 border-rose-100/60 text-rose-700 ring-rose-50/50";
              topIconBg = "bg-rose-600 text-white";
            } else if (cert.badgeAccent === "amber") {
              accentClasses = "bg-amber-50 border-amber-100/60 text-amber-700 ring-amber-50/50";
              topIconBg = "bg-amber-600 text-white";
            }

            return (
              <div
                key={cert.id}
                className="bg-[#f8fafc]/50 hover:bg-white border border-slate-200/50 hover:border-indigo-150 rounded-2xl p-6 transition-all hover:shadow-md flex flex-col justify-between group"
                id={`cert-card-${cert.id}`}
              >
                {/* Upper card block section */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    {/* <div className={`p-2.5 rounded-xl ${topIconBg} shadow-xs`}>
                      <Award className="w-5 h-5" />
                    </div> */}

                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-xs">
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="w-9 h-9 object-contain"
                      />
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Class of {cert.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">{cert.issuer}</span>
                    <h3 className="text-base font-bold font-display text-slate-900 mt-1 leading-snug group-hover:text-indigo-700 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Skills Acquired */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Acquired Competency Matrix:</span>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsAcquired.map((skill) => (
                        <span key={skill} className="text-[10px] bg-white border border-slate-150 text-slate-600 px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                          <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer link or verify info */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-indigo-750 font-semibold font-display flex items-center gap-1 hover:underline"
                      id={`btn-verify-cert-${cert.id}`}
                    >
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono font-medium text-slate-400 flex items-center gap-1">
                      <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0" /> Academic verified
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
