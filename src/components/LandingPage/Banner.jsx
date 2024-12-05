import React from "react";
import BannerPollos from "../../assets/Banner.png";
import EllipseBanner from "../../assets/EllipseBanner.png";
import '../../App.css'
const Banner = () => {
  return (
    <>
      <div className="w-full h-72 overflow-hidden -top-16 relative flex items-center justify-end">
        <div className="h-full absolute z-10 gradient w-full"></div>
        <img src={BannerPollos} className="w-full h-full" alt="banner pollos" />
      
        <div className="h-48 absolute w-10 z-10 bgcolor"></div>
       
        <div className="absolute z-10 w-44 h-44 left-1/2 transform -translate-x-1/2 hidden lg:block">
       
          <img
            src={EllipseBanner}
            className="w-full h-full rounded-full"
            alt="EllipseBanner"
            />
        </div>
      
        <div className="absolute z-10 right-3/4 h-52 w-72 transform translate-x-3/4 translate-y-10">
          <h1 className="biryanExtraBold text-lg font-bold w-32" >Bienvenido a
            <span className="bungee textColor"> AVITECH</span></h1>
            <p className="text-xs font-semibold textParrafColor">
            Avitech es un innovador proyecto creado por estudiantes
            de la <span className="textColor text-xs font-bold">UpChiapas</span>, enfocado en la automatización de
            cuidados básicos para pollos. Nuestro objetivo es mejorar
            la eficiencia y el bienestar en la avicultura a través
            de soluciones tecnológicas avanzadas.
            </p>
        </div>
       
      </div>
    </>
  );
};

export default Banner;
