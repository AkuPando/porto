import React from "react";
import { whatIDo } from "../../../data.js";

const WhatIDo = () => {
  return (
    <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24" id="what-i-do">
      <div className="what-i-do px-4 sm:px-8 md:px-14 mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl/snug font-bold mb-4 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          What{" "}
          <span className="relative inline-block ml-2">
            <span className="relative z-10">I Do</span>
            <span
              className="absolute bottom-0 left-0 w-full h-3 rounded-full z-0"
              style={{
                background:
                  "linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))",
              }}
            ></span>
          </span>
        </h1>
        <p
          className="text-base/loose opacity-50 flex justify-center text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut adalah layanan dan keahlian yang saya tawarkan dalam
          pengembangan software
        </p>

        <div className="tools-box mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whatIDo.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-zinc-600 rounded-lg group hover:border-[rgb(212,167,85)] hover:scale-[1.02]"
              style={{
                "--hover-bg": "rgba(30,58,95,0.1)",
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(30,58,95,0.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.dad}
            >
              {/* Old: <i className={`${item.icon} text-4xl mb-4 block group-hover:text-[rgb(212,167,85)] transition-colors`}></i> */}
              <item.Icon
                size={36}
                className="mb-4 block group-hover:text-[rgb(212,167,85)] transition-colors"
              />
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
              <p className="opacity-70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WhatIDo);
