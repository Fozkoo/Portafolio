import React from 'react'
import Carousel from '../components/Carousel'

export const Proyects = () => {
  return (
    <>
      <div className="container-proyects flex flex-col bg-slate-50 mx-48 h-[100vh]">


        <div className="container-section flex flex-col w-full px-[7%]">
          <div className="container-text">
            <p className="font-bold text-7xl">Proyects</p>
          </div>


          <div className="container-img h-[600px] flex justify-center items-center rounded-3xl  mt-6  p-10 bg-[#E8E8E8]">

            <div className="container-tarjets flex h-[256px] w-[70%] rounded-2xl ">

              <div className="section carousel rounded-s-2xl overflow-hidden  w-[60%]">
                <Carousel />
              </div>

              <div className="section-text bg-[#232121] rounded-e-2xl flex justify-center items-center h-[256px]  w-[40%]">
                asdads
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
