import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Support() {
  return (
    <>
      <div className="flex w-full overflow-hidden mt-5">
        <main className="flex-1 flex flex-col h-full overflow-y-auto relative z-10 scroll-smooth">
          <div className="flex-1 px-8 pb-12 w-full max-w-[1200px] mx-auto flex flex-col justify-center">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                Get in Touch
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl font-light">
                Have a question about your membership or a technical issue? Fill
                out the form below and our team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="relative w-full">
              <div className="absolute top-4 left-4 w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl transform translate-x-2 translate-y-2 opacity-50 blur-[2px] -z-10"></div>
              <div className="absolute top-2 left-2 w-full h-full bg-primary/10 dark:bg-primary/5 rounded-2xl -z-5"></div>
              <div className="bg-white dark:bg-[#1e2330] rounded-2xl shadow-xl border border-white/50 dark:border-slate-700 overflow-hidden flex flex-col md:flex-row relative z-0">
                <div className="flex-1 p-8 md:p-10 lg:p-12">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                          Full Name
                        </span>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                            person
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-[#151923] rounded-xl border-none shadow-neumorphic-inner focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-black/20 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all font-light"
                            placeholder="John Doe"
                            type="text"
                          />
                        </div>
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                          Email Address
                        </span>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                            mail
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-[#151923] rounded-xl border-none shadow-neumorphic-inner focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-black/20 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all font-light"
                            placeholder="john@example.com"
                            type="email"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                          Membership ID
                          <span className="text-slate-400 font-normal">
                            (Optional)
                          </span>
                        </span>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                            badge
                          </span>
                          <input
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-[#151923] rounded-xl border-none shadow-neumorphic-inner focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-black/20 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all font-light"
                            placeholder="#123456"
                            type="text"
                          />
                        </div>
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                          Subject
                        </span>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">
                            category
                          </span>
                          <select className="w-full pl-11 pr-10 py-3.5 bg-slate-50 dark:bg-[#151923] rounded-xl border-none shadow-neumorphic-inner focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-black/20 text-slate-800 dark:text-white transition-all appearance-none cursor-pointer font-light">
                            <option>General Inquiry</option>
                            <option>Billing Support</option>
                            <option>Personal Training</option>
                            <option>Technical Issue</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px] pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </label>
                    </div>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">
                        Message
                      </span>
                      <div className="relative">
                        <textarea
                          className="w-full p-4 bg-slate-50 dark:bg-[#151923] rounded-xl border-none shadow-neumorphic-inner focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-black/20 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all resize-none font-light"
                          placeholder="How can we help you today?"
                          rows="4"
                        ></textarea>
                      </div>
                    </label>
                    <div className="pt-2 flex items-center justify-between">
                      <p className="text-xs text-slate-400 max-w-[200px]">
                        By submitting this form, you agree to our privacy
                        policy.
                      </p>
                      <button
                        className="bg-gradient-to-r from-primary to-primary-light hover:to-primary text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        type="button"
                      >
                        <span>Send Message</span>
                        <span className="material-symbols-outlined text-[20px]">
                          send
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="w-full md:w-80 bg-slate-50 dark:bg-[#181c26] border-l border-slate-100 dark:border-slate-800 p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                      Contact Information
                    </h3>
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0 text-primary">
                          <span className="material-symbols-outlined fill">
                            location_on
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                            Headquarters
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            123 Fitness Blvd,
                            <br />
                            Santa Monica, CA 90401
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0 text-primary">
                          <span className="material-symbols-outlined fill">
                            call
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                            Phone
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            +1 (555) 123-4567
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Mon-Fri, 9am-6pm PST
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center shrink-0 text-primary">
                          <span className="material-symbols-outlined fill">
                            mail
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                            Email
                          </p>
                          <a
                            className="text-sm text-primary hover:text-primary-light transition-colors underline decoration-primary/30"
                            href="mailto:support@fitcore.com"
                          >
                            support@fitcore.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-900/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">
                          live_help
                        </span>
                        <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
                          Need immediate answers?
                        </p>
                      </div>
                      <p className="text-xs text-blue-700/80 dark:text-blue-300/70 mb-3 leading-relaxed">
                        Check out our Help Center for quick solutions to common
                        questions.
                      </p>
                      <NavLink
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group"
                        to="/support/faqs"
                      >
                        Visit FAQ
                        <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Support;
