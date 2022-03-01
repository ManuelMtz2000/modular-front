import React from "react";
import { SimpleCard } from "./SimpleCardComponent";

const PerfilComponent: React.FC= () => {
  return (
    <div className="m-4 bg-white p-5 rounded-md text-black">
      <SimpleCard titulo="Perfil"/>
      <SimpleCard titulo="Publicaciones"/>
      <SimpleCard titulo="Ayuda"/>
      <SimpleCard titulo="Acerca de la aplicación"/>
      <SimpleCard titulo="Cerrar sesión"/>
    </div>
  );
};

export default PerfilComponent;
