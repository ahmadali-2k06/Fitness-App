import React from "react";
import { useLoaderData } from "react-router-dom";
function Dashboard() {
  const data = useLoaderData();
  const intensities = [
    "bg-gray-100 dark:bg-gray-700",
    "bg-blue-200 dark:bg-blue-900/40",
    "bg-blue-400",
    "bg-primary",
  ];

  const dayLabels = ["M", "", "W", "", "F", "", "S"];
  const weeks = 16;

  return (
    <>
      <div className="flex w-full overflow-hidden bg-background-light dark:bg-background-dark no-scrollbar">
        <main className="flex-1 h-full overflow-y-auto relative bg-background-light dark:bg-background-dark scrollbar-hide no-scrollbar">
          <div className="relative w-full h-64 bg-gray-200 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Abstract energetic blue geometric pattern representing fitness and motion"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEjqdxOybYi3LvfEQf6xgrcG5drztdPk955KeEVS1-xgy8maMQRkRfugzspznTKf78HOcfikUACY1Y7A9HezYGZY81IPI_dVkf_Ccdh9R22NGyrk-HvSyku2tznhoOOL6l8KBa-WxTBUi_u8uypn_17LJF7o0CU6X39zEFp-5ReltTd9IbtohH2XauRpfFmhgeOV4op0tx5zJ65OOSUtJ_f9B-SN6SdQ2IQymL3MKtdYm5qtqQ0J-OCCqC2G2afAWKPvMqW7z1oyNm")`,
              }}
            ></div>

            <button className="lg:hidden absolute top-4 left-4 z-20 bg-white/90 p-2 rounded-lg shadow-md text-gray-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto pb-12">
            <div className="relative -mt-16 mb-10 z-20">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <div className="relative group">
                  <div
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full border-[6px] border-white dark:border-gray-900 shadow-xl bg-gray-100 overflow-hidden"
                    data-alt={`Profile picture of ${data.name}`}
                    style={{
                      backgroundImage: `url(${data.avatar_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="absolute bottom-2 right-2 h-8 w-8 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full flex items-center justify-center text-white"
                    title="Online"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {data.name}
                      </h1>
                      <div className="flex items-center gap-3 mt-1 text-gray-500 dark:text-gray-400 font-medium">
                        <span className="flex items-center gap-1 text-primary">
                          <span className="material-symbols-outlined text-[18px] font-variation-settings-'FILL' 1">
                            verified
                          </span>
                          Pro Member
                        </span>
                        <span>•</span>
                        <span>Level 14</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">
                            location_on
                          </span>
                          San Francisco, CA
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                        Edit Profile
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[20px]">
                          settings
                        </span>
                        Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="card-3d bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 border-b-[4px] border-b-orange-100 dark:border-b-orange-900/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-500">
                    <span className="material-symbols-outlined text-[28px] font-variation-settings-'FILL' 1">
                      local_fire_department
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-lg">
                    +2 Days
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                    Current Streak
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    12 Days
                  </h3>
                </div>
              </div>
              <div className="card-3d bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 border-b-[4px] border-b-blue-100 dark:border-b-blue-900/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                    <span className="material-symbols-outlined text-[28px] font-variation-settings-'FILL' 1">
                      bolt
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-lg">
                    +1.2k
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                    Calories Burned
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    24,500
                  </h3>
                </div>
              </div>
              <div className="card-3d bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 border-b-[4px] border-b-purple-100 dark:border-b-purple-900/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600">
                    <span className="material-symbols-outlined text-[28px] font-variation-settings-'FILL' 1">
                      schedule
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-lg">
                    +3h
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                    Active Time
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    45h 20m
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in">
              <div className="xl:col-span-2 flex flex-col gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Workout Consistency
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <span>Less</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-700"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-200 dark:bg-blue-900/50"></div>
                        <div className="w-3 h-3 rounded-sm bg-blue-400"></div>
                        <div className="w-3 h-3 rounded-sm bg-primary"></div>
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                  <div className="w-full overflow-x-auto pb-2">
                    <div className="flex gap-4 min-w-max">
                      {/* 1. Day Labels (Left Column) */}
                      <div className="flex flex-col gap-1 pt-[1px]">
                        {/* pt-1 aligns text with squares */}
                        {dayLabels.map((label, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] text-gray-400 h-3 leading-3 w-3 text-center"
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* 2. The Grid (Weeks Columns) */}
                      <div className="flex gap-1">
                        {Array.from({ length: weeks }).map((_, weekIdx) => (
                          <div key={weekIdx} className="flex flex-col gap-1">
                            {Array.from({ length: 7 }).map((_, dayIdx) => {
                              // Randomly pick a color intensity
                              const rand = Math.floor(Math.random() * 4);
                              const weightedRand =
                                Math.random() > 0.6 ? rand : 0; // Bias towards empty

                              return (
                                <div
                                  key={dayIdx}
                                  className={`w-3 h-3 rounded-[2px] ${intensities[weightedRand]}`}
                                  title="Workout recorded"
                                ></div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Recent Achievements
                    </h3>
                    <button className="text-primary text-sm font-bold hover:underline">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors cursor-pointer group">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined font-variation-settings-'FILL' 1">
                          emoji_events
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Early Bird
                        </h4>
                        <p className="text-sm text-gray-500">
                          Completed 5 workouts before 7 AM
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-400">
                        2h ago
                      </span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors cursor-pointer group">
                      <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined font-variation-settings-'FILL' 1">
                          local_fire_department
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Burn Master
                        </h4>
                        <p className="text-sm text-gray-500">
                          Burned 1000 calories in a single session
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-400">
                        Yesterday
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-fit sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Upcoming
                    </h3>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 text-gray-600 dark:text-gray-300 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        add
                      </span>
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-100 dark:bg-gray-700"></div>
                    <div className="space-y-6">
                      <div className="relative flex gap-4">
                        <div className="z-10 h-14 w-14 rounded-xl bg-primary flex flex-col items-center justify-center text-white shadow-lg shadow-blue-900/20 flex-shrink-0">
                          <span className="text-xs font-medium opacity-80">
                            OCT
                          </span>
                          <span className="text-lg font-bold leading-none">
                            24
                          </span>
                        </div>
                        <div className="flex-1 py-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            HIIT Cardio
                          </h4>
                          <p className="text-sm text-gray-500 mb-2">
                            17:00 • 45 min
                          </p>
                          <div className="flex -space-x-2">
                            <div
                              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA88_pbZg-hUz0zss2qgj4BODx1msTyaHMH4ptGCe8y8CoQ0weLvB6XrURoMCwGPkt8evIVV9rqCOAKdzwlFKzymDSmw4rb0oRNHAl02_qkCpdDU1MR_x7ifLYgkaWX_MwiORFucqUjltwDBm3RFoPxFp8C3XMxK75rRgR_d08ql827U43whRysmiNF4LmLSvuo076iOFJhDLW1WwmOhoyvUjeRjFW2Uldniq_5j6iK6OH7TIUzULMik0nG_ieJ-Zqbdgkll31VJbzl')",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div
                              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300"
                              style={{
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbfU460ekAvZ0CfyX5od-Z-IasvoyYfDPAcice6ng_Z2hpsWsfItPgAYdMJES-N3Vyvem26c0MFqdNSZqTsxFmdRgX_WdQweVMMKW5_U_AGMjMH5-wtXgG64Yy9oJ-G3EJd08tg5JK_ki_eFV54D77poVw7sW_jCPYUWf2LXyRMxBiwr5SNGtEH35Eh5PBPiq5whxuzbUfn__yk8cj5NjQI9vqOU9vE9Ii71ifTQrzoQL7FDfj4P1nth3hPSOZzG0gLoWEOl_Gqz9w')",
                                backgroundSize: " cover",
                              }}
                            ></div>
                            <div className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-500">
                              +3
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex gap-4">
                        <div className="z-10 h-14 w-14 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 flex-shrink-0">
                          <span className="text-xs font-medium opacity-60">
                            OCT
                          </span>
                          <span className="text-lg font-bold leading-none">
                            25
                          </span>
                        </div>
                        <div className="flex-1 py-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            Yoga Flow
                          </h4>
                          <p className="text-sm text-gray-500">
                            08:00 • 60 min
                          </p>
                        </div>
                      </div>
                      <div className="relative flex gap-4">
                        <div className="z-10 h-14 w-14 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 flex-shrink-0">
                          <span className="text-xs font-medium opacity-60">
                            OCT
                          </span>
                          <span className="text-lg font-bold leading-none">
                            26
                          </span>
                        </div>
                        <div className="flex-1 py-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            Upper Body Strength
                          </h4>
                          <p className="text-sm text-gray-500">
                            18:30 • 50 min
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-[100px]">
                      flag
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 relative z-10">
                    Weekly Goal
                  </h3>
                  <div className="flex items-end gap-2 mb-2 relative z-10">
                    <span className="text-4xl font-bold">4/5</span>
                    <span className="text-blue-200 text-sm mb-1">Workouts</span>
                  </div>
                  <div className="w-full bg-black/20 rounded-full h-2 mb-2 relative z-10">
                    <div className="bg-white h-2 rounded-full w-[80%]"></div>
                  </div>
                  <p className="text-xs text-blue-100 relative z-10">
                    You're almost there! One more to go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/ahmadali-2k06");
  return data.json();
};
