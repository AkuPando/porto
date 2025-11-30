import React, { useState, useEffect } from "react";

const PreLoader = () => {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const blurTimer = setTimeout(() => setPhase("blur"), 1500);
    const outTimer = setTimeout(() => setPhase("out"), 3000);
    const hideTimer = setTimeout(() => setShow(false), 4000);

    return () => {
      clearTimeout(blurTimer);
      clearTimeout(outTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  const textPhaseClass =
    phase === "in"
      ? "opacity-100 blur-0 translate-y-0"
      : phase === "blur"
      ? "opacity-80 blur-sm translate-y-0"
      : "opacity-0 blur-[10px] translate-y-3";

  const bgClass =
    phase === "in"
      ? "opacity-100 backdrop-blur-0"
      : phase === "blur"
      ? "opacity-50 backdrop-blur-[2px]"
      : "opacity-0 backdrop-blur-[8px]";

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center
        bg-black
        transition-all duration-1000 ease-cubic-bezier(0.4,0,0.2,1)
        ${bgClass}
        z-100
      `}
    >
      <div
        className={`
          tracking-[0.5em] text-xl text-white
          loading-pulse
          transition-all duration-1000 ease-cubic-bezier(0.4,0,0.2,1)
          ${textPhaseClass}
        `}
      >
        L O A D I N G
      </div>
    </div>
  );
};

export default React.memo(PreLoader);
