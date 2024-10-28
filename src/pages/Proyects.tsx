import Carousel from '../components/Carousel'
import helper from '../service/Helper'


const img1 = helper.stackImages[6].src
const img2 = helper.stackImages[7].src
const img3 = helper.stackImages[9].src
const img4 = helper.stackImages[5].src


export const Proyects = () => {
  return (
    <>
      <div className="container-proyects flex flex-col bg-slate-50 mx-48 h-[100vh]">


        <div className="container-section flex flex-col w-full px-[7%]">
          <div className="container-text">
            <p className="font-bold text-7xl">Proyects</p>
          </div>


          <div className="container-img h-[600px] flex justify-center items-center rounded-3xl  mt-6  p-10 bg-[#E8E8E8]">

            <div className="container-tarjets   flex flex-col overflow-hidden shadow-xl h-[550px] w-[350px]  rounded-xl">

              <div className="container-carousel flex  justify-center items-center h-[45%]  bg-white">
                <Carousel />
              </div>

              <div className="container-info-tarjets justify-center ite flex flex-col border-t-2 bg-white  p-3 h-[55%] ">
                <p className="text-black text-2xl font-semibold">Arecobus</p>
                <p className='text-gray-500'>Proyecto que recopila la informacion de los distintos buses que operan en San Antonio de Areco.</p>
                <p className='text-black text-xl font-semibold'>Tecnologias utilizadas</p>

                <div className="container-img flex w-full gap-3 h-[50px] justify-normal items-center ">
                  <img src={img1} className='h-[35px]' />
                  <img src={img2} className='h-[30px]'/>
                  <img src={img3} className='h-[35px]'/>
                  <img src={img4} className='h-[35px]'/>
                </div>

                <div className="container-button-view-more flex mt-3 w-full justify-center items-center ">
                  <button className="bg-black text-white px-4 py-2 rounded-lg">Conoce mas!</button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}
