import { Tarjet } from "../components/Tarjet"
import Helper from "../service/Helper"

export const Proyects = () => {

  const proyects = Helper.totalData;

  return (
    <>
      <div className="container-proyects flex flex-col bg-slate-50 mx-48 h-[100vh]">


        <div className="container-section flex flex-col w-full px-[7%]">
          <div className="container-text">
            <p className="font-bold text-7xl">Proyects</p>
          </div>


          <div className="container-img  gap-5 flex flex-wrap justify-center items-center rounded-3xl  mt-6  p-10 bg-[#E8E8E8]/80">
            {proyects.map((proyects, index) => (
              <Tarjet
                key={index}
                titleProyect={proyects.titleProyect}
                descriptionProyect={proyects.description}
                images={[{ src: proyects.img1, alt: proyects.titleProyect }, { src: proyects.img2, alt: proyects.titleProyect }, { src: proyects.img3, alt: proyects.titleProyect }]}
                techUses={[{ src: proyects.techUses1, alt: proyects.titleProyect }, { src: proyects.techUses2, alt: proyects.titleProyect }, { src: proyects.techUses3, alt: proyects.titleProyect }, { src: proyects.techUses4, alt: proyects.titleProyect }]}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
