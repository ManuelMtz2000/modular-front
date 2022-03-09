import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const PerfilContentComponent: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonItem color="white" className="text-black hover:bg-gray-200" button routerLink='../perfil'>
                        <IonLabel>
                            <h1>atras</h1>
                        </IonLabel>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="m-4 bg-white p-5 rounded-md text-black">
                    xd
                </div>
            </IonContent>
        </IonPage>
    );
}

export default PerfilContentComponent;