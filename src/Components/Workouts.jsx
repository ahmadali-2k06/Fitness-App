import React from "react";

function Workouts() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap h-auto min-h-screen md:h-screen w-full p-4 gap-4 overflow-y-auto md:overflow-hidden">
        <nav className="w-full md:w-64 flex flex-col flex-shrink-0 h-auto md:h-full bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 overflow-hidden">
          <div className="p-4 pb-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
              Library
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto px-3 space-y-1">
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary text-white shadow-md shadow-primary/20 transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined">exercise</span>
              <span className="font-medium text-sm">Strength</span>
              <span className="material-symbols-outlined ml-auto text-white/70 text-[18px]">
                chevron_right
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                cardiology
              </span>
              <span className="font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-slate-200">
                Cardio
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                self_improvement
              </span>
              <span className="font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-slate-200">
                Yoga / Mobility
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                sports_gymnastics
              </span>
              <span className="font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-slate-200">
                Powerlifting
              </span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">
                timer
              </span>
              <span className="font-medium text-sm group-hover:text-slate-900 dark:group-hover:text-slate-200">
                HIIT
              </span>
            </a>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>New Category</span>
            </button>
          </div>
        </nav>
        <aside className="w-full md:flex-1 flex flex-col h-[80vh] md:h-full bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl z-20 border border-slate-200/60 dark:border-slate-800 overflow-hidden relative">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                Strength Workouts
              </h1>
              <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-md">
                12 Plans
              </span>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                filter_list
              </span>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder-slate-400 dark:text-slate-200"
                placeholder="Filter by muscle group..."
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="group cursor-pointer relative flex flex-col gap-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-l-4 border-primary shadow-sm transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
                  Chest &amp; Triceps Builder
                </h4>
                <span className="material-symbols-outlined text-primary text-[18px]">
                  check_circle
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  45 min
                </span>
                <span>•</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">
                  Intermediate
                </span>
              </div>
            </div>
            <div className="group cursor-pointer relative flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 text-sm leading-tight group-hover:text-primary transition-colors">
                  Leg Day - Quads Focus
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  60 min
                </span>
                <span>•</span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  Advanced
                </span>
              </div>
            </div>
            <div className="group cursor-pointer relative flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 text-sm leading-tight group-hover:text-primary transition-colors">
                  Back &amp; Biceps Pull
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  50 min
                </span>
                <span>•</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">
                  Intermediate
                </span>
              </div>
            </div>
            <div className="group cursor-pointer relative flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  BEGINNER
                </span>
              </div>
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 text-sm leading-tight group-hover:text-primary transition-colors">
                  Full Body Foundations
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  30 min
                </span>
              </div>
            </div>
            <div className="group cursor-pointer relative flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-slate-700 dark:text-slate-200 text-sm leading-tight group-hover:text-primary transition-colors">
                  Shoulder Boulder
                </h4>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  45 min
                </span>
                <span>•</span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  Advanced
                </span>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex flex-col flex-1 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl z-20 border border-slate-200/60 dark:border-slate-800 overflow-hidden relative">
          <div className="relative h-48 w-full flex-shrink-0 bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              data-alt="Muscular person lifting dumbbells in a gym setting with dramatic lighting"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh9yTQhxvq7229MMQy5B63Szymr9B4seeAYg3ure-tQe1A0ECpgO5VjCzVlaOCJgxcPf01AcC_SxPeh1uEdxSBKEt1xNJDpdBTSmCK6WzUQDVWTtZHCzOS9DbZjxRqrs3mlNjkPYZZ3638ddU4fKv1_1Ng1EHj8jJut-bCz1PJq0So3ciYVTXoMqsea3Rcea_SYmSj0W7fWQ8IfUWhjIhjnlBEPpWjGfaQf7MaDpFBdFzm0l_aXLQGlZZgmiwkfJstlWFOnC9kRjPh')",
              }}
            ></div>
            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  Strength
                </span>
                <span className="px-2 py-1 rounded-md bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                  Intermediate
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Chest &amp; Triceps Builder
              </h1>
              <div className="flex items-center gap-4 text-slate-300 text-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    timer
                  </span>
                  45 Minutes
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    fitness_center
                  </span>
                  Dumbbells &amp; Bench
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">
                    local_fire_department
                  </span>
                  320 Cal
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 transform active:scale-95">
                  <span className="material-symbols-outlined">play_arrow</span>
                  Start Workout
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-3 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  Schedule
                </button>
              </div>
              <div className="flex gap-2">
                <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
                <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-primary hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Overview
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  This focused session targets the pushing muscles of the upper
                  body. We start with compound movements to maximize strength
                  gains before moving into isolation exercises for hypertrophy.
                  Ensure a 2-minute rest between compound sets.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                    Target Muscles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      Pectoralis Major
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium">
                      Triceps Brachii
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                      Front Deltoids
                    </span>
                  </div>
                  <div className="h-24 w-full mt-4 rounded-lg bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm italic">
                      Anatomical Map Visualization
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 space-y-4">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Session Stats
                  </h4>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Exercises
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      6
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Sets Total
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      18
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Est. Volume
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      4,200 lbs
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600 dark:text-slate-400 text-sm">
                      Intensity
                    </span>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-4 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-4 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-4 bg-primary rounded-full"></div>
                      <div className="w-1.5 h-4 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                      <div className="w-1.5 h-4 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Routine
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                  6 Movements
                </span>
              </h3>
              <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors shadow-sm">
                <div className="size-20 md:size-24 flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                    <span className="material-symbols-outlined text-[32px]">
                      play_circle
                    </span>
                  </div>
                  <img
                    className="w-full h-full object-cover opacity-90"
                    data-alt="Man performing dumbbell chest press on bench"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj2ejUqy-hmZGrl0CyZSuhJZpvJM9ddKW395YGWRazq2cXU4r3YdJDUUOTjRvVlkzHMWzERFPtTYwpHPPEDudSPSG8uv-AQ4AK88tug9ZLQn5thSEolHIWcFjge1EMTdSqm7eyNC178WP19DROnSVmCUw7mbSMhBd6lEVmG7OczVqQHR_gXi3Hh03MoSuByiZtfUN1XJ1-pubaSOQfzexX_UCDji_Hi4wcm8oOnoN6I8N7WKDPcbN6owCh0N1rWfiRbBEdKj6uBDyR"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Dumbbell Bench Press
                    </h4>
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Compound • Pectorals
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Set 1: 12 Reps
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Set 2: 10 Reps
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Set 3: 8 Reps
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors shadow-sm">
                <div className="size-20 md:size-24 flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                    <span className="material-symbols-outlined text-[32px]">
                      play_circle
                    </span>
                  </div>
                  <img
                    className="w-full h-full object-cover opacity-90"
                    data-alt="Athlete doing incline dumbbell flyes in gym"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwE4jq_xPJflL2qZAyM4kPAs6vARcOEOE9B7ac-NrBEDLU_rYopc8Y_UODEFDcDKTSWxk5ia0S7NHVJ_94icPtZ2wH4JXrgENH1wmH3kzkqIWT3k2bJQPTdx4UpiyuG5prla4lwJN4W8vHu2RiA9HmiGKsPbFRGNkJbCtcT3Xc410tDqmHtIKCuhy9d4fo5PBS-S82udU414F01v4VPAdeaHAIijSW5IVPNhy3k5leFWB8SJi1cnhUHogco9Nzu8H75nvdKHbLAt2z"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Incline Dumbbell Fly
                    </h4>
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Isolation • Upper Chest
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      3 Sets x 12 Reps
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors shadow-sm">
                <div className="size-20 md:size-24 flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600">
                    <span className="material-symbols-outlined text-[32px]">
                      play_circle
                    </span>
                  </div>
                  <div
                    className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800"
                    data-alt="Abstract gradient placeholder for exercise video thumbnail"
                  ></div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Tricep Dips
                    </h4>
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">
                    Bodyweight • Triceps
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      3 Sets x Failure
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-20"></div>
          </div>
          <div className="absolute bottom-6 right-8">
            <button className="flex items-center justify-center size-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-xl hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[28px]">add</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Workouts;
