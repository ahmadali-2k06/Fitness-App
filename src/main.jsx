import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  Home,
  Dashboard,
  Workouts,
  Nutritions,
  Support,
  FAQS,
  NotFound,
} from "./Components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { githubInfoLoader } from "./Components/Dashboard";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={githubInfoLoader}
      />

      <Route path="workouts" element={<Workouts />} />
      <Route path="progress" element={<Nutritions />} />

      <Route path="support" element={<Support />} />
      <Route path="/support/faqs" element={<FAQS />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
