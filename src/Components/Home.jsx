import React from "react";

function Home() {
  return (
    <>
      <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-10">
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[500px]">
          <div class="flex flex-col gap-6 z-10 order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit border border-blue-100 dark:border-blue-800">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-blue-400"></span>
              </span>
              <span class="text-xs font-semibold text-primary dark:text-blue-300 uppercase tracking-wide">
                Elite Training Program
              </span>
            </div>
            <h1 class="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Performance <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Redefined
              </span>
            </h1>
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              Optimize your corporate wellness journey with professional-grade
              analytics and high-performance training protocols designed for the
              modern professional.
            </p>
            <div class="flex flex-wrap items-center gap-4 mt-2">
              <button class="group bg-primary hover:bg-blue-800 text-white text-base font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Get Started
                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
                  arrow_forward
                </span>
              </button>
              <button class="bg-white dark:bg-card-dark text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                <span class="material-symbols-outlined text-primary dark:text-blue-400">
                  play_circle
                </span>
                View Showcase
              </button>
            </div>
            <div class="flex items-center gap-4 pt-4">
              <div class="flex -space-x-3">
                <img
                  alt="Professional athlete profile"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmgMx9sdqSd4gHQ7NeoWpN9MrdyeY07QsPgUExm5IH9aFdNDcYg0zOHlB0YaW31myHQ0ywTo4TSaCGyUS_HjBi4BnMfjVddCQw7iAUQIeeoPPX4y5grXMNCtS6p9zy66fcYZhBZHIaaG-6rnRASQb0CCJR9X17fEf6x5IhvU86C4g2YBpl261X70J_JOratyGlKZn8mUv-OU33yd3rr_ZfOb-t816X1HNVrRMLD9EfUqS_EC1DRxkmituGQA8fW1Vie-rkMSGuCB04"
                />
                <img
                  alt="Female athlete profile"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpdJOkH-VRdOBmbj_eYnhNw9WMIIQ5mnmPNpbM1HxHL7H7l8SbIC-q-oRBo-SBqf5X-060tyXN-4PVoSiI9pwi1tMRDHMJpgDXvFrcysCfQ2AyapCHBYeCc8j0DilxX_4kEXoY_hnpEfqJRkmiLD0CmRjUO_3VQWzN2d2XJLV72NEg4JY3BoxlTQ-JPqSmY76yOZelHVHTvSdlxtHFwhO0R_-FUoFTXB6W5iJVQ7CyHomi9vEp42hBExhPpKclOkf3zIoimYkjC8Pg"
                />
                <img
                  alt="Corporate fitness coach"
                  class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8uCs_Y_DaunzSHRisn1Ulw5pxA4dFeGvhVCYFffd9SoLYjLbxg4h-VQasJJJ0juBGuRN-FP-1TTXU8fqjVMU4YaBf_3sswfGN_qADzbyVHtHXEaFLVNU9K5u5nZBEc31ENNisUXhCtf2mxuDr4RfgV0KRkZllYXkV6D-zyHzDmQRky4_rNgCXOAJz8pnfOkj2yQzdWiSGvNS7hevt2udUZM9FpcR41fZ3o6WGOfjfDAHBFQJLHB2k_rMkUp9WaTMXtjFrENyXajLD"
                />
                <div class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                  +2k
                </div>
              </div>
              <span class="text-sm font-medium text-slate-500 dark:text-slate-400">
                Professional members training today
              </span>
            </div>
          </div>
          <div class="relative w-full h-[400px] sm:h-[500px] perspective-1000 order-1 lg:order-2 flex items-center justify-center">
            <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-blue-900/20 dark:to-slate-800/50 rounded-full blur-3xl opacity-60 scale-90"></div>
            <div class="absolute right-0 sm:right-10 top-10 w-64 sm:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 transition-transform hover:rotate-2 hover:scale-105 duration-500 border-4 border-white dark:border-slate-700">
              <img
                alt="Professional athlete in technical training gear"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1wjY81fT-K0AMiY_znmjxqwtn14_r1LuJ1wFvE-hLpM-73_1v3mNgBDuRfmAK_xfa0VWjzrpmH1EHEY0vgBIay7i_HkAMzftCXX4-tQ4puNVDi7QeqdO2rzEDCMRnuf92QHR4XwMJBNbJpiyw9RTg-eJVpynLssGaQJE1HNChWSD6uG1XeNnieP9be-cCdOqCaDG2HwWFQ8ZCd3V-DoO8A5pstosCJbkuahrXfItJbxWkW6I9mbe0C_jxPt87QWIPep_9qFtel6Qa"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <p class="font-bold text-lg">Elite Endurance</p>
                <p class="text-xs text-slate-200 uppercase tracking-widest font-semibold">
                  Pro Series • Lvl 4
                </p>
              </div>
            </div>
            <div class="absolute left-0 sm:left-10 bottom-20 sm:bottom-32 bg-card-light dark:bg-card-dark p-5 rounded-2xl shadow-3d w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100 dark:border-slate-700 z-10">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-slate-900 dark:text-white text-sm">
                  Performance Index
                </h3>
                <span class="material-symbols-outlined text-green-500 text-sm">
                  trending_up
                </span>
              </div>
              <div class="flex items-end justify-between gap-2 h-24">
                <div class="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm h-[40%]"></div>
                <div class="w-full bg-blue-200 dark:bg-blue-800/40 rounded-t-sm h-[60%]"></div>
                <div class="w-full bg-blue-300 dark:bg-blue-700/50 rounded-t-sm h-[30%]"></div>
                <div class="w-full bg-primary dark:bg-blue-500 rounded-t-sm h-[85%]"></div>
                <div class="w-full bg-blue-200 dark:bg-blue-800/40 rounded-t-sm h-[50%]"></div>
              </div>
              <div class="mt-3 flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Metrics Comparison</span>
                <span class="text-primary dark:text-blue-400 font-bold">
                  +18.4%
                </span>
              </div>
            </div>
            <div class="absolute right-4 sm:right-24 bottom-10 bg-white dark:bg-slate-800 py-3 px-5 rounded-full shadow-3d-hover transform translate-y-0 hover:-translate-y-2 transition-transform duration-300 flex items-center gap-3 border border-slate-100 dark:border-slate-700 z-20">
              <div class="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">
                  monitoring
                </span>
              </div>
              <div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                  VO2 Max
                </p>
                <p class="text-sm font-bold text-slate-900 dark:text-white">
                  Superior 54.2
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span class="material-symbols-outlined text-6xl text-primary">
                analytics
              </span>
            </div>
            <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined text-primary">
                verified
              </span>
              <span class="text-sm font-semibold uppercase">
                Compliance Rate
              </span>
            </div>
            <div class="flex items-baseline gap-2">
              <h3 class="text-3xl font-black text-slate-900 dark:text-white">
                94%
              </h3>
              <span class="text-sm font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                +4%
              </span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Above corporate average
            </p>
          </div>
          <div class="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span class="material-symbols-outlined text-6xl text-primary">
                fitness_center
              </span>
            </div>
            <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined text-primary">
                rocket_launch
              </span>
              <span class="text-sm font-semibold uppercase">Total Output</span>
            </div>
            <div class="flex items-baseline gap-2">
              <h3 class="text-3xl font-black text-slate-900 dark:text-white">
                2.4m <span class="text-lg text-slate-500">kcal</span>
              </h3>
              <span class="text-sm font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                +12%
              </span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Aggregate team metrics
            </p>
          </div>
          <div class="bg-white dark:bg-card-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span class="material-symbols-outlined text-6xl text-primary">
                speed
              </span>
            </div>
            <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <span class="material-symbols-outlined text-primary">timer</span>
              <span class="text-sm font-semibold uppercase">
                Training Velocity
              </span>
            </div>
            <div class="flex items-baseline gap-2">
              <h3 class="text-3xl font-black text-slate-900 dark:text-white">
                8.5 <span class="text-lg text-slate-500">avg/wk</span>
              </h3>
              <span class="text-sm font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                +1.2
              </span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Consistent performance growth
            </p>
          </div>
        </section>
        <section class="flex flex-col gap-6 py-8">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              Featured Workouts
            </h2>
            <a
              class="text-primary dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1"
              href="#"
            >
              View Professional Library
              <span class="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </a>
          </div>
          <div class="overflow-x-auto hide-scroll pb-10 -mx-4 px-4">
            <div class="flex gap-6 w-max">
              <div class="w-[300px] h-[380px] rounded-2xl relative overflow-hidden group shadow-3d hover:shadow-3d-hover transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <img
                  alt="Professional athlete in technical sportswear"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0FXT8vWazcTBUStQg2Vqv72IUOJq3de3xKlExxcRlrbGhzcYkH-rnT9WDZ8TscVd3W2ACfpWLCXGEaPPw74DV25abpOoxdhgEz94ZzDwz3kvKb1PQ_ENzIul2zPaHt8FQ2rtNtE8yGKixRVCvl8pFxRcOG9hcI2IHNIm3Qx0zuWsE0JGCufWPHU4XPDRqIytFhS3H_PkWIbLMv-ZxPIFsbOxb8ddlcnAtl6rjfdfp_D5CCHFJLmGnS_zuUJYJ3RCHqXxkKo_e_P-C"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Advanced Elite
                </div>
                <div class="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-3">
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-1">
                      Functional Power
                    </h3>
                    <p class="text-slate-300 text-sm line-clamp-2">
                      High-performance drills in full compression gear for
                      maximum output.
                    </p>
                  </div>
                  <div class="flex items-center gap-4 text-white text-xs font-medium">
                    <span class="flex items-center gap-1">
                      <span class="material-symbols-outlined text-base">
                        schedule
                      </span>
                      45 min
                    </span>
                    <span class="flex items-center gap-1">
                      <span class="material-symbols-outlined text-base">
                        leaderboard
                      </span>
                      Expert
                    </span>
                  </div>
                  <button class="mt-2 w-full bg-white text-slate-900 font-bold py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Launch Module
                  </button>
                </div>
              </div>
              <div class="w-[280px] h-[360px] my-auto rounded-2xl relative overflow-hidden group shadow-lg hover:shadow-3d-hover transition-all duration-300 cursor-pointer bg-card-light dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                <div class="h-1/2 overflow-hidden">
                  <img
                    alt="Woman in athletic performance jacket sprinting"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADgr37sR0rGBslK3PBCetAJYXwyX6xY5FfjJjr7Sh2OCAF9oawAEsw8lfHW7Jmxj05w5J0CxXEi-MpDd2QYVFbZtjApuzMB6gau3dY3oD56LyKiQXsCSbwWu6OXHvplt0OlpRMSvHRp9M_xdn6hH4AP8wAippPCZHPLBAEuIyf37cumQAQ2oHhrAvSElNa0NR3vsERRthjshKKAhkGFmOIC3mp9Hj4tTkgsU1_m9gvyJM-Lh1eAzWVJ-FQgxfVtrBYHiVITpCOWjfY"
                  />
                </div>
                <div class="p-5 flex flex-col justify-between h-1/2">
                  <div>
                    <div class="flex justify-between items-start mb-2">
                      <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                        Agility Sprint
                      </h3>
                      <span class="bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-[10px] font-bold px-2 py-1 rounded uppercase">
                        Pro
                      </span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                      Explosive intervals featuring technical outerwear
                      training.
                    </p>
                  </div>
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs">
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        35m
                      </span>
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          bolt
                        </span>
                        High
                      </span>
                    </div>
                    <button class="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full p-2 transition-colors">
                      <span class="material-symbols-outlined text-xl">
                        play_arrow
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-[280px] h-[360px] my-auto rounded-2xl relative overflow-hidden group shadow-lg hover:shadow-3d-hover transition-all duration-300 cursor-pointer bg-card-light dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                <div class="h-1/2 overflow-hidden">
                  <img
                    alt="Athlete in technical leggings training"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8URby9m2BsPqZGnRqvmD8eZFqdp-l8_fTFuyFiwNAoiacgsOS-o2OHKMUAY7sSm1CjXRRVLKyCTd1sNEZkTIzI3vKVIVx5brgEsqHjqF0reTwAy7_N8sBhCExSgq0qm4myPz_7YO72D9Q6PyvTzrp_u9tMU7vg88MEbD6KtlLtcRlLWut8KPikc_Hsdq2oLwzsO2yaxSWgmX40PuHWah9bwIGcOnCULXITmw681h0CR-mepy9wrr_ld8vAsth0e80O9zVh1SI5jXi"
                  />
                </div>
                <div class="p-5 flex flex-col justify-between h-1/2">
                  <div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Lower Body Lab
                    </h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                      Biometric-focused strength training for elite recovery.
                    </p>
                  </div>
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs">
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        50m
                      </span>
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          monitoring
                        </span>
                        Analytics
                      </span>
                    </div>
                    <button class="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full p-2 transition-colors">
                      <span class="material-symbols-outlined text-xl">
                        play_arrow
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-[280px] h-[360px] my-auto rounded-2xl relative overflow-hidden group shadow-lg hover:shadow-3d-hover transition-all duration-300 cursor-pointer bg-card-light dark:bg-card-dark border border-slate-100 dark:border-slate-800">
                <div class="h-1/2 overflow-hidden">
                  <img
                    alt="Athlete in performance tee stretching"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQItCRx59T_I3cmLWP0rfLEgBdrinV1C6PGOUjx0EFF-YQTlZjGt_fn2DrgwsiVSFQ4oDVjJI18YhBvg6Yfb2uzIhlbRT9nYaUE0Lfj9lOXQrW_B9nPp9BAsPWX6nImgMINglyyA8LzOH0JTJEs7NuBseIO8RaRvCAaZ6GSEHhnAVqYYpc4ZlykA8EBwSkLhymh-cfDvwGX4EY1DN5ON8CftVO1akuBX6sHt6gobKdudlQ4nheRWr1sZRt2wNGqO2X7p60ChOJg5Ka"
                  />
                </div>
                <div class="p-5 flex flex-col justify-between h-1/2">
                  <div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Kinetic Mobility
                    </h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                      Restore range of motion with professional mobility
                      protocols.
                    </p>
                  </div>
                  <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs">
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          schedule
                        </span>
                        25m
                      </span>
                      <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">
                          spa
                        </span>
                        Recovery
                      </span>
                    </div>
                    <button class="bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full p-2 transition-colors">
                      <span class="material-symbols-outlined text-xl">
                        play_arrow
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="fixed bottom-6 right-6 z-40">
          <button class="bg-slate-900 dark:bg-blue-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group cursor-pointer">
            <span class="material-symbols-outlined">auto_awesome</span>
            <span class="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-bold">
              Ask Coach AI
            </span>
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
