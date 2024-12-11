import img from "../assets/images/tizianomartinelli.webp";
import logoGitHub from "../assets/icons/github-edit-1.svg";
import cv from "../assets/icons/curriculum.svg";
import Title from "../components/Title.tsx";
import pdf from "../assets/images/Tiziano Martinelli.pdf";

export const AboutMe = () => {


  const downloadFile = (url: string, fileName?: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'currículum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const CurriculoBoton = () => {
    const handleClick = () => {
      const url = pdf; 
      downloadFile(url);
    };
  }

  return (
    <div
      id="aboutme"
      className="container-about-me flex flex-col bg-slate-50 mx-48 h-[100vh] max-2xl:mx-0 max-2xl:h-full max-2xl:pt-14"
    >
      <div className="container-section flex flex-col w-full px-[7%] max-md:px-5">
        <Title title="Sobre mí" />

        <div className="container flex bg-gree justify-center items-center rounded-3xl mt-6 p-10 bg-[#E8E8E8]/80 shadow-md max-2xl:p-5 max-md:flex-col max-md:p-3">
          {/* Texto */}
          <div className="container-text text-gray-800 flex justify-center items-center text-2xl flex-col font-medium h-full w-[60%] p-2 max-2xl:w-[85%] max-2xl:text-base max-md:w-full max-2xl:py-8">
            <p>
              Soy estudiante de Licenciatura en Informática en la Universidad Nacional de San Antonio de Areco y autodidacta en tecnologías como React, Ionic, y TypeScript. Desde que comencé mi carrera, descubrí una pasión por la creación de aplicaciones web y móviles, y he trabajado tanto en proyectos personales como profesionales. Actualmente, enseño programación a niños y ofrezco servicios como freelancer.
            </p>

            {/* Botones */}
            <div className="container-buttons  flex justify-center items-center relative top-12 gap-10 w-full max-2xl:top-8 max-md:gap-5 max-md:top-5 max-md:flex-col">
              <a
                href="https://www.linkedin.com/in/tiziano-martinelli/"
                target="_blank"
                rel="noreferrer"
               
                className="bg-white rounded-lg flex justify-center items-center w-56 h-12 gap-3 text-xl font-medium hover:transition hover:transform hover:scale-110 max-md:w-full max-md:text-base"
              >
                Curriculum
                <img src={cv} alt="GitHub logo" className="h-7 max-md:h-5" />
              </a>

              <a
                href="https://github.com/tizianomartinelli"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-lg flex justify-center items-center w-56 h-12 gap-3 text-xl font-medium hover:transition hover:transform hover:scale-110 max-md:w-full max-md:text-base"
              >
                Perfil de GitHub
                <img src={logoGitHub} alt="GitHub logo" className="h-7 max-md:h-5" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="container-img flex justify-center items-center w-[40%] max-2xl:w-[30%] max-md:w-full max-md:mt-5 max-2xl:hidden">
            <img
              src={img}
              alt="about me"
              className="w-[340px] h-[340px] object-cover rounded-full shadow-lg max-md:w-[200px] max-md:h-[200px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
export default AboutMe;
