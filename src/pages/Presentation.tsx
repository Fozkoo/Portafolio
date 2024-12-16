import img from '../assets/images/tizianomartinelli.webp';
import { Header } from '../components/Header';
import "..//style/Styles.css";
import Info from "..//service/Info.json";
import stackImages from "..//service/Helper";

function Presentation() {
  return (
    <>

      <section className="section-desktop flex  max-md:hidden">
        <div
          id="presentation"
          className="container-presentation flex h-[100vh] w-full bg-slate-50 mx-48 max-2xl:mx-20 max-xl:mx-5 "
        >

          <div className="container-section-one   flex  items-center w-[60%] ">

            <div className="container-name-and-text  !px-24 flex flex-col w-full
             max-2xl:
            max-sm:">


              <h1 className="nombre text-[80px]  font-bold
              max-xl:text-5xl
              max-2xl:text-6xl
              ">
                {Info.personal_info.name}
              </h1>
              <p className="text-4xl  font-semibold text-gray-600
              max-2xl:text-4xl
              max-xl:text-3xl
              ">
                {Info.personal_info.profession}
              </p>
            </div>
          </div>


          <div className="container-section-two  w-[40%] flex justify-center items-center ">

            {/* BANDERASSSSSSSSSSSSSSSSSSSSSS
          <div className="container-flags  flex justify-center items-center gap-2 absolute top-9">
            <img src={stackImages.argImagen} className='cursor-pointer w-8 h-8 max-2xl:h-7 max-2xl:w-7' onClick={() => alert("argentina")}/>
            <img src={stackImages.englishImagen} className='w-8 h-8 max-2xl:h-7 max-2xl:w-7'/>
          </div>

        */}
            <img
              src={img}
              alt="Tiziano Martinelli"
              className="imagen w-[350px] h-[350px]   object-cover rounded-full shadow-lg
              max-xl:w-[240px] max-xl:h-[240px]
              max-2xl:w-[260px] max-2xl:h-[260px]
              "
            />
          </div>

        </div>
      </section>


      <section className="section-mobile hidden max-md:flex">
        <Header />
        <div
          id="presentation"
          className="container-presentation flex h-screen bg-slate-50 px-8 md:px-16 lg:px-32 flex-col items-center justify-center gap-8"
        >
          <div className="container-img flex justify-center items-center">
            <img
              src={img}
              alt="Tiziano Martinelli"
              className="w-[260px] h-[260px]  object-cover rounded-full shadow-lg"
            />
          </div>

          <div className="container-text  flex flex-col px-3 items-center text-center">
            <h1 className="text-4xl  w-full font-bold text-gray-800">
              {Info.personal_info.name}
            </h1>
            <h2 className="text-2xl  w-full md:text-3xl font-medium text-gray-600 mt-2">
              {Info.personal_info.profession}
            </h2>
            <p className="text-base  text-gray-500 w-full mt-4">
              {Info.personal_info.extraData}
            </p>

            {/* banderas pero para el celu

            <div className="container-flags  flex justify-center items-center gap-2  relative top-6">
              <img src={stackImages.argImagen} className='cursor-pointer w-7 h-7 ' onClick={() => alert("argentina")} />
              <img src={stackImages.englishImagen} className='w-7 h-7' />
            </div>

            */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Presentation;