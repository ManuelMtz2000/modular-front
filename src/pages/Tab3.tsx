import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PerfilComponent from '../components/PerfilComponent';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='dark'>
          <div className='flex'>
            <IonImg className='w-20' src="/assets/logo_transparente.png" />
            <IonTitle>Perfil</IonTitle>
            <div className="self-center flex mr-2">
              <IonImg src="assets/perfil.jpeg" className="perfil" />
              <h1 className="m-2">Mario Duran</h1>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PerfilComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
