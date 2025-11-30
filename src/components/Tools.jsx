import { listTools } from "../data.js";

const Tools = () => {
  return (
    <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24">
      <div className="tools">
        <h1 className="text-4xl/snug font-bold mb-4 flex justify-center">Tools Yang Dipakai</h1>
        <p className="text-base/loose opacity-50 flex justify-center">
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website
        </p>
        <div className="tools-box mt-14 grid grid-cols-4 gap-4">
          {listTools.map((tool) => (
            <>
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group">
                <img
                  src={tool.gambar}
                  alt="react"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  key={tool.id}
                />
                <div>
                  <h4>{tool.nama}</h4>
                  <p>{tool.ket}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
