
import Helper from '../service/Helper';
import { useEffect, useState } from 'react';
import { Link } from 'lucide-react';
import Info from "..//service/Info.json";
const gitHublogo = Helper.toolsImages[1].src;
const weblogo = Helper.otherLogos[0].src;

interface Images {
    src: string;
    alt: string;
}

interface TechUses {
    src: string;
    alt: string;
}


interface TarjetProps {
    titleProyect: string;
    descriptionProyect: string;
    images: Images[],
    techUses: TechUses[],
    gitHubLink: string;
    webLink: string;
}

export function Tarjet({ titleProyect, descriptionProyect, images, techUses, gitHubLink, webLink }: TarjetProps) {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="container-tarjets flex flex-col overflow-hidden shadow-xl h-[550px] w-[350px] rounded-xl
        
        max-2xl:h-[470px] max-2xl:w-[290px] max-sm:w-[280px]">

            <div className="container-carousel flex justify-center items-center h-[45%] p-3 bg-white  max-2xl:h-[45%]">
                <div className="relative w-full z-[1000] overflow-hidden ">
                    <div className="w-full bg-black h-56 max-2xl:h-44">
                        {images[currentIndex] && (
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt || "image"}
                                className="object-cover h-56 w-full max-2xl:w-full max-2xl:h-full"
                            />
                        )}

                    </div>

                    <div className="absolute bottom-2 left-1/2 transform  -translate-x-1/2  flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full  ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                            />
                        ))}

                    </div>
                </div>



            </div>




            <div className="container-info-tarjets  flex flex-col border-t-2 bg-white p-3 h-[55%]
            max-2xl:h-full
            ">

                <div className="container-info  flex flex-col gap-1">
                    <h2 className="text-black text-2xl font-semibold
                    max-2xl:text-lg
                    ">{titleProyect}</h2>
                    <p className="text-gray-500
                    max-2xl:text-sm max-2xl:font-medium
                    ">{descriptionProyect}</p>
                </div>

                <div className="container-info  flex flex-col gap-1">
                    <h3 className="text-black  text-xl font-semibold mb-3 max-2xl:mb-2
                max-2xl:text-lg
                ">{Info.otherTitles.tecnologiasUsadas}</h3>
                    <div className="container-img flex w-full gap-3 h-[50px]  justify-normal items-center max-2xl:h-[30px]">
                        {techUses.map((techUse, index) => (
                            <img key={index} src={techUse.src} className="w-10 h-10 max-2xl:w-7 max-2xl:h-7" />
                        ))}
                    </div>
                </div>



                <div className="container-button-view-more flex mt-3 gap-5 w-full justify-center items-center">
                    <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                        <img
                            src={gitHublogo}
                            alt="github-logo"
                            className="w-8 h-8 hover:scale-125 transition-transform duration-300"
                        />
                    </a>
                    <a href={webLink} target="_blank" rel="noopener noreferrer">
                        <img
                            src={weblogo}
                            alt="web-img"
                            className="w-8 h-8 hover:scale-125 transition-transform duration-300"
                        />
                    </a>
                </div>






            </div>

        </div>
    );
}
