const Footer: React.FC = () => {
    return (
        <footer
            id="footer"
            className="container-contact bg-slate-50 flex justify-center items-center flex-col h-[300px] mx-48 max-2xl:mx-20 max-xl:mx-5 max-2xl:h-auto  max-2xl:p-5"
        >

            <div className="text flex items-center">
                <p className="text-red-500 font-medium">&lt;/</p>
                <p className="font-medium mx-1 text-center">TIZIANO MARTINELLI</p>
                <p className="text-red-500 font-medium">&gt;</p>
            </div>


            <div className="features mt-6 flex gap-4 max-2xl:flex-wrap max-2xl:justify-center">
                <a
                    href="#presentation"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    Presentacion
                </a>
                <a href="#stack" className="text-gray-700 hover:text-gray-900 text-center">
                    Stack
                </a>
                <a
                    href="#proyects"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    Proyects
                </a>
                <a
                    href="#aboutme"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    About me
                </a>
                <a
                    href="#contact"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    Contact
                </a>
            </div>
        </footer>

    );
};

export default Footer;
