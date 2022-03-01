import { IonButton, IonIcon, IonInput, IonLabel, IonSelect, IonSelectOption, IonTextarea, IonToggle } from '@ionic/react';
import { useState } from 'react';
import { camera } from 'ionicons/icons';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [opcion, setOpcion] = useState(false);
  const [categoria, setCategoria] = useState<string>('1');
  //<IonLabel>Tipo de publicacón: {JSON.stringify(checked)}</IonLabel>
  return (
    <div className="m-4 bg-white p-5 rounded-md text-black">
        <div className='flex justify-center items-center'>
            <IonLabel>Busco un objeto</IonLabel>
            <IonToggle className='bg-gray-200 mx-2 rounded-xl' color='warning' checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
            <IonLabel>Encontre un objeto</IonLabel>
        </div>
        <form action="" className='mt-4'>
            <div className='mb-3'>
                <IonLabel>Descripción corta:</IonLabel>
                <IonInput className='bg-gray-200'></IonInput>
            </div>
            <div className='mb-3'>
                <IonLabel>Descripción larga:</IonLabel>
                <IonTextarea className='bg-gray-200'></IonTextarea>
            </div>
            <div className='mb-3'>
                <IonLabel>Etiquetas para busqueda (por lo menos, 1 obligatoria):</IonLabel>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #1"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #2"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #3"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #4"></IonInput>
                <IonInput className='bg-gray-200 mb-1' placeholder="Etiqueta #5"></IonInput>
            </div>
            <div className='mb-3'>
                <IonLabel>Categoria del objeto:</IonLabel>
                <IonSelect color='light' interface="popover" className='bg-gray-200' value={categoria} multiple={true} okText="Listo" cancelText="Cancelar" onIonChange={e => setCategoria(e.detail.value)}>
                    <IonSelectOption value="1" className='text-black'>Electronicos</IonSelectOption>
                    <IonSelectOption value="2" className='text-black'>Documentos</IonSelectOption>
                    <IonSelectOption value="3" className='text-black'>Otros</IonSelectOption>
                </IonSelect>
            </div>
            <div className='mb-2'>
                <IonLabel>Lugar encontrado / extraviado: </IonLabel>
                <IonInput className='bg-gray-200'></IonInput>
            </div>
            <div className='mb-5 flex flex-col'>
                <IonLabel>Foto del articulo (opcional): </IonLabel>
                <div className='flex items-center'>
                    <input type="file"></input>
                    <IonIcon className='text-2xl mx-2' icon={camera}></IonIcon>
                </div>
            </div>
            <div className='mb-2 flex items-center'>
                <IonLabel>Mostrar datos de contacto en publicación: </IonLabel>
                <IonLabel className='ml-2'>Si</IonLabel>
                <IonToggle className='bg-gray-200 mx-2 rounded-xl' color='warning' checked={opcion} onIonChange={e => setOpcion(e.detail.checked)} />
                <IonLabel>No</IonLabel>
            </div>
            <div className='flex justify-center'>
                <IonButton color='warning' className='w-full'>Publicar</IonButton>
            </div>
        </form>
    </div>
  );
};

export default ExploreContainer;
