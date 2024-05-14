import { useState } from "react";

export default function Navbar({ handleScrollTo }) {
    const [navbar, setNav] = useState(false);

    const handleNavbar = () => {
        setNav((prevNav) => !prevNav);
    };

    return (
        <div className="bg-customGreen p-4">
            <nav className="bg-yellow-100 w-auto h-12 text-lg lg:text-base lg:rounded-full font-bold lg:mx-24 lg:flex z-50">
                <div className="w-full h-full flex justify-between px-4 py-1 lg:justify-start lg:gap-4 lg:w-min lg:flex-1">
                    <div className="lg:flex gap-3 items-center">
                        <div className="h-full aspect-square">
                            <img src="https://i.imgur.com/bq6JwF3.png" alt="logo" className="w-auto h-full" />
                        </div>
                        <div className="text-xl hidden text-black lg:flex">Yayasan Darush Sholihin</div>
                    </div>
                    <div className="h-full aspect-square flex flex-col items-center justify-center gap-2 lg:hidden" onClick={handleNavbar}>
                        <div className="bg-black h-1 w-9" />
                        <div className="bg-black h-1 w-9" />
                        <div className="bg-black h-1 w-9" />
                    </div>
                </div>
                <ul className={`w-full text-black flex-col px-4 relative cursor-pointer text-lg bg-customGreen rounded-b-xl lg:w-auto lg:bg-transparent lg:text-black lg:relative lg:flex lg:flex-row lg:gap-5 lg:items-center ${navbar ? "hidden" : "flex"}`}>
                    <li onClick={() => { handleScrollTo('home'); handleNavbar(); }} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-yellow-100 lg:border-0 border-b-2">Home</li>
                    <li onClick={() => { handleScrollTo('location'); handleNavbar(); }} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-yellow-100 lg:border-0 border-b-2">Lokasi</li>
                    <li onClick={() => { handleScrollTo('mission'); handleNavbar(); }} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-yellow-100 lg:border-0 border-b-2">Misi</li>
                    <li onClick={() => { handleScrollTo('target'); handleNavbar(); }} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-yellow-100 border-b-2 lg:border-0 ">Tujuan</li>
                    <li onClick={() => { handleScrollTo('organization'); handleNavbar(); }} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center lg:border-0">Organisasi</li>
                </ul>
            </nav>
        </div>
    );
}
