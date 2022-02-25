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
      <IonImg src={ direccion } className="img" />
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
