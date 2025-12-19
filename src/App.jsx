import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import Dashboard from "./pages/dashboard";

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
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
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
