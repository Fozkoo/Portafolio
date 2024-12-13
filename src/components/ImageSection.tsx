interface Image {
    src: string;
    alt: string;
  }
  
  interface ImageSectionProps {
    images: Image[];
  }
  
  function ImageSection({ images }: ImageSectionProps) {
    return (
      <section className="image-section w-full  overflow-hidden">
        <div className="moving-container justify-between  flex gap-5 max-2xl:flex-wrap max-sm:justify-center max-2xl:px-12 max-sm:px-2">
          {images.map((image, index) => (
            <img key={index} src={image.src} className="h-24 w-24 max-2xl:h-[73px] max-2xl:w-[73px] max-sm:h-[60px] max-sm:w-[60px]" alt={image.alt} />
          ))}
        </div>
      </section>
    );
  }

  export default ImageSection;