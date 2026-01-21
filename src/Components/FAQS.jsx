import React from "react";
import { Outlet } from "react-router-dom";

function FAQS() {
  return (
    <>
      <div className="flex mt-5 w-full overflow-hidden">
        <main className="flex-1 flex flex-col h-full overflow-y-auto relative z-10 scroll-smooth">
          <div className="flex-1 px-8 pb-12 w-full max-w-[900px] mx-auto flex flex-col">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-primary dark:text-white tracking-tight mb-3">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl font-light">
                Quick answers to questions about your workouts, account, and
                memberships.
              </p>
            </div>
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              <button className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold shadow-lg shadow-primary/20 whitespace-nowrap">
                All Questions
              </button>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-primary-light transition-all whitespace-nowrap">
                Membership
              </button>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-primary-light transition-all whitespace-nowrap">
                Training
              </button>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-primary-light transition-all whitespace-nowrap">
                Billing
              </button>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-primary-light transition-all whitespace-nowrap">
                Technical
              </button>
            </div>
            <div className="space-y-4">
              <div className="faq-item relative group">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl translate-x-1 translate-y-1 -z-10 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
                <details
                  className="bg-white dark:bg-[#1e2330] rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden"
                  open=""
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary-light">
                        <span className="material-symbols-outlined fill text-[20px]">
                          payments
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary dark:text-white">
                        How do I update my payment information?
                      </h3>
                    </div>
                    <span className="material-symbols-outlined expand-icon text-slate-400 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="faq-content px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    To update your payment method, navigate to
                    <span className="text-primary-light font-medium">
                      Settings &gt; Billing
                    </span>
                    . From there, you can add new credit cards, update existing
                    ones, or switch to alternative payment methods like PayPal.
                    All changes take effect immediately for your next billing
                    cycle.
                  </div>
                </details>
              </div>
              <div className="faq-item relative group">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl translate-x-1 translate-y-1 -z-10 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
                <details className="bg-white dark:bg-[#1e2330] rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary-light">
                        <span className="material-symbols-outlined fill text-[20px]">
                          event_busy
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary dark:text-white">
                        What is the cancellation policy for personal training
                        sessions?
                      </h3>
                    </div>
                    <span className="material-symbols-outlined expand-icon text-slate-400 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="faq-content px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    We require at least 24 hours notice for any cancellations.
                    Sessions cancelled within the 24-hour window will be charged
                    the full session rate. You can cancel or reschedule directly
                    through the
                    <span className="text-primary-light font-medium">
                      Schedule
                    </span>
                    tab in your dashboard.
                  </div>
                </details>
              </div>
              <div className="faq-item relative group">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl translate-x-1 translate-y-1 -z-10 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
                <details className="bg-white dark:bg-[#1e2330] rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary-light">
                        <span className="material-symbols-outlined fill text-[20px]">
                          fitness_center
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary dark:text-white">
                        Can I freeze my membership?
                      </h3>
                    </div>
                    <span className="material-symbols-outlined expand-icon text-slate-400 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="faq-content px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    Yes, PRO members can freeze their membership once per
                    calendar year for up to 3 months. This is ideal for travel
                    or medical recovery. To request a freeze, please contact our
                    support team through the Contact form or visit the front
                    desk at your primary location.
                  </div>
                </details>
              </div>
              <div className="faq-item relative group">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl translate-x-1 translate-y-1 -z-10 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
                <details className="bg-white dark:bg-[#1e2330] rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary-light">
                        <span className="material-symbols-outlined fill text-[20px]">
                          devices
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary dark:text-white">
                        How do I sync my wearable devices?
                      </h3>
                    </div>
                    <span className="material-symbols-outlined expand-icon text-slate-400 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="faq-content px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    FitCore supports Apple Health, Google Fit, and Garmin. Go to
                    <span className="text-primary-light font-medium">
                      Settings &gt; Integrations
                    </span>
                    and toggle the switch for your preferred device. You'll be
                    redirected to authorize the connection. Once connected, your
                    workout data will automatically sync.
                  </div>
                </details>
              </div>
              <div className="faq-item relative group">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-2xl translate-x-1 translate-y-1 -z-10 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
                <details className="bg-white dark:bg-[#1e2330] rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary-light">
                        <span className="material-symbols-outlined fill text-[20px]">
                          group
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-primary dark:text-white">
                        Are group classNamees included in my membership?
                      </h3>
                    </div>
                    <span className="material-symbols-outlined expand-icon text-slate-400 transition-transform duration-300">
                      expand_more
                    </span>
                  </summary>
                  <div className="faq-content px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    All PRO and Elite memberships include unlimited access to
                    group fitness classNamees. Standard members can join
                    classNamees for a $15 drop-in fee. You can book classNamees
                    up to 7 days in advance via the mobile app or dashboard.
                  </div>
                </details>
              </div>
            </div>
            <div className="mt-12 bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Still have questions?
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-light">
                  Can't find the answer you're looking for? Our support team is
                  here to help.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 bg-white dark:bg-slate-800 text-primary dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-light transition-colors">
                  Live Chat
                </button>
                <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default FAQS;
