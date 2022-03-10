import { IonLabel, IonInput, IonIcon, IonButton, IonPage, IonHeader, IonContent, IonImg, IonTitle, IonToolbar } from "@ionic/react";
import { camera } from "ionicons/icons";
import React, { useState } from "react";

let API_ENDPOINT = "http://localhost:8000/api/user/new";

const RegistroComponent: React.FC = () => {
  const[nombre, setNombre] = useState('');
  const[apellido1, setApellido1] = useState('');
  const[apellido2, setApellido2] = useState('');
  const[correo, setCorreo] = useState('');
  const[contrasenia, setContrasenia] = useState('');
  const[curp, setCurp] = useState('');

  async function newUser(){
    const formData = new FormData();
    formData.append('nombre', nombre + ' ' + apellido1 + ' ' + apellido2);
    formData.append('correo', correo);
    formData.append('contrasenia', contrasenia);
    formData.append('curp', curp);
    const response = await fetch(API_ENDPOINT, { method: 'POST', body: formData});
    const result = await response.json();
    alert(result);
  }

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
                        <IonInput  value={nombre} onIonChange={e => setNombre(e.detail.value!)} className='bg-gray-200'></IonInput>
                    </div>
                <form action="" className='mt-4'>
                    <div className='mb-3'>
                        <IonLabel>Apellidos:</IonLabel>
                        <div className="flex">
                            <IonInput value={apellido1} onIonChange={e => setApellido1(e.detail.value!)} required className='bg-gray-200 mr-2' placeholder="Apellido paterno"></IonInput>
                            <IonInput value={apellido2} onIonChange={e => setApellido2(e.detail.value!)} required className='bg-gray-200' placeholder="Apellido materno"></IonInput>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <IonLabel>Correo electrónico:</IonLabel>
                        <IonInput value={correo} onIonChange={e => setCorreo(e.detail.value!)} required className="bg-gray-200"></IonInput>
                    </div>
                    <div className='mb-3'>
                        <IonLabel>Contraseña:</IonLabel>
                        <div className="flex">
                            <IonInput value={contrasenia} onIonChange={e => setContrasenia(e.detail.value!)} type="password" maxlength={16} minlength={8} required className='bg-gray-200 mr-2'></IonInput>
                            <IonInput type="password" maxlength={16} minlength={8} required className='bg-gray-200' placeholder="Confirme contraseña"></IonInput>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <IonLabel>CURP:</IonLabel>
                        <IonInput value={curp} onIonChange={e => setCurp(e.detail.value!)} maxlength={10} required className='bg-gray-200'></IonInput>
                    </div>
                    <div className='mb-5 flex flex-col'>
                        <IonLabel>Foto de identificación oficial: </IonLabel>
                        <div className='flex items-center'>
                            <input required type="file"></input>
                            <IonIcon className='text-2xl mx-2' icon={camera}></IonIcon>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <IonButton color='warning' className='w-full' onClick={newUser}>Registrarse</IonButton>
                    </div>
                </form>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default RegistroComponent;
