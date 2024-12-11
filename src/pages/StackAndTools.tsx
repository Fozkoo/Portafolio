import imageHelper from "../service/Helper";
import "../index.css";
import ImageSection from "../components/ImageSection";
import Title from "../components/Title";

function StackAndTools() {
  return (
    <div
      id="stack"
      className="container-presentation bg-slate-50 flex flex-col h-[100vh] justify-center gap-2 items-center mx-48 max-2xl:mx-5 max-2xl:h-full max-2xl:pt-10 "
    >
      {/* Stack Section */}
      <div className="container-section flex flex-col w-full px-[7%] max-2xl:px-5">
        <Title title="Stack" />
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-10 bg-[#E8E8E8] shadow-md max-2xl:gap-7 max-2xl:p-6 max-2xl:justify-center max-2xl:shadow-lg">
          <ImageSection images={imageHelper.stackImages.filter((img) => img.group === "lenguajes")} />
          <ImageSection images={imageHelper.stackImages.filter((img) => img.group === "frameworks")} />
        </div>
      </div>

      {/* Tools Section */}
      <div className="container-section mt-10 flex flex-col px-[7%] w-full max-2xl:px-5">
        <Title title="Tools" />
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-10 bg-[#E8E8E8] shadow-md max-2xl:gap-4 max-2xl:p-6 max-2xl:justify-center max-2xl:shadow-lg">
          <ImageSection images={imageHelper.toolsImages.filter((img) => img.group === "tools")} />
        </div>
      </div>
    </div>
  );
}

export default StackAndTools;
