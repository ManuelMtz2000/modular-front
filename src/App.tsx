import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, cloud, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AcercaDeComponent from './components/Pages/AcercaDeComponent';
import AyudaComponent from './components/Pages/AyudaComponent'; 
import PublicacionesComponent from './components/Pages/PublicacionesComponent'; 
import RegistroComponent from './components/Pages/RegistroComponent'; 
import EntrarComponent from './components/Pages/EntrarComponent';
import ReporteComponent from './components/Pages/ReporteComponent';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/inicio">
            <Tab1 />
          </Route>
          <Route exact path="/publicacion">
            <Tab2 />
          </Route>
          <Route exact path="/perfil">
            <Tab3 />
          </Route>
          <Route exact path="/ayuda">
            <AyudaComponent />
          </Route>
          <Route exact path="/acerca">
            <AcercaDeComponent />
          </Route>
          <Route exact path="/publicaciones">
            <PublicacionesComponent />
          </Route>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
          <Route exact path="/registro">
            <RegistroComponent />  
          </Route>
          <Route exact path="/entrar">
            <EntrarComponent />  
          </Route>
          <Route exact path="/reportar">
            <ReporteComponent />  
          </Route>
        </IonRouterOutlet>
        <IonTabBar color='dark' className='shadow-lg border-2' slot="bottom">
          <IonTabButton className='text-orange-700 hover:bg-blue-900 hover:text-white' tab="tab1" href="/inicio">
            <IonIcon icon={home}/>
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton className='text-orange-700 hover:bg-blue-900 hover:text-white' tab="tab2" href="/publicacion">
            <IonIcon icon={cloud} />
            <IonLabel>Publicar</IonLabel>
          </IonTabButton>
          <IonTabButton className='text-orange-700 hover:bg-blue-900 hover:text-white' tab="tab3" href="/perfil">
            <IonIcon icon={person} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
