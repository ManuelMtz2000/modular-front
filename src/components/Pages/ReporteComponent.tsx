import { IonButton, IonHeader, IonImg, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const ReporteComponent: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
        <IonToolbar color='dark'>
          <div className='flex'>
              <IonImg className='w-20' src="/assets/logo_transparente.png" />
              <IonTitle className="text-center">Reportar</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
        <div className="m-auto w-full md:w-1/2 bg-white p-5 rounded-md text-black">
        <form action="" className='mt-4'>
            <div className='mb-3'>
                <IonLabel>Descripción del reporte:</IonLabel>
                <IonTextarea className='bg-gray-200'></IonTextarea>
            </div>
            <div className='flex justify-center'>
                <IonButton color='warning' className='w-full' routerLink="/inicio">Reportar</IonButton>
            </div>
        </form>
        </div>
    </IonPage>
  );
};

export default ReporteComponent;
