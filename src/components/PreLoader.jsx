import { useState, useEffect } from "react";

const PreLoader = () => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    setTimeout(() => setPhase("blur"), 2000);

    setTimeout(() => setPhase("out"), 3500);

    setTimeout(() => setShow(false), 5000);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center
        bg-black
        transition-all duration-1500 ease-cubic-bezier(0.4,0,0.2,1)
        ${phase === "in" && "opacity-100 backdrop-blur-0"}
        ${phase === "blur" && "opacity-90 backdrop-blur-2px"}
        ${phase === "out" && "opacity-0 backdrop-blur-8px"}
        z-100
      `}
    >
      <div
        className={`
          text-gray-200 tracking-[0.5em] text-xl
          transition-all duration-1500
          ${phase === "out"
            ? "opacity-0 blur-[10px] translate-y-3"
            : "loading-pulse"
          }
        `}
      >
        L O A D I N G
      </div>
    </div>
  );
};

export default PreLoader;
