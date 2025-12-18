import React from "react";
import WhatIDo from "./components/what-i-do.jsx";
import Project from "./components/project.jsx";
import Tools from "./components/Tools.jsx";
import Contact from "./components/contact.jsx";
import DataImage from "../../data.js";
import {
  RiDownloadLine,
  RiArrowDownLine,
} from "@remixicon/react";

const Dashboard = () => {
  return (
    <div>
      <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24" id="home">
        <div className="hero px-4 sm:px-8 md:px-14 mx-auto grid lg:grid-cols-2 lg:pt-10">
          <div className="lg:pt-10">
            <div className="animate__animated animate__fadeInUp animate__delay-2_5s">
              <div className="flex items-center mb-10 w-fit p-4 rounded-2xl bg-zinc-800">
                <q>
                  Kode yang baik adalah kode yang berjalan.
                </q>
              </div>
              <h1 className="lg:text-5xl/tight md:text-4xl/tight text-3xl/tight font-bold mb-10 text-center lg:text-left">
                HI, Saya Irvando Aldo Renaldy
              </h1>
              <p className="text-sm sm:text-base/loose mb-10 opacity-50 text-center lg:text-left">
                Seorang Full-Stack Software Engineer dari Pontianak,
                Indonesia dengan pengalaman lebih dari tiga tahun dalam
                mengembangkan aplikasi web end-to-end yang siap produksi. Saya
                menangani proses mulai dari perancangan sistem, pengembangan
                backend, hingga implementasi antarmuka frontend yang efisien dan
                responsif, dengan penekanan pada struktur kode yang bersih,
                performa sistem, serta solusi yang relevan dengan kebutuhan
                client.
              </p>
            </div>
            <img
              src={DataImage.HeroImage}
              alt="img"
              className="lg:hidden w-[65%] rounded-t-full mx-auto mb-5 animate__animated animate__fadeInUp animate__delay-3_5s"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
              }}
            />
            <div className="animate__animated animate__fadeInUp animate__delay-2_5s">
              <div className="flex items-center gap-6 justify-center lg:justify-normal lg:px-0">
                <a
                  href="/assets/CV_Irvando.pdf"
                  download="CV_Irvando_Aldo_Renaldy.pdf"
                  className="bg-zinc-800 opacity-75 p-4 rounded-2xl hover:opacity-100"
                >
                  My CV{/* Old: <i className="ri-download-line ps-2 ri-lg"></i> */}<RiDownloadLine size={20} className="inline-block ms-2" />
                </a>
                <a
                  href="#project"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#project");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="bg-zinc-800 opacity-75 p-4 rounded-2xl hover:opacity-100"
                >
                  View Projects
                  {/* Old: <i className="ri-arrow-down-line ps-2 ri-lg"></i> */}
                  <RiArrowDownLine size={20} className="inline-block ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block animate__animated animate__fadeInUp animate__delay-3_5s">
            <img
              src={DataImage.HeroImage}
              alt="img"
              className="hidden lg:block w-[55%] rounded-t-full ml-auto me-28"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
              }}
            />
          </div>
        </div>
      </div>
      <WhatIDo />
      <Project />
      <Tools />
      <Contact />
    </div>
  );
};

export default React.memo(Dashboard);
