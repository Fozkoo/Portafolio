import { Tarjet } from "../components/Tarjet"
import Helper from "../service/Helper"
import Title from "..//components/Title.tsx"
export const Proyects = () => {

  const proyects = Helper.totalData;
  const imgSupport = Helper.imgSupport;

  return (
    <>
      <div id="proyects" className="container-proyects  relative flex flex-col bg-slate-50 mx-48 max-2xl:mx-20 max-xl:mx-5  h-[100vh] justify-center  max-2xl:pb-16 max-2xl:h-full max-2xl:pt-14">


        <div className="container-section flex  flex-col w-full px-[7%] max-2xl:px-[2%]  max-sm:px-5">
          <Title
            title="Proyectos"
          />

          <div
            className="container-img gap-5  flex flex-wrap justify-center items-center rounded-3xl mt-6 p-10 shadow-md bg-[#E8E8E8]/80 max-2xl:p-5  max-2xl:gap-16"
          >
            {proyects.map((proyect, index) => (
              <Tarjet
                key={index}
                titleProyect={proyect.titleProyect}
                descriptionProyect={proyect.description}
                images={[
                  { src: proyect.img1 || imgSupport, alt: proyect.titleProyect },
                  { src: proyect.img2 || imgSupport, alt: proyect.titleProyect },
                  { src: proyect.img3 || imgSupport, alt: proyect.titleProyect },
                ]}
                techUses={[
                  { src: proyect.techUses1, alt: proyect.titleProyect },
                  { src: proyect.techUses2 || imgSupport, alt: proyect.titleProyect },
                  { src: proyect.techUses3 || imgSupport, alt: proyect.titleProyect },
                  { src: proyect.techUses4 || imgSupport, alt: proyect.titleProyect },
                ]}
                gitHubLink={proyect.gitHubLink}
                webLink={proyect.webLink}
              />
            ))}
          </div>


        </div>
      </div>
    </>
  )
}
