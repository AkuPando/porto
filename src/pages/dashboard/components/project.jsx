import React, { useState } from "react";
import { listProyek } from "../../../data.js";

const Project = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
      <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24" id="project">
        <div className="project px-4 sm:px-8 md:px-14 mx-auto">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl/snug font-bold mb-4 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Project</span>
              <span className="absolute bottom-0 left-0 w-full h-3 rounded-full z-0" style={{background: 'linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))'}}></span>
            </span>
          </h1>
          <p
            className="text-base/loose opacity-50 flex justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Beberapa project yang telah saya kerjakan
          </p>

          <div className="tools-box mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-600 hover:scale-[1.02] group flex flex-col"
                style={{
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
              >
                <div 
                  className="overflow-hidden bg-linear-to-br from-blue-900/20 to-zinc-900 relative cursor-none"
                  onMouseMove={(e) => handleMouseMove(e, proyek.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {hoveredCard === proyek.id && (
                    <div 
                      className="absolute w-10 h-10 rounded-full flex items-center justify-center pointer-events-none"
                      style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(200,255,150,0.85) 100%)',
                        mixBlendMode: 'difference',
                        transition: 'none',
                      }}
                    >
                      <span className="font-bold text-xs" style={{ mixBlendMode: 'difference' }}>more</span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col grow">
                  <h4 className="font-bold text-2xl mb-3">{proyek.nama}</h4>
                  <p className="opacity-70 text-sm mb-5 grow">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1.5 bg-zinc-800 rounded-md border border-zinc-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button className="relative w-full font-medium py-3 px-6 rounded-full border-2 border-white/20 overflow-hidden group/btn cursor-pointer">
                    <span className="relative z-10 text-white">Lihat Website</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))',
                      }}
                    ></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default React.memo(Project);
