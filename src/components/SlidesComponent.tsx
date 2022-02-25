import React from 'react';
import { IonSlide, IonSlides } from '@ionic/react';
import { CardComponent } from './CardComponent';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const SlidesComponent: React.FC = () => {
    return (
      <IonSlides options={slideOpts}>
          <IonSlide><CardComponent direccion="/assets/logo_transparente.png" /></IonSlide>
          <IonSlide><CardComponent direccion="/assets/prueba.jpg" /></IonSlide>
          <IonSlide><h1>xddd</h1></IonSlide>
      </IonSlides>
      );
};
export default SlidesComponent;