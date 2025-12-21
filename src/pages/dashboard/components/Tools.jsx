import React from "react";
import { categorizedTools } from "../../../data.js";

const Tools = () => {
  return (
      <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24" id="tools">
        <div className="tools px-4 sm:px-8 md:px-14 mx-auto">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl/snug font-bold mb-4 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Tools</span>
              <span className="absolute bottom-0 left-0 w-full h-3 rounded-full z-0" style={{background: 'linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))'}}></span>
            </span> Yang Dipakai
          </h1>
          <p
            className="text-base/loose opacity-50 flex justify-center text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website
          </p>
          <div className="mt-16 space-y-16">
            {categorizedTools.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-4 mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
                  <div className="w-1 h-8 rounded-full" style={{background: 'linear-gradient(to bottom, rgb(30,58,95), rgb(212,167,85))'}}></div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-linear-to-r from-zinc-700 to-transparent"></div>
                </div>
                {category.tools.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.id}
                        className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 hover:scale-[1.02]"
                        style={{
                          transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                      >
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at top left, rgba(30,58,95,0.1), transparent 50%)'}}></div>
                        <div className="relative flex flex-col items-center text-center gap-3">
                          <div className="w-16 h-16 flex items-center justify-center bg-zinc-800/80 rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={tool.gambar}
                              alt={tool.nama}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1 group-hover:text-[rgb(212,167,85)] transition-colors">{tool.nama}</h4>
                            <p className="text-xs text-zinc-500">{tool.ket}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border border-dashed border-zinc-800 rounded-xl">
                    <p className="text-zinc-600 italic">Coming soon...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default React.memo(Tools);
