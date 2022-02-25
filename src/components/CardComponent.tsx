import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg
} from "@ionic/react";
import './CardComponent.css';

interface CardComponentProps {
    direccion: any;
}

export const CardComponent: React.FC<CardComponentProps> = ({ direccion }) => {
  return (
    <IonCard>
      <div className="flex flex-col">
        <div className="self-start flex m-2">
          <IonImg src="assets/perfil.jpeg" className="perfil" />
          <h1 className="m-2">Mario Duran</h1>
        </div>
        <IonImg src={ direccion } className="img" />
      </div>
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </IonCardContent>
    </IonCard>
  );
};
