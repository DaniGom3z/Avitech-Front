import React, { useState } from "react";
import "../../App.css";
import Logo from "../../assets/Avitech logo.png";
import { Link } from "react-router-dom";
import Hamburguer from "../../icons/menu.png";

const Header = ({ classname }) => {
  const [option, setOption] = useState('inicio');
  const [show, setShow] = useState(false);

  const handleButton = (option) => {
    setOption(option);
    setShow(false); 
  };

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className={classname}>
      <header className="w-full h-16">
        <nav className="flex relative h-full justify-between items-center px-4">
          <div className="h-32">
            <img src={Logo} className="w-32" alt="logo" />
       
          </div>

          <div className="lg:hidden absolute right-10 z-10">
            <button onClick={toggleMenu} className="cursor-pointer">
              <img src={Hamburguer} className="h-5" alt="boton hamburguesa" />
            </button>
          </div>
       

       
          <ul
            className={`${
              show ? "block entrada" : "hidden"
            } lg:flex lg:flex-row flex flex-col gap-5 lg:w-full w-2/4 lg:h-full h-44 items-center lg:shadow-none shadow-md lg:bg-transparent bg-white rounded-sm justify-center absolute lg:right-0 right-5 lg:top-0 top-2 biryaniRegular font-bold text-xs flex-wrap mx-auto`}
          >
            <li className="py-2  text-center ">
              <Link
                onClick={() => handleButton("inicio")}
                className={option === "inicio" ? "selected" : ""}
                >
                Inicio
              </Link>
            </li>
            <li className="py-2 text-center ">
              <Link
                onClick={() => handleButton("acerca de nosotros")}
                className={option === "acerca de nosotros" ? "selected" : ""}
                >
                Acerca de nosotros
              </Link>
            </li>
            <li className="py-2  text-center ">
              <Link
                onClick={() => handleButton("contactanos")}
                className={option === "contactanos" ? "selected" : ""}
                >
                Contactanos
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
