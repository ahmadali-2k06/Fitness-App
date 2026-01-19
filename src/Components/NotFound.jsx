import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <main class="flex-grow flex flex-col items-center justify-center relative w-full px-4 py-8 lg:py-12 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            class="absolute top-[5%] left-[5%] md:left-[15%] w-64 h-64 md:w-96 md:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px]"
            data-alt="Abstract soft purple gradient background shape"
          ></div>
          <div
            class="absolute bottom-[10%] right-[5%] md:right-[15%] w-80 h-80 md:w-[500px] md:h-[500px] bg-[#60A5FA]/10 dark:bg-[#60A5FA]/5 rounded-full blur-[100px]"
            data-alt="Abstract soft blue gradient background shape"
          ></div>
          <div class="absolute top-1/3 left-10 opacity-20 dark:opacity-10 text-primary">
            <svg
              data-alt="Geometric circle decoration"
              fill="currentColor"
              height="100"
              viewbox="0 0 100 100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40"></circle>
            </svg>
          </div>
          <div class="absolute bottom-1/4 right-8 md:right-20 opacity-20 dark:opacity-10 text-[#60A5FA]">
            <svg
              data-alt="Geometric rounded rectangle decoration"
              fill="none"
              height="120"
              stroke="currentColor"
              stroke-width="2"
              viewbox="0 0 100 100"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                height="60"
                rx="10"
                transform="rotate(15 50 50)"
                width="60"
                x="20"
                y="20"
              ></rect>
            </svg>
          </div>
          <div class="absolute top-20 right-1/4 opacity-10 dark:opacity-5 text-primary">
            <svg
              data-alt="Abstract plus shape decoration"
              fill="currentColor"
              height="60"
              viewbox="0 0 24 24"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </div>
        </div>
        <div class="layout-content-container flex flex-col items-center max-w-[960px] w-full relative z-10">
          <div class="relative w-full flex justify-center items-center select-none pointer-events-none z-0">
            <h1 class="text-[160px] sm:text-[220px] lg:text-[340px] leading-[0.8] font-black tracking-tighter text-3d-effect transform -rotate-2">
              404
            </h1>
          </div>
          <div class="relative z-10 -mt-16 sm:-mt-24 lg:-mt-32 w-full max-w-[90%] sm:max-w-md lg:max-w-lg bg-white dark:bg-[#1e1a2b] p-8 sm:p-10 rounded-2xl shadow-card-layered border border-white/50 dark:border-white/5 backdrop-blur-sm flex flex-col items-center text-center group transition-transform duration-500 hover:-translate-y-1">
            <div class="w-16 h-16 bg-red-50 dark:bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 dark:text-red-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <span class="material-symbols-outlined text-4xl">
                wrong_location
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-[#120f1a] dark:text-white mb-4 leading-tight">
              Lost your way?
            </h2>
            <p class="text-[#655591] dark:text-[#a094c4] text-base leading-relaxed mb-8">
              Even the best athletes take a wrong turn sometimes. The page you
              are looking for isn't here, but let's get you back on track.
            </p>
            <div class="flex flex-col w-full gap-3">
              <button class="w-full cursor-pointer flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA] hover:from-[#162d6e] hover:to-[#4e8de0] text-white font-bold text-base shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                <span class="material-symbols-outlined text-[20px]">
                  dashboard
                </span>
                <NavLink to="/dashboard">Return to Dashboard</NavLink>
              </button>
              <button
                class="w-full cursor-pointer flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-transparent hover:bg-[#f0f0f4] dark:hover:bg-[#2d283b] text-[#655591] dark:text-[#a094c4] hover:text-primary dark:hover:text-white font-medium text-sm transition-colors mt-1"
                onClick={() => navigate(-1)}
              >
                <span class="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                Go back to previous page
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
