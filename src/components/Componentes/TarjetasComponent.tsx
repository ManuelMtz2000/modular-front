import React from "react";
import {
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
  IonItem,
  IonLabel,
} from "@ionic/react";

export const Tarjetas: React.FC = () => {
  return (
    <IonItem color="white" className="text-black hover:bg-gray-200 mb-2" button routerLink=''>
        <div className="flex flex-col md:flex-row w-full">
            <div className="p-2">
                <IonImg className="w-24" src="assets/sombrilla 2.jpeg"/>
            </div>
            <div className="flex flex-col">
                <IonCardHeader>
                    <IonCardTitle className="text-black">Card Title</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit
                    clean.
                </IonCardContent>
            </div>
            <div className="flex flex-col flex-1 items-end">
                <IonLabel>Status: </IonLabel>
                <IonLabel>Publicación cerrada</IonLabel>
            </div>
        </div>
    </IonItem>
  );
};
