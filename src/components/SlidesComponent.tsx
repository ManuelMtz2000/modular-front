import React from 'react';
import { IonButton, IonSlide, IonSlides } from '@ionic/react';
import { CardComponent } from './CardComponent';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const SlidesComponent: React.FC = () => {
    return (
      <div>
        <IonSlides options={slideOpts}>
          <IonSlide className='flex flex-col-reverse'>
            <div className="flex justify-center">
              <IonButton color="warning">Detalles</IonButton>
              <IonButton color="warning">Es mío</IonButton>
            </div>
            <CardComponent direccion="/assets/cuaderno.jpeg" />
          </IonSlide>
          <IonSlide className='flex flex-col-reverse'>
            <div className="flex justify-center">
              <IonButton color="warning">Detalles</IonButton>
              <IonButton color="warning">Es mío</IonButton>
            </div>
            <CardComponent direccion="/assets/sombrilla.jpeg" />
          </IonSlide>
          <IonSlide className='flex flex-col-reverse'>
            <div className="flex justify-center">
              <IonButton color="warning">Detalles</IonButton>
              <IonButton color="warning">Es mío</IonButton>
            </div>
            <CardComponent direccion="/assets/sombrilla 2.jpeg" />
          </IonSlide>
        </IonSlides>
        
      </div>
      );
};
export default SlidesComponent;