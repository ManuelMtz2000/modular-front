import React from "react";
import {
  IonItem,
  IonLabel
} from "@ionic/react";
import './CardComponent.css';

interface SimpleCardProps {
    titulo: any;
    direccion: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ titulo, direccion }) => {
  return (
    <IonItem color="white" className="text-black hover:bg-gray-200" button routerLink={direccion}>
        <IonLabel>
            <h1>{ titulo }</h1>
        </IonLabel>
    </IonItem>
  );
};
