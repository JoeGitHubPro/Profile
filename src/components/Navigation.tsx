/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Github, Linkedin, Briefcase, Terminal } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Biography", href: "#biography" },
  { label: "Core Skills", href: "#skills" },
  { label: "Work History", href: "#history" },
  { label: "Architecture", href: "#infrastructure-design" },
  { label: "SQL Sandbox", href: "#sandbox" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Accolades", href: "#accolades" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll elevation
      setIsScrolled(window.scrollY > 15);

      // Scroll active section spy
      const scrollPosition = window.scrollY + 100;
      for (const link of NAV_LINKS) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
      id="main-navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group text-left cursor-pointer"
          id="btn-nav-logo"
        >
          <div className="bg-slate-900 group-hover:bg-indigo-600 text-white p-1.5 rounded-lg transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold font-display text-slate-900 tracking-tight text-sm block">Youssef Ali</span>
            <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">BACKEND / .NET</span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/40">
          {NAV_LINKS.map((link) => {
            const active = activeSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  active
                    ? "bg-white text-indigo-700 shadow-sm border border-indigo-100/30"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/30"
                }`}
                id={`nav-link-${link.href.substring(1)}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Action button & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/JoeGitHubPro"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
            title="GitHub Profile"
            id="btn-nav-github"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-mohamed-ali/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
            title="LinkedIn Profile"
            id="btn-nav-linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="bg-slate-900 hover:bg-slate-955 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-transparent shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5"
            id="btn-nav-cta"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-lg"
            id="btn-mobile-nav-cta"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg transition-colors"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 pt-20 px-6 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        id="mobile-navigation-drawer"
      >
        <div className="flex flex-col gap-2 mt-4">
          {NAV_LINKS.map((link) => {
            const active = activeSection === link.href.substring(1);
            return (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`py-3 px-4 text-sm font-semibold rounded-xl text-left transition-all ${
                  active
                    ? "bg-indigo-50 text-indigo-700 font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                id={`mobile-nav-link-${link.href.substring(1)}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Social connections in drawer */}
        <div className="border-t border-slate-100 mt-8 pt-8 flex items-center justify-around">
          <a
            href="https://github.com/JoeGitHubPro"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-650"
            id="drawer-github-link"
          >
            <Github className="w-5 h-5 text-slate-900" />
            github/JoeGitHubPro
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-mohamed-ali/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-650"
            id="drawer-linkedin-link"
          >
            <Linkedin className="w-5 h-5 text-indigo-600" />
            linkedin/youssef-mohamed-ali
          </a>
        </div>
      </div>
    </nav>
  );
}
