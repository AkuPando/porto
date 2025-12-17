import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

// Lazy load page components
const Dashboard = lazy(() => import("./pages/dashboard"));
const Projects = lazy(() => import("./pages/projects"));
const Product = lazy(() => import("./pages/product"));
const Contact = lazy(() => import("./pages/contact"));

function AppContent() {
  const location = useLocation();
  const [showPreLoader, setPreLoader] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPreLoader(true);
    const timer = setTimeout(() => setPreLoader(false), 4000);
    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      <Navbar />
      {showPreLoader && <PreLoader />}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
