import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id='footer' className="container-contact bg-slate-50 flex justify-center items-center flex-col h-[300px] mx-48">
            <div className="text flex">
                <p className="text-red-500 font-medium">&lt;/</p>
                <p className="font-medium">TIZIANO MARTINELLI</p>
                <p className="text-red-500 font-medium">&gt;</p>
            </div>


            <div className="features mt-6 flex gap-4">
                <a href="#presentation" className="text-gray-700 hover:text-gray-900">Presentacion</a>
                <a href="#stack" className="text-gray-700 hover:text-gray-900">Stack</a>
                <a href="#proyects" className="text-gray-700 hover:text-gray-900">Proyects</a>
                <a href="#aboutme" className="text-gray-700 hover:text-gray-900">About me</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

        </footer>
    );
};

export default Footer;
