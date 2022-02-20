import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

const SlidesComponent: React.FC = () => {
    return (
      <IonPage>
        <p>xdxd</p>
      <IonContent>
        <Swiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
      );
};
export default SlidesComponent;