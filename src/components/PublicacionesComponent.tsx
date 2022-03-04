import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import { Tarjetas } from "./TarjetasComponent";
import './InicioContenedor.css'

const PublicacionesComponent: React.FC = () => {
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
          <div className="m-4 bg-white p-5 rounded-md text-black">
            <div className="flex items-center">
              <IonSearchbar className="text-black" placeholder="Buscar un objeto..." />
              <IonButton color="warning" className="mr-2">
                Buscar
              </IonButton>
            </div>
            <Tarjetas />
            <Tarjetas />
            <Tarjetas />
          </div>
        </IonContent>
    </IonPage>
  )
};

export default PublicacionesComponent;