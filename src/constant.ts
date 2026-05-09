import { ROUTE_CONFIG } from "./Helpers/Routes";
import type { EcoSystemType, SkillType } from "./Helpers/types";

export const NAV_LINKS = [
  { name: "Home", href: ROUTE_CONFIG.HOME_ROUTE },
  { name: "Skills", href: ROUTE_CONFIG.SKILLS_ROUTE },
  { name: "Experience", href: ROUTE_CONFIG.EXPERIENCE_ROUTE },
  { name: "Contact", href: ROUTE_CONFIG.CONTACT_ROUTE },
];

export const SKILLS_DATA: SkillType[] = [
  {
    name: "React",
    description:
      "Building complex UI architectures with a focus on performant,reusable component lifecycles and modern hooks.",
    sub_tech: ["Next.js"],
    exp: "4",
  },
  {
    name: "GraphQL",
    description:
      "Designing typed schemas and optimized resolvers to minimize data overfetching and maximize client-side flexibility.",
    sub_tech: ["Appollo"],
    exp: "1.3",
  },
  {
    name: "REST APIS",
    description:
      "Deeply familiar with hypermedia, status codes, and security patternsfor high-availability distributed systems.",
    sub_tech: ["Python", "Node.js"],
    exp: "4",
  },
];

export const ECO_SYSTEM_DATA: EcoSystemType[] = [
  {
    label: "Frontend",
    techs: ["TypeScript", "JavaScript(ES6+)", "HTML/CSS"],
  },
  {
    label: "Styling",
    techs: ["antD", "TailWindCss", "Styled Components"],
  },
  {
    label: "State Mgmt",
    techs: ["Redux Toolkit", "Thunk", "React Query"],
  },
  {
    label: "Databases",
    techs: ["Postgres"],
  },
  {
    label: "Tooling",
    techs: ["Webpack", "Prettier/ESlint", "Husky"],
  },
  {
    label: "Testing",
    techs: ["Jest", "Playwright"],
  },
  {
    label: "Backend/Cloud",
    techs: ["AWS", "Firebase"],
  },
  {
    label: "Version Control",
    techs: ["Github", "Bitbucket"],
  },
];
