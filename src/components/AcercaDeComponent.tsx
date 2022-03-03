import { IonItem, IonLabel, IonPage } from "@ionic/react";
import React from "react";

const AcercaDeComponent: React.FC = () => {
  return (
      <IonPage>
          <IonItem color="white" className="text-black hover:bg-gray-200" button routerLink='../perfil'>
                <IonLabel>
                    <h1>atras</h1>
                </IonLabel>
            </IonItem>
        <div className="container">
        Acerca xddd
        </div>
      </IonPage>
  );
};

export default AcercaDeComponent;
