import { IonButton, IonCheckbox, IonIcon, IonSearchbar } from "@ionic/react";
import { ellipsisVerticalOutline } from "ionicons/icons";
import SlidesComponent from "../Componentes/SlidesComponent";
import './InicioContenedor.css';

const InicioContenedor: React.FC = () => {
  return (
    <div className="m-4 bg-white p-5 rounded-md text-black">
      <div className="flex items-center">
        <IonSearchbar className="text-black" placeholder="Buscar un objeto..." />
        <IonButton color="warning" className="mr-2">
          Buscar
        </IonButton>
      </div>
      <div className="flex">
        <IonButton color="warning" className="mt-2 h-10">
            <IonIcon  icon={ellipsisVerticalOutline} />
        </IonButton>
        <div className="flex mx-2 mt-2 list-none overflow-auto">
          <li className="mx-2 p-2 bg-gray-400 rounded-lg flex items-center">
            <IonCheckbox slot="end" color="warning" />
            <span className="mx-2">Documentos</span>
          </li><li className="mx-2 p-2 bg-gray-400 rounded-lg flex items-center">
            <IonCheckbox slot="end" color="warning" />
            <span className="mx-2">Electronicos</span>
          </li>
          <li className="mx-2 p-2 bg-gray-400 rounded-lg flex items-center">
            <IonCheckbox slot="end" color="warning" />
            <span className="mx-2">Otros</span>
          </li>
        </div>
      </div>
      <SlidesComponent />
    </div>
  )
};

export default InicioContenedor;