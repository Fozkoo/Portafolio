import imageHelper from '../service/Helper';
import "..//index.css"
import ImageSection from "..//components/ImageSection";



function StackAndTools() {
  return (
    <div id='stack' className="container-presentation  bg-slate-50 flex flex-col h-[100vh] justify-center gap-2 items-center mx-48">      
      <div className="container-section flex flex-col w-full px-[7%]">
        <div className="container-text">
          <p className="font-bold text-7xl">Stack</p>
        </div>
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-10 bg-[#E8E8E8]">
          <ImageSection images={imageHelper.stackImages.filter(img => img.group === "lenguajes")} />
          <ImageSection images={imageHelper.stackImages.filter(img => img.group === "frameworks")} />
        </div>
      </div>

      
      <div className="container-section mt-10 flex flex-col px-[7%] w-full">
        <div className="container-text">
          <p className="font-bold text-7xl">Tools</p>
        </div>
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-10 bg-[#E8E8E8]">
          <ImageSection images={imageHelper.toolsImages.filter(img => img.group === "tools")} />
        </div>
      </div>
    </div>
  );
}

export default StackAndTools;
