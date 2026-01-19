import React from "react";

function Nutritions() {
  return (
    <>
      <main class="flex-1 w-full max-w-[1440px] mx-auto p-6 md:p-8 lg:px-12">
        <div class="flex flex-col lg:flex-row gap-6 h-auto min-h-[750px]">
          <aside class="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">
            <div class="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-soft border border-gray-100 dark:border-gray-800">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-gray-900 dark:text-white font-bold text-lg">
                  Daily Goals
                </h3>
                <span class="material-symbols-outlined text-gray-400 text-[20px] cursor-pointer hover:text-primary">
                  more_horiz
                </span>
              </div>
              <div class="flex flex-col items-center justify-center py-2">
                <div class="relative size-32">
                  <svg
                    class="size-full -rotate-90"
                    viewbox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="text-gray-100 dark:text-gray-700"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    ></path>
                    <path
                      class="text-primary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      stroke-dasharray="65, 100"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                  </svg>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white block">
                      1450
                    </span>
                    <span class="text-xs text-gray-400 font-medium">
                      kcal left
                    </span>
                  </div>
                </div>
                <div class="mt-4 w-full flex justify-between text-xs text-gray-500 dark:text-gray-400 font-medium px-2">
                  <div class="flex flex-col items-center gap-1">
                    <div class="w-10 h-1 bg-secondary rounded-full"></div>
                    <span>Carbs</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <div class="w-10 h-1 bg-green-500 rounded-full"></div>
                    <span>Protein</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <div class="w-10 h-1 bg-red-400 rounded-full"></div>
                    <span>Fat</span>
                  </div>
                </div>
              </div>
            </div>
            <nav class="bg-white dark:bg-surface-dark rounded-xl shadow-soft border border-gray-100 dark:border-gray-800 flex-1 overflow-hidden flex flex-col">
              <div class="p-4 border-b border-gray-100 dark:border-gray-700">
                <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Schedule
                </h4>
              </div>
              <div class="p-2 flex flex-col gap-1 flex-1">
                <a
                  class="group flex items-center gap-4 px-4 py-3 rounded-lg bg-primary/5 hover:bg-primary/10 border-l-4 border-primary transition-all"
                  href="#"
                >
                  <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[20px]">
                      wb_sunny
                    </span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-gray-900 dark:text-white">
                      Breakfast
                    </span>
                    <span class="text-xs text-gray-500">
                      08:00 AM • Recommended
                    </span>
                  </div>
                </a>
                <a
                  class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                  href="#"
                >
                  <div class="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[20px]">
                      local_cafe
                    </span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Morning Snack
                    </span>
                    <span class="text-xs text-gray-400">10:30 AM</span>
                  </div>
                </a>
                <a
                  class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                  href="#"
                >
                  <div class="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[20px]">
                      restaurant
                    </span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Lunch
                    </span>
                    <span class="text-xs text-gray-400">01:00 PM</span>
                  </div>
                </a>
                <a
                  class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                  href="#"
                >
                  <div class="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[20px]">
                      fitness_center
                    </span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Pre-workout
                    </span>
                    <span class="text-xs text-gray-400">04:30 PM</span>
                  </div>
                </a>
                <a
                  class="group flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border-l-4 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all"
                  href="#"
                >
                  <div class="size-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-[20px]">
                      bedtime
                    </span>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                      Dinner
                    </span>
                    <span class="text-xs text-gray-400">07:00 PM</span>
                  </div>
                </a>
              </div>
            </nav>
          </aside>
          <section class="flex-1 bg-white dark:bg-surface-dark rounded-xl shadow-float border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col relative z-10">
            <div class="relative h-64 md:h-80 w-full group">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <div
                class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Top down view of avocado toast with poached eggs and chili flakes"
                style={{
                  backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuCcTid99SXQ4OEAMT-MJbFPUpEm1ISPU6wNfQx1yOcETabELVXQ1HAA0vdgYF_epbb70sMAzo-fzZEV5djkTWQLq4qnT6og2VFJzVOvzsjIOtwebyMhs1Fe4REGim_JTD869S5xk-xFwXj5oaLT3GCT238f2Xkvm12TqmR_TEKI5sAqaH-84qosCW-oY6kxkHrdjiS0oY67yzmeqEqX3_D5RX0Yog2FNFyhkwZUdj26Zer-Uofp2wxIX5TmC2yjnZqj49NhxsUvaLbS)`,
                }}
              ></div>
              <div class="absolute top-4 right-4 z-20 flex gap-2">
                <button class="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all shadow-lg">
                  <span class="material-symbols-outlined text-[20px]">
                    favorite
                  </span>
                </button>
                <button class="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all shadow-lg">
                  <span class="material-symbols-outlined text-[20px]">
                    share
                  </span>
                </button>
              </div>
              <div class="absolute bottom-6 left-6 right-6 z-20">
                <div class="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <span class="px-2.5 py-1 rounded-md bg-secondary text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                        High Protein
                      </span>
                      <span class="px-2.5 py-1 rounded-md bg-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                        Vegetarian
                      </span>
                    </div>
                    <h1 class="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                      Avocado &amp; Egg Toast
                    </h1>
                  </div>
                  <div class="flex items-center gap-1 text-yellow-400 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span class="material-symbols-outlined text-[20px] fill-current">
                      star
                    </span>
                    <span class="text-white font-bold text-sm">4.8</span>
                    <span class="text-gray-300 text-xs ml-1">
                      (245 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row flex-1">
              <div class="flex-1 p-6 md:p-8 flex flex-col gap-8">
                <div>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    A power-packed start to your day with healthy fats and
                    protein. This recipe combines the creamy texture of ripe
                    avocados with the richness of perfectly poached eggs on
                    crispy sourdough.
                  </p>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span class="material-symbols-outlined text-secondary text-[24px]">
                      timer
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">
                      Prep Time
                    </span>
                    <span class="text-gray-900 dark:text-white font-bold">
                      15 min
                    </span>
                  </div>
                  <div class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span class="material-symbols-outlined text-secondary text-[24px]">
                      local_fire_department
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">
                      Calories
                    </span>
                    <span class="text-gray-900 dark:text-white font-bold">
                      450 kcal
                    </span>
                  </div>
                  <div class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span class="material-symbols-outlined text-secondary text-[24px]">
                      restaurant_menu
                    </span>
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">
                      Servings
                    </span>
                    <span class="text-gray-900 dark:text-white font-bold">
                      1 Person
                    </span>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary dark:text-blue-400">
                      grocery
                    </span>
                    Ingredients
                  </h3>
                  <ul class="space-y-3">
                    <li class="flex items-start gap-3 group cursor-pointer">
                      <div class="mt-0.5 size-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors">
                        <span class="material-symbols-outlined text-white text-[16px] opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">
                          check
                        </span>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        2 Slices Sourdough Bread
                      </span>
                    </li>
                    <li class="flex items-start gap-3 group cursor-pointer">
                      <div class="mt-0.5 size-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors">
                        <span class="material-symbols-outlined text-white text-[16px] opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">
                          check
                        </span>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        2 Large Eggs
                      </span>
                    </li>
                    <li class="flex items-start gap-3 group cursor-pointer">
                      <div class="mt-0.5 size-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors">
                        <span class="material-symbols-outlined text-white text-[16px] opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">
                          check
                        </span>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        1/2 Ripe Avocado
                      </span>
                    </li>
                    <li class="flex items-start gap-3 group cursor-pointer">
                      <div class="mt-0.5 size-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors">
                        <span class="material-symbols-outlined text-white text-[16px] opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">
                          check
                        </span>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        1 tsp Chili Flakes
                      </span>
                    </li>
                    <li class="flex items-start gap-3 group cursor-pointer">
                      <div class="mt-0.5 size-5 rounded border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-primary transition-colors">
                        <span class="material-symbols-outlined text-white text-[16px] opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">
                          check
                        </span>
                      </div>
                      <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        Salt &amp; Pepper to taste
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full md:w-80 bg-gray-50 dark:bg-surface-dark border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-800 p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Nutritional Info
                  </h3>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Protein
                        </span>
                        <span class="text-sm font-bold text-gray-900 dark:text-white">
                          22g
                        </span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          class="bg-primary h-2 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Carbs
                        </span>
                        <span class="text-sm font-bold text-gray-900 dark:text-white">
                          34g
                        </span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          class="bg-secondary h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Fat
                        </span>
                        <span class="text-sm font-bold text-gray-900 dark:text-white">
                          18g
                        </span>
                      </div>
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          class="bg-red-400 h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <h4 class="font-bold text-gray-900 dark:text-white mb-2">
                    Instructions
                  </h4>
                  <p class="text-sm text-gray-500 mb-3">
                    Follow step-by-step video guide to prepare this meal.
                  </p>
                  <button class="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                    <span class="material-symbols-outlined text-[18px]">
                      play_circle
                    </span>
                    Watch Video
                  </button>
                </div>
                <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button class="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <span class="material-symbols-outlined">add_circle</span>
                    Log This Meal
                  </button>
                  <div class="mt-3 text-center">
                    <a
                      class="text-xs text-gray-400 hover:text-primary transition-colors"
                      href="#"
                    >
                      Swap for another meal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      ;
    </>
  );
}

export default Nutritions;
