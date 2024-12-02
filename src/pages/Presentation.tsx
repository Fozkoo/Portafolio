import img from '..//assets/images/tizianomartinelli.webp'

function Presentation() {
  return (
    <>
      <div id='presentation' className="container-presentation flex h-[100vh] bg-slate-50 mx-48">

        <div className="container-section-one flex justify-center items-center w-[65%] ">
          <div className="container-name-and-text flex flex-col ">
            <h1 className='text-8xl font-bold'>Tiziano Martinelli</h1>
            <p className='text-5xl font-bold'>Desarrollador Web</p>
          </div>
        </div>


        <div className="container-section-two w-[35%] flex justify-center items-center ">
          <div className="flex justify-center items-center h-screen ">
            <img src={img}
              className="w-[340px] h-[509px] object-cover rounded-full shadow-lg" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Presentation