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
        <div className="moving-container justify-between flex gap-5 max-2xl:flex-wrap max-2xl:gap-6 max-2xl:justify-center">
          {images.map((image, index) => (
            <img key={index} src={image.src} className="h-24 max-2xl:h-14" alt={image.alt} />
          ))}
        </div>
      </section>
    );
  }

  export default ImageSection;