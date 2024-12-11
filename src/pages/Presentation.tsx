import img from '../assets/images/tizianomartinelli.webp';
import { Header } from '../components/Header';

function Presentation() {
  return (
    <>
      <Header />
      <div
        id="presentation"
        className="container-presentation flex h-screen bg-slate-50 px-8 md:px-16 lg:px-32 xl:px-48 flex-col lg:flex-row items-center justify-center gap-8"
      >
        {/* Imagen */}
        <div className="container-img flex justify-center items-center">
          <img
            src={img}
            alt="Tiziano Martinelli"
            className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="container-text flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Tiziano Martinelli
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mt-2">
            Desarrollador Web
          </h2>
          <p className="hidden max-2xl:flex text-lg md:text-xl text-gray-500 mt-4 max-w-lg">
            Apasionado por crear experiencias digitales innovadoras. Con experiencia en React, TypeScript y más.
          </p>
        </div>
      </div>
    </>
  );
}

export default Presentation;
