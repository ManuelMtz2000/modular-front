import React, { useState } from 'react';
import { IonLoading, IonImg } from '@ionic/react';
import './Prueba.css';
import { render } from '@testing-library/react';
import App from '../App';

const funcion = () => {
  render(
    <App />
  )
}

export const Prueba : React.FC = () => {
  const [showLoading] = useState(true);

    return (
      <div className='bg-gray-300 p-2'>
        <div className='contenedor flex justify-center'>
        <IonImg className='md:w-1/2' src='assets/logo_transparente.png'></IonImg>
        <IonLoading
        spinner="lines"
        cssClass={"my-custom-class"}
        isOpen={showLoading}
        onDidDismiss={() => funcion()}
        duration={5000}
        />
        </div>
      </div>
    );
}

export default Prueba;