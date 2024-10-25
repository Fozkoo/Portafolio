interface Image {
    src: string;
    alt: string;
  }
  
  interface ImageSectionProps {
    images: Image[];
  }
  
  function ImageSection({ images }: ImageSectionProps) {
    return (
      <section className="image-section w-full overflow-hidden">
        <div className="moving-container justify-between flex gap-5">
          {images.map((image, index) => (
            <img key={index} src={image.src} className="h-24" alt={image.alt} />
          ))}
        </div>
      </section>
    );
  }

  export default ImageSection;