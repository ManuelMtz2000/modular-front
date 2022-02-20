import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InicioContenedor from '../components/InicioContenedor';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <div className='flex'>
            <IonImg className='w-20' src="/assets/logo_transparente.png" />
            <IonTitle>Inicio</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InicioContenedor />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
