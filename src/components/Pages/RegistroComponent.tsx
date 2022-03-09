import { IonLabel, IonInput, IonIcon, IonButton, IonPage, IonHeader, IonContent, IonImg, IonTitle, IonToolbar } from "@ionic/react";
import { camera } from "ionicons/icons";
import React from "react";

const RegistroComponent: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color='dark'>
            <div className='flex'>
                <IonImg className='w-20' src="/assets/logo_transparente.png" />
                <IonTitle className="text-center">Registro de usuario</IonTitle>
            </div>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div className="m-4 bg-white p-5 rounded-md text-black">
                <div className='mb-3'>
                        <IonLabel>Nombre(s)</IonLabel>
                        <IonInput className='bg-gray-200'></IonInput>
                    </div>
                <form action="" className='mt-4'>
                    <div className='mb-3'>
                        <IonLabel>Apellidos:</IonLabel>
                        <div className="flex">
                            <IonInput required className='bg-gray-200 mr-2' placeholder="Apellido paterno"></IonInput>
                            <IonInput required className='bg-gray-200' placeholder="Apellido materno"></IonInput>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <IonLabel>Correo electrónico:</IonLabel>
                        <IonInput required className="bg-gray-200"></IonInput>
                    </div>
                    <div className='mb-3'>
                        <IonLabel>Contraseña:</IonLabel>
                        <div className="flex">
                            <IonInput type="password" maxlength={16} minlength={8} required className='bg-gray-200 mr-2'></IonInput>
                            <IonInput type="password" maxlength={16} minlength={8} required className='bg-gray-200' placeholder="Confirme contraseña"></IonInput>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <IonLabel>CURP:</IonLabel>
                        <IonInput maxlength={10} required className='bg-gray-200'></IonInput>
                    </div>
                    <div className='mb-5 flex flex-col'>
                        <IonLabel>Foto de identificación oficial: </IonLabel>
                        <div className='flex items-center'>
                            <input required type="file"></input>
                            <IonIcon className='text-2xl mx-2' icon={camera}></IonIcon>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <IonButton color='warning' className='w-full'>Registrarse</IonButton>
                    </div>
                </form>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default RegistroComponent;
