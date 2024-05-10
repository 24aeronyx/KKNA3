import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-customGreen py-3 px-8 md:px-24">
      <nav className="flex justify-between bg-customYellow text-black p-2 rounded-xl items-center md:px-4 md:flex-row md:items-center ">
        <div className="flex items-center gap-2">
          <img src="../src/assets/logo.png" className=" w-8"></img>
          <label className="font-bold text-sm md:order-1 md:text-lg">
            Yayasan Darush Sholihin
          </label>
        </div>

        <div className="md:order-3">
          <button onClick={toggleMenu} className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <ul
        className={`flex flex-col items-center md:flex-row ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <li className="w-full py-1 text-center">Home</li>
        <li className="w-full py-1 text-center">Contact</li>
        <li className="w-full py-1 text-center">About</li>
      </ul>
    </header>
  );
}
