import { Route, Routes } from "react-router";
import { BaseLayout } from "./layouts/BaseLayout";
import { PageLayout } from "./layouts/PageLayout";
import { HomePage } from "./pages/HomePage";
import { ApplyPage } from "./pages/ApplyPage";
import { MembersPage } from "./pages/MembersPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { DonationPage } from "./pages/DonationPage";
import { ErrorLayout } from "./layouts/ErrorLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { ContactPage } from "./pages/ContactPage";
import { SubTeamsPage } from "./pages/SubTeamsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { OldMembersPage } from "./pages/OldMembersPage";
import { Box } from "@mui/material";
import { useDataContext } from "./contexts/DataContext";
import { Loader } from "./Loader";

export const AppRoutes = () => {
  const { isLoading } = useDataContext();

  return (
    <Box
      sx={{
        overflow: isLoading ? "hidden" : "auto",
        height: isLoading ? "100vh" : "auto",
        position: "relative",
      }}
    >
      <Routes>
        <Route element={<BaseLayout />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/members" element={<MembersPage />}></Route>
            <Route path="/members/archive" element={<OldMembersPage />}></Route>
            <Route path="/apply" element={<ApplyPage />}></Route>
            <Route path="/sponsors" element={<SponsorsPage />}></Route>
            <Route path="/donate" element={<DonationPage />}></Route>
            <Route path="/subteams" element={<SubTeamsPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
          </Route>
          <Route element={<ErrorLayout />}>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Route>
      </Routes>
      <Loader loading={isLoading} />
    </Box>
  );
};
