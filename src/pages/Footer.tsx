import Info from "..//service/Info.json"
const Footer: React.FC = () => {
    return (
        <footer
            id="footer"
            className="container-contact  bg-slate-50 flex justify-center items-center flex-col h-[300px] mx-48 max-2xl:mx-20 max-sm:mx-5 max-2xl:h-auto  max-2xl:p-5"
        >
            <div className="text flex items-center">
                <p className="text-red-500 font-medium">&lt;/</p>
                <p className="font-medium mx-1 text-center">{Info.personal_info.name.toUpperCase()}</p>
                <p className="text-red-500 font-medium">&gt;</p>
            </div>
            <div className="features mt-6 flex gap-4 max-2xl:flex-wrap max-2xl:justify-center">
                <a
                    href="#presentation"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    {Info.otherTitles.Presentacion}
                </a>
                <a href="#stack" className="text-gray-700 hover:text-gray-900 text-center">
                    {Info.otherTitles.Stack}
                </a>
                <a
                    href="#proyects"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    {Info.otherTitles.Proyectos}
                </a>
                <a
                    href="#aboutme"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    {Info.otherTitles.SobreMi}
                </a>
                <a
                    href="#contact"
                    className="text-gray-700 hover:text-gray-900 text-center"
                >
                    {Info.otherTitles.Contacto}
                </a>
            </div>
        </footer>

    );
};
export default Footer;