
import Helper from '../service/Helper';
import { useEffect, useState } from 'react';

interface images {
    src: string;
    alt: string;
}


interface TarjetProps {
    titleProyect: string;
    descriptionProyect: string;
    images: images[],
    techUses1: string;
    techUses2: string;
    techUses3: string;
    techUses4: string;
}

export function Tarjet({ titleProyect, descriptionProyect, images, techUses1, techUses2, techUses3, techUses4 }: TarjetProps) {

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
        <div className="container-tarjets flex flex-col overflow-hidden shadow-xl h-[550px] w-[350px] rounded-xl">
            <div className="container-carousel flex justify-center items-center h-[45%] bg-white">
                <div className="relative w-full z-[1000] overflow-hidden">
                    <div className="w-full h-56 p-1">
                        {images[currentIndex] && (
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt || "image"}
                                className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
                            />
                        )}
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-info-tarjets justify-center flex flex-col border-t-2 bg-white p-3 h-[55%]">
                <p className="text-black text-2xl font-semibold">{titleProyect}</p>
                <p className="text-gray-500">{descriptionProyect}</p>
                <p className="text-black text-xl font-semibold">Tecnologías utilizadas</p>

                <div className="container-img flex w-full gap-3 h-[50px] justify-normal items-center">
                    <img src={techUses1} className="h-[35px]" alt="Tech icon 1" />
                    <img src={techUses2} className="h-[30px]" alt="Tech icon 2" />
                    <img src={techUses3} className="h-[35px]" alt="Tech icon 3" />
                    <img src={techUses4} className="h-[35px]" alt="Tech icon 4" />
                </div>

                <div className="container-button-view-more flex mt-3 w-full justify-center items-center">
                    <button className="bg-black text-white px-4 py-2 rounded-lg">Ver más</button>
                </div>
            </div>
        </div>
    );
}
