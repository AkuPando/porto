import React from "react";
import { listTools } from "../../../data.js";

const Tools = () => {
  return (
      <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24">
        <div className="tools">
          <h1
            className="text-4xl/snug font-bold mb-4 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools Yang Dipakai
          </h1>
          <p
            className="text-base/loose opacity-50 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="logo"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default React.memo(Tools);
