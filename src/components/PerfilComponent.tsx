import React from "react";
import { SimpleCard } from "./SimpleCardComponent";

const PerfilComponent: React.FC= () => {
  return (
    <div className="m-4 bg-white p-5 rounded-md text-black">
      <SimpleCard titulo="Perfil" direccion="/"/>
      <SimpleCard titulo="Publicaciones" direccion="/"/>
      <SimpleCard titulo="Ayuda" direccion="/ayuda"/>
      <SimpleCard titulo="Acerca de la aplicación" direccion="/acerca"/>
      <SimpleCard titulo="Cerrar sesión" direccion="/"/>
    </div>
  );
};

export default PerfilComponent;
