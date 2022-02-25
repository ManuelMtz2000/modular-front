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
          <IonSlide><CardComponent direccion="/assets/cuaderno.jpeg" /></IonSlide>
          <IonSlide><CardComponent direccion="/assets/sombrilla.jpeg" /></IonSlide>
          <IonSlide><CardComponent direccion="/assets/sombrilla 2.jpeg" /></IonSlide>
      </IonSlides>
      );
};
export default SlidesComponent;