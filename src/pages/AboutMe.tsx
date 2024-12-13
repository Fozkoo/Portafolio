import img from "../assets/images/tizianomartinelli.webp";
import logoGitHub from "../assets/icons/github-edit-1.svg";
import cv from "../assets/icons/curriculum.svg";
import Title from "../components/Title.tsx";
import pdf from "../assets/images/Tiziano Martinelli.pdf";

export const AboutMe = () => {




  return (
    <div
      id="aboutme"
      className="container-about-me flex justify-center flex-col  bg-slate-50  h-[100vh] mx-48 max-2xl:mx-20 max-sm:mx-5 max-2xl:h-full max-2xl:pt-14 max-2xl:pb-16"
    >
      <div className="container-section flex flex-col w-full   px-[7%] max-2xl:px-[2%] max-sm:px-5">
        <Title title="Sobre mí" />

        <div className=" gap-5 h-full flex justify-center items-center rounded-3xl mt-6 p-10 shadow-md bg-[#E8E8E8]/80 max-sm:h-full max-2xl:py-12 max-sm:p-2 max-sm:py-0 max-2xl:gap-16 max-sm:flex-col max-sm:gap-0">
          {/* Texto */}

          <div className="container-img  hidden justify-center items-center w-[40%] max-2xl:w-[30%] max-md:w-[100%] max-md:mt-5 max-sm:flex">
            <img
              src={img}
              alt="about me"
              className="w-[230px] h-[230px]  object-cover rounded-full shadow-lg"
            />
          </div>


          <div className="container-text   !h-[90%]  text-gray-800 flex justify-center items-center text-center text-xl flex-col font-medium  w-[60%] p-2 max-2xl:w-[60%] !max-sm:h-[100%] max-2xl:text-base max-sm:w-full max-2xl:py-10  max-sm:py-10">
            <p>
              Soy estudiante de Licenciatura en Informática en la Universidad Nacional de San Antonio de Areco y autodidacta en tecnologías como React, Ionic y TypeScript. Apasionado por crear aplicaciones web y móviles, trabajo en proyectos personales y profesionales, además de enseñar programación a niños y ofrecer servicios como freelancer.</p>

            {/* Botones */}
            <div className="container-buttons  flex justify-center items-center relative top-12 gap-10 w-full max-2xl:top-8 max-md:gap-5 max-md:top-5 max-md:flex-col">
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                download={pdf}
                className="bg-white rounded-lg flex justify-center items-center w-56 h-12 max-2xl:w-48 max-2xl:h-11 max-2xl:text-lg gap-3 text-xl font-medium hover:transition hover:transform hover:scale-110"
              >
                Curriculum
                <img src={cv} alt="GitHub logo" className="h-7" />
              </a>

              <a
                href="https://github.com/tizianomartinelli"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-lg flex justify-center items-center w-56 h-12 gap-3 text-xl max-2xl:w-48 max-2xl:h-11 max-2xl:text-lg font-medium hover:transition hover:transform hover:scale-110"
              >
                Perfil de GitHub
                <img src={logoGitHub} alt="GitHub logo" className="h-7 max-md:h-5" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="container-img    flex justify-center items-center w-[40%] max-2xl:w-[30%] max-md:w-full max-md:mt-5 max-sm:hidden">
            <img
              src={img}
              alt="about me"
              className="w-[380px] h-[380px]  object-cover rounded-full shadow-lg max-2xl:w-[260px] max-2xl:h-[260px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
export default AboutMe;
