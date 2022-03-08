import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import './EntrarComponent.css';

let bandera = false;

function vista(){
  bandera = !bandera;
}

const EntrarComponent: React.FC = () => {
  const [placeholder, setPlaceholder] = useState("Código de SIIAU:");
  const [type, setType] = useState("number");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='dark'>
          <div className='flex'>
              <IonImg className='w-20' src="/assets/logo_transparente.png" />
              <IonTitle className="text-center">Iniciar sesión</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="fondo">
        <div className="flex justify-center items-center h-full text-black">
          <div className="w-1/2 p-3 bg-orange-300 rounded-lg border border-orange-300 shadow-lg">
            <div className="flex justify-center">
              <IonButton color="warning" onClick={() => setPlaceholder("Código de SIIAU:")}>Estudiante</IonButton>
              <IonButton color="warning" onClick={() => setPlaceholder("Correo electrónico:")}>Externo</IonButton>
            </div>
            <div>
              <div className="mb-2">
                <IonLabel>{ placeholder }</IonLabel>
                <IonInput type="number" className='bg-gray-200 rounded-md'></IonInput>
              </div>
              <div className="mb-2">
                <IonLabel>Contraseña:</IonLabel>
                <IonInput type="password" className='bg-gray-200 rounded-md'></IonInput>
              </div>
            </div>
            <IonButton className="w-full" color="warning">Entrar</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EntrarComponent;
