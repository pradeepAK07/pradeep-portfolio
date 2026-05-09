import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ExperiencePage = lazy(() => import("../pages/Experience/Experience"));

const ROUTE_CONFIG = {
  ROOT_ROUTE: "/",
  HOME_ROUTE: "/home",
  SKILLS_ROUTE: "/skills",
  EXPERIENCE_ROUTE: "/experience",
  CONTACT_ROUTE: "/contact",
} as const;

export { HomePage, ExperiencePage, ROUTE_CONFIG };
