import imageHelper from '../service/Helper';


interface Image {
  src: string;
  alt: string;
}

interface ImageSectionProps {
  images: Image[];
}

function ImageSection({ images }: ImageSectionProps) {
  return (
    <section className={`flex w-full flex-wrap gap-5 justify-between items-center`}>
      {images.map((image, index) => (
        <img key={index} src={image.src} className="h-28" alt={image.alt} />
      ))}
    </section>
  );
}

function StackAndTools() {
  return (
    <div className="container-presentation  bg-slate-50 flex flex-col h-[90vh] justify-center gap-2 items-center mx-48">
      

      
      
      <div className="container-section flex flex-col w-full">
        <div className="container-text">
          <p className="font-bold text-7xl">Stack</p>
        </div>
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-7 bg-[#E8E8E8]">
          <ImageSection images={imageHelper.stackImages.filter(img => img.group === "lenguajes")} />
          <ImageSection images={imageHelper.stackImages.filter(img => img.group === "frameworks")} />
        </div>
      </div>

      
      <div className="container-section mt-10 flex flex-col w-full">
        <div className="container-text">
          <p className="font-bold text-7xl">Tools</p>
        </div>
        <div className="container-img flex flex-wrap rounded-3xl gap-5 mt-6 justify-between items-center p-7 bg-[#E8E8E8]">
          <ImageSection images={imageHelper.toolsImages.filter(img => img.group === "tools")} />
        </div>
      </div>
    </div>
  );
}

export default StackAndTools;
