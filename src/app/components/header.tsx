"use client"
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="fixed h-16 w-full bg-gradient-to-r from-[#4747470F] to-[#776A7D] flex justify-between items-center px-4 z-50">
      <img src="/assets/logo.png" alt="Logo da Sanchez Dev" className="w-16 h-9" />

      <button onClick={handleOpenMenu} className="md:hidden">
        <img src="/assets/menu-mobile.png" alt="Menu" className="w-12 h-12" />
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute top-20 right-2 bg-[#4747479a] rounded-md shadow-lg p-4 flex flex-col gap-4 md:hidden font-medium
          transition-all duration-300 ease-in-out
          ${openMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        <a href="#home" className="transition-colors duration-300 hover:text-[#820EB8]" onClick={handleOpenMenu}>Home</a>
        <a href="#sobre" className="transition-colors duration-300 hover:text-[#820EB8]" onClick={handleOpenMenu}>Sobre nós</a>
        <a href="#servicos" className="transition-colors duration-300 hover:text-[#820EB8]" onClick={handleOpenMenu}>Serviços</a>
        <a href="#contato" className="transition-colors duration-300 hover:text-[#820EB8]" onClick={handleOpenMenu}>Contato</a>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#home" className="transition-colors duration-300 hover:text-[#820EB8]">Home</a>
        </li>
        <li>
          <a href="#sobre" className="transition-colors duration-300 hover:text-[#820EB8]">Sobre nós</a>
        </li>
        <li>
          <a href="#servicos" className="transition-colors duration-300 hover:text-[#820EB8]">Serviços</a>
        </li>
        <li>
          <a href="#contato" className="transition-colors duration-300 hover:text-[#820EB8]">Contato</a>
        </li>
      </ul>
    </header>
  );
}
