import React, {useEffect, useState} from 'react';

const MostrarMedia = ({ media }) => {
 
  useEffect(()=>{
    localStorage.setItem('media', media.toFixed(2))
  }, [media])
   
  return (
    <div className="p-4 w-1/3">
      <h2 className="text-md">Media de Pesos de Pollos</h2>
      <p className="text-xl">{media.toFixed(2)} kg</p>
    </div>
  );
};

export default MostrarMedia;
