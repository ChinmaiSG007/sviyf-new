import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import OurProjects from "./pages/OurProjects";
import OurTeam from "./pages/OurTeam";
import GalleryPage from "./pages/GalleryPage";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <OurProjects />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <OurTeam />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <GalleryPage name="StackBlitz" />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoute;
