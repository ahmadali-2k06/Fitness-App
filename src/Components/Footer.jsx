import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-12 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-deep-navy text-white relative overflow-hidden border-t border-white/10 shadow-footer-inner">
        <div className="footer-glow absolute inset-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-8 text-sky-custom">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight">ZenFit</span>
              </div>
              <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
                Redefining corporate performance through elite-grade
                bio-analytics and specialized training protocols.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sky-custom">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      className="text-sm text-blue-100/80 hover:text-sky-custom transition-colors duration-200"
                      href="#"
                    >
                      About Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-blue-100/80 hover:text-sky-custom transition-colors duration-200"
                      href="#"
                    >
                      Corporate Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm text-blue-100/80 hover:text-sky-custom transition-colors duration-200"
                      href="#"
                    >
                      Press &amp; Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-custom">
                Programs
              </h4>
              <ul className="space-y-4">
                <li>
                  <a className="group flex flex-col" href="#">
                    <span className="text-sm font-semibold group-hover:text-sky-custom transition-colors">
                      Elite Workouts
                    </span>
                    <span className="text-xs text-blue-100/50">
                      Performance &amp; Strength
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col" href="#">
                    <span className="text-sm font-semibold group-hover:text-sky-custom transition-colors">
                      Nutrition Lab
                    </span>
                    <span className="text-xs text-blue-100/50">
                      Bio-Hacking Diets
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex flex-col" href="#">
                    <span className="text-sm font-semibold group-hover:text-sky-custom transition-colors">
                      Personal Training
                    </span>
                    <span className="text-xs text-blue-100/50">
                      1-on-1 Pro Coaching
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-custom">
                Support
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    className="flex items-center gap-3 text-sm text-blue-100/80 hover:text-sky-custom transition-colors group"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100">
                      help_center
                    </span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 text-sm text-blue-100/80 hover:text-sky-custom transition-colors group"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100">
                      contact_support
                    </span>
                    Contact Expert
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 text-sm text-blue-100/80 hover:text-sky-custom transition-colors group"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100">
                      verified_user
                    </span>
                    Privacy Protocol
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-custom">
                Newsletter
              </h4>
              <p className="text-sm text-blue-100/70">
                Subscribe for the latest high-performance insights.
              </p>
              <div className="relative group">
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-sky-custom/50 focus:border-sky-custom transition-all outline-none placeholder:text-blue-100/30"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-sky-custom text-deep-navy rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg font-bold">
                    send
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-[10px] uppercase font-bold text-blue-100/40 tracking-tighter">
                  Secure &amp; Encrypted
                </span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-blue-100/40 font-medium">
              © 2024 ZenFit Systems. All Rights Reserved. Built for Corporate
              Athletes.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="text-blue-100/50 hover:text-sky-custom transition-colors"
                href="#"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                className="text-blue-100/50 hover:text-sky-custom transition-colors"
                href="#"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                className="text-blue-100/50 hover:text-sky-custom transition-colors"
                href="#"
              >
                <svg className="size-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
