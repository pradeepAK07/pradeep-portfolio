import { Route, Routes } from "react-router-dom";
import { ExperiencePage, HomePage, ROUTE_CONFIG } from "./Helpers/Routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTE_CONFIG.ROOT_ROUTE} element={<HomePage />} />
      <Route path={ROUTE_CONFIG.HOME_ROUTE} element={<HomePage />} />
      <Route path={ROUTE_CONFIG.SKILLS_ROUTE} element={<HomePage />} />
      <Route
        path={ROUTE_CONFIG.EXPERIENCE_ROUTE}
        element={<ExperiencePage />}
      />
      <Route path={ROUTE_CONFIG.CONTACT_ROUTE} element={<HomePage />} />
    </Routes>
  );
}

export default App;
