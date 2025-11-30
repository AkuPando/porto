import DataImage from "./data.js";

function App() {
  return (
    <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24">
      <div className="hero grid lg:grid-cols-2 lg:pt-10">
        <div className="lg:pt-10">
          <div className="flex items-center mb-6 w-fit p-4 rounded-2xl bg-zinc-800">
            <q>
              Design is not just what it looks like and feels like. Design is
              how it works.
            </q>
          </div>
          <h1 className="lg:text-5xl/tight text-4xl/tight font-bold mb-6">
            Crafting Engaging Web Experiences with React
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Welcome to my React portfolio! I'm passionate about creating dynamic
            and responsive web applications that provide seamless user
            experiences. Explore my projects to see how I leverage React's
            capabilities to build interactive interfaces and innovative
            solutions.
          </p>
          <img
            src={DataImage.HeroImage}
            alt="img"
            className="lg:hidden w-[65%] rounded-t-full mx-auto mb-5"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
              maskImage:
                "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            }}
          />
          <div className="flex items-center gap-5 justify-center lg:justify-normal lg:px-0">
            <a
              href="#"
              className="bg-zinc-800 opacity-75 p-4 rounded-2xl hover:opacity-100"
            >
              CV Saya<i className="ri-download-line ps-2 ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-800 opacity-75 p-4 rounded-2xl hover:opacity-100"
            >
              Lihat Proyek<i className="ri-arrow-down-line ps-2 ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="img"
          className="hidden lg:block w-[65%] rounded-t-full ml-auto me-16"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
