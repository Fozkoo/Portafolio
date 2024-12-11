export const Header = () => {
  return (
    <>
        <nav className='fixed hidden w-full'>
            <div className="container-nav bg-slate-50/40 flex justify-center items-center mx-48 h-[80px]">
                <div className="nav-links flex gap-10">
                    <a href="#stack" className="text-gray-700 font-medium hover:text-gray-900">Stack</a>
                    <a href="#proyects" className="text-gray-700 font-medium hover:text-gray-900">Proyects</a>
                    <a href="#aboutme" className="text-gray-700 font-medium hover:text-gray-900">About me</a>
                    <a href="#contact" className="text-gray-700 font-medium hover:text-gray-900">Contact</a>
                </div>
            </div>
        </nav>
    </>
  )
}
