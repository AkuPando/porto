import React, { useState, useEffect } from "react";

const SMOOTH_NAV_ITEMS = [
  { label: "Home", to: "#home" },
  { label: "What I Do", to: "#what-i-do" },
  { label: "Project", to: "#project" },
  { label: "Tools", to: "#tools" },
  { label: "Contact", to: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 120);

      const sections = ["home", "what-i-do", "project", "tools", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`
            fixed top-0 left-0 w-full z-50 
          transition-all duration-500 
          ${
            active
              ? "py-3 backdrop-blur-xl bg-black/20 shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_8px_20px_-10px_rgba(0,0,0,0.5)]"
              : "py-6 bg-transparent backdrop-blur-0 shadow-[0_1px_0_0_rgba(255,255,255,0)]"
          }
        `}
      >
        <div className="navbar px-4 sm:px-8 md:px-14 mx-auto">
          <div className="mx-auto grid grid-cols-12 items-center px-4 md:px-8">
            <div className="col-span-3 flex items-center">
              <h1 className="text-white text-xl font-semibold tracking-tight">
                I . A . R
              </h1>
            </div>

            <div className="col-span-6 flex justify-center">
              <nav
                className={`
                hidden lg:flex items-center gap-0.5 rounded-full border border-white/20 
                transition-all duration-500 
                ${
                  active
                    ? "px-3 py-1.5 bg-zinc-900 backdrop-blur-lg"
                    : "px-4 py-2 bg-transparent backdrop-blur-0"
                }
              `}
              >
                {SMOOTH_NAV_ITEMS.map((nav) => {
                  const isActive = activeSection === nav.to;
                  return (
                    <a
                      key={nav.label}
                      href={nav.to}
                      onClick={(e) => handleSmoothScroll(e, nav.to)}
                      className={`px-3 lg:px-5 py-2 rounded-full text-xs lg:text-sm whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "bg-white text-black font-medium"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      {nav.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="col-span-3 flex justify-end gap-4">
              <a
                href="https://wa.me/62895323717136"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center group"
              >
                <span className="
                  bg-white text-black 
                  px-6 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-500
                ">
                  Contact Me
                </span>
                <span className="
                  bg-white text-black 
                  w-10 h-10 flex items-center justify-center
                  rounded-full -ml-1
                  transition-all duration-500
                  group-hover:ml-1
                ">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
                  >
                    <path 
                      d="M5 12H19M19 12L13 6M19 12L13 18" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              {/* hamburger */}
              <button 
                className="lg:hidden p-2 text-white/90"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-100 backdrop-blur-xl bg-black/90
          transition-all duration-500 ease-out
          ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6">
          <h1 className="text-white text-xl font-semibold tracking-tight">
            I . A . R
          </h1>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/90 hover:text-white transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-8 pt-16 gap-6">
          {SMOOTH_NAV_ITEMS.map((nav, index) => {
            const isActive = activeSection === nav.to;
            return (
              <a
                key={nav.label}
                href={nav.to}
                onClick={(e) => handleSmoothScroll(e, nav.to)}
                className={`
                  text-4xl sm:text-5xl font-light transition-all duration-300
                  ${isActive ? "text-white" : "text-white/50 hover:text-white"}
                `}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {nav.label.toLowerCase()}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default React.memo(Navbar);

