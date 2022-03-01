import React from "react";
import {
  IonItem,
  IonLabel
} from "@ionic/react";
import './CardComponent.css';

interface SimpleCardProps {
    titulo: any;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ titulo }) => {
  return (
    <IonItem color="white" className="text-black hover:bg-gray-200" button>
        <IonLabel>
            <h1>{ titulo }</h1>
        </IonLabel>
    </IonItem>
  );
};
