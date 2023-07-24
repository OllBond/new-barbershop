import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PricePage = lazy(() => import("./pages/PricePage/PricePage"));
const MastersPage = lazy(() => import("./pages/MastersPage/MastersPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotfoundPage = lazy(() => import("./pages/NotfoundPage/NotFoundPage"));
const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
