import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-500 
        ${
          active
            ? "py-3 backdrop-blur-xl bg-black/40 shadow-[0_1px_0_0_rgba(255,255,255,0.15),0_8px_20px_-10px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent backdrop-blur-0 shadow-[0_1px_0_0_rgba(255,255,255,0)]"
        }
      `}
    >
      <div className="mx-auto grid grid-cols-12 items-center px-4 md:px-8">
        <div className="col-span-3 flex items-center">
          <h1 className="text-white text-xl font-semibold tracking-tight">
            asd
          </h1>
        </div>

        <div className="col-span-6 flex justify-center">
          <nav
            className={`
              hidden md:flex items-center gap-1 rounded-full border border-white/20 
              transition-all duration-500 
              ${
                active
                  ? "px-3 py-1.5 bg-zinc-900 backdrop-blur-lg"
                  : "px-4 py-2 bg-transparent backdrop-blur-0"
              }
            `}
          >
            {["Beranda", "Tentang", "Proyek", "Kontak"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  px-5 py-2 rounded-full text-sm text-white/90 
                  hover:bg-white/10 transition-all duration-300
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="col-span-3 flex justify-end gap-4">
          <button
            className="
              hidden md:flex items-center gap-2 
              bg-white/90 text-black 
              px-5 py-2 rounded-full text-sm font-medium
              transition-all duration-500 hover:bg-white
            "
          >
            Contact Me ↗
          </button>
          {/* hamburger*/}{" "}
          <button className="md:hidden p-2 text-white/90">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M4 6H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
