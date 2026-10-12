import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AskBiz from "../Pages/AskBiz";
import Services from "../Pages/Services";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/askbiz" element={<AskBiz />} />
        <Route path="/work" element={<Work />} />
        <Route path="/products/*" element={<Navigate to="/work" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
