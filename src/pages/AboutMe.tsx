import img from "..//assets/images/tizianomartinelli.jpeg"
import logoGitHub from "..//assets/icons/github-edit-1.svg"
import cv from "..//assets/icons/curriculum.svg"
import linkedin from "..//assets/icons/linkedin.svg"
export const AboutMe = () => {
  return (
    <div className='container-proyects flex flex-col bg-slate-50 mx-48 h-[100vh]'>
      <div className="container-section  flex  flex-col w-full px-[7%]">
        <div className="container-text">
          <p className="font-bold text-7xl">About me</p>
        </div>

        <div className="container  flex justify-center  items-center rounded-3xl  mt-6  p-10 bg-[#E8E8E8]/80">
          <div className="container-text flex  text-justify justify-center items-center text-2xl  flex-col font-medium h-full  w-[60%] p-2">
            <p>Soy estudiante de Licenciatura en Informática en la Universidad Nacional de San Antonio de Areco y autodidacta en tecnologías como React, Ionic, y TypeScript. Desde que comencé mi carrera, descubrí una pasión por la creación de aplicaciones web y móviles, y he trabajado tanto en proyectos personales como profesionales. Actualmente, enseño programación a niños y ofrezco servicios como freelancer.
            </p>

            <div className="container-buttons  flex justify-center items-center relative  top-12 gap-10 w-full">
              <a
                href="https://www.linkedin.com/in/tiziano-martinelli/"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-lg flex justify-center items-center w-56 gap-3 h-12 font-medium text-xl hover:transition hover:transform hover:scale-110"
              >
                Curriculum
                 <img src={cv} alt="GitHub logo" className="h-7" />
              </a>


              <a
                href="https://github.com/tizianomartinelli"
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-lg flex justify-center items-center w-56 h-12 gap-3 text-xl font-medium hover:transition hover:transform hover:scale-110"
              >
                Perfil de GitHub
                <img src={logoGitHub} alt="GitHub logo" className="h-7" />
              </a>
            </div>

          </div>



          <div className="container-img  flex justify-center items-center  w-[40%]">
            <img src={img} alt="about me" className="w-[340px] h-[509px] object-cover rounded-full shadow-lg" />
          </div>

        </div>
      </div>
    </div>
  )
}
