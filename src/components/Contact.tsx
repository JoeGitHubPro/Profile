/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, FileText, Send, Check, Copy, ArrowUpRight, MessageSquareCode } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Hiring Inquiry", message: "" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const emailAddress = "youssef.mohamed.net.eg@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "Hiring Inquiry", message: "" });
    }, 1500);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Quick connections Info Summary Column - Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 font-mono">
                <MessageSquareCode className="w-3.5 h-3.5" /> SECURE CONVERSATION CHANNEL
              </div>
              <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Let's Bridge some Connections
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                I am actively analyzing full-time backend, junior developer, software engineering, and .NET Web development pipelines worldwide. Drop an email, inspect my source commits, or write directly using the routing interface!
              </p>
            </div>

            {/* Direct Connectors list */}
            <div className="space-y-3 pt-6 border-t border-slate-100 font-sans">
              
              {/* Copyable email */}
              <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-indigo-600">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold block uppercase">Direct Inbox Channel</span>
                    <span className="text-xs font-bold text-slate-800 break-all font-mono">{emailAddress}</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-655 transition-colors cursor-pointer"
                  title="Copy email address"
                  id="btn-copy-email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                </button>
              </div>

              {/* LinkedIn block redirect */}
              <a
                href="https://www.linkedin.com/in/youssef-mohamed-ali/"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-[#0077B5]/5 hover:border-[#0077B5]/40 border border-slate-200/90 p-4 rounded-xl flex items-center justify-between shadow-xs transition-all group"
                id="btn-contact-linkedin"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-50 text-[#0077B5]">
                    <Linkedin className="w-4.5 h-4.5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold block uppercase">LinkedIn Business Profile</span>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-750 transition-colors">youssef-mohamed-ali</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-350 group-hover:text-[#0077B5] transition-colors" />
              </a>

              {/* GitHub redirect */}
              <a
                href="https://github.com/JoeGitHubPro"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-100 border border-slate-150 p-4 rounded-xl flex items-center justify-between shadow-xs transition-all group"
                id="btn-contact-github"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-50 text-slate-900">
                    <Github className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold block uppercase">Open Source Repository Hub</span>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">JoeGitHubPro</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-350 group-hover:text-slate-900 transition-colors" />
              </a>
            </div>

            {/* Resume Download CTA */}
            <div className="bg-slate-950 text-white p-5 rounded-2xl flex flex-col md:flex-row items-center gap-4 justify-between border border-slate-800 shadow-lg font-sans">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="flex items-center gap-1.5 justify-center md:justify-start text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-bold">
                  <FileText className="w-3.5 h-3.5" /> Curated PDF Ledger
                </span>
                <p className="text-xs font-bold text-slate-100">Review full academic and military history</p>
              </div>

              <a
                href="https://github.com/JoeGitHubPro"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto text-slate-900 hover:text-indigo-900 bg-white hover:bg-indigo-50 font-semibold font-display text-xs px-4 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0"
                id="btn-download-resume"
              >
                Inspect CV Page
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Message Input Interface Panel - Right */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/70 shadow-xs">
            <h3 className="text-sm font-semibold text-slate-950 font-display uppercase tracking-widest mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-indigo-600 animate-pulse" /> Direct Dispatch Terminal
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider font-semibold">Your Name:</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Dr. Jane Smith"
                    className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider font-semibold">Your Email address:</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., jane@company.com"
                    className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-50 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="contact-subject" className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider font-semibold">Message Subject:</label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-50 transition-colors"
                >
                  <option value="Hiring Inquiry">Full-time Backend Developer Role</option>
                  <option value="Consultancy contract">Freelance Consultancy Contract</option>
                  <option value="Academic Exchange">Academic Research Collaboration</option>
                  <option value="Social Hello">Social connection &amp; Hello</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="contact-text" className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider font-semibold">Detailed Message:</label>
                <textarea
                  id="contact-text"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your tech stack, system requirements, or architectural objectives..."
                  className="w-full bg-white border border-slate-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-xs text-slate-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-50 transition-colors"
                />
              </div>

              {/* Status Alert or Submitting Action */}
              <AnimatePresence mode="wait">
                {formState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-250/50 rounded-xl text-emerald-800 text-xs flex items-center gap-2.5 shadow-xs"
                  >
                    <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <strong className="font-semibold text-emerald-950 font-display block">System Command Completed</strong>
                      Message simulated successfully. In a real-world server, this transfers payload variables safely via an encrypted API relay.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full bg-slate-900 hover:bg-slate-950 disabled:bg-slate-350 text-white font-semibold font-display tracking-wider text-xs py-3.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 uppercase shrink-0 cursor-pointer"
                id="btn-submit-form"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    PACKING PROTOCOL VARIABLES...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    DISPATCH SECURE MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
