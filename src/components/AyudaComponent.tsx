import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonToolbar } from "@ionic/react";
import AyudaContenidoComponent from "./AyudaContenidoComponent";
//import { YouTubeVideoPLayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import React from "react";

const AyudaComponent: React.FC = (/*private youtube: YouTubeVideoPLayer*/) => {
  return (
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
        <IonContent fullscreen>
        <AyudaContenidoComponent></AyudaContenidoComponent>
        </IonContent>
      </IonPage>
  );
};

export default AyudaComponent;
