import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  // Configuration for Mobile Navigation Items
  const mobileNavItems = [
    { to: "/", icon: "home", label: "Home" },
    { to: "/workouts", icon: "fitness_center", label: "Workouts" },
    { to: "/progress", icon: "monitoring", label: "Progress" },
    { to: "/support", icon: "groups", label: "Support" },
  ];

  return (
    <>
      {/* MOBILE NAVIGATION BOTTOM BAR */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50
        md:hidden
        bg-white dark:bg-[#1a202c]
        rounded-t-2xl
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        border-t border-white/50 dark:border-gray-700/50
        flex justify-between items-center
        px-2 py-3
        backdrop-blur-xl"
      >
        {mobileNavItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className="flex-1 flex flex-col items-center gap-1 group/nav-item relative"
          >
            {({ isActive }) => (
              <>
                {/* Icon Container with Glow Effect */}
                <div
                  className={`relative p-2 rounded-xl transition-all duration-300 transform 
                  ${
                    isActive
                      ? "bg-primary/10 text-primary scale-110 shadow-nav-glow"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 group-hover/nav-item:-translate-y-1"
                  }`}
                >
                  {/* Glow Background (Active Only) */}
                  <div
                    className={`absolute inset-0 bg-primary/20 blur-md rounded-full transition-opacity duration-300 ${
                      isActive ? "opacity-50" : "opacity-0"
                    }`}
                  ></div>

                  {/* Icon */}
                  <span
                    className="material-symbols-outlined relative z-10"
                    style={{
                      fontVariationSettings: isActive
                        ? '"FILL" 1, "wght" 600'
                        : '"FILL" 0, "wght" 400',
                    }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-primary translate-y-0.5 font-bold"
                      : "opacity-0 group-hover/nav-item:opacity-100 absolute bottom-0 translate-y-4 group-hover/nav-item:translate-y-0"
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Indicator Dot */}
                <div
                  className={`absolute -bottom-1 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                ></div>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* DESKTOP HEADER (Unchanged logic, just context) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="size-8 text-primary dark:text-blue-400">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_330)">
                      <path
                        clipRule="evenodd"
                        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_6_330">
                        <rect fill="white" height="48" width="48"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  ZenFit
                </span>
              </div>
            </NavLink>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 dark:text-white underline decoration-2 underline-offset-4"
                      : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 dark:text-white underline decoration-2 underline-offset-4"
                      : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400"
                  }`
                }
                to="/workouts"
              >
                Workouts
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 dark:text-white underline decoration-2 underline-offset-4"
                      : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400"
                  }`
                }
                to="/progress"
              >
                Progress
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 dark:text-white underline decoration-2 underline-offset-4"
                      : "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400"
                  }`
                }
                to="/support"
              >
                Support
              </NavLink>
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-primary/10 hover:bg-primary/20 dark:bg-slate-800 dark:hover:bg-slate-700 text-primary dark:text-blue-300 px-4 py-2 rounded-lg transition-colors">
                <NavLink to="/dashboard" className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">
                    account_circle
                  </span>
                  <span className="text-sm font-bold hidden sm:block">
                    Profile
                  </span>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;  