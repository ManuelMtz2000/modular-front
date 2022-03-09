import { IonLabel } from "@ionic/react";
import React from "react";

const AyudaContenidoComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center m-4 bg-white p-5 rounded-md text-black">
          <IonLabel>Manejo de pantalla de inicio</IonLabel>
          <iframe className="mb-2 md:w-1/2 md:h-80" allowFullScreen src="https://www.youtube.com/embed/oact8AdBx80" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <IonLabel>Manejo de pantalla de publicación</IonLabel>
          <iframe className="mb-2 md:w-1/2 md:h-80" allowFullScreen src="https://www.youtube.com/embed/Kkdhtb9DVWQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <IonLabel>Manejo de pantalla de perfil</IonLabel>
          <iframe className="mb-2 md:w-1/2 md:h-80" allowFullScreen src="https://www.youtube.com/embed/Kkdhtb9DVWQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
};

export default AyudaContenidoComponent;